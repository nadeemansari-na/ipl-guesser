import fs from "fs"

const players=JSON.parse(
    fs.readFileSync(new URL("../data/players.json", import.meta.url))
)
import questions from "../data/questions.js"
import { ai } from "../utils/gemini.js";


let playersState = [];
let askedQuestions = [];
export let askedhistory= [];

// starting point
export function initGame() {
  playersState = players.map(p => ({
    ...p,
    probability: 1 / players.length
  }));

  askedQuestions = [];


  return getNextQuestion();
}


//update + next question 
export async function processAnswer(questionId, answer) {
  const question = questions.find(q => q.id === questionId);
  askedhistory.push({
    question,
    answer
  })
  playersState = updateProbabilities(playersState, question, answer);
  playersState = normalize(playersState);

  askedQuestions.push(questionId);

  const sorted = [...playersState].sort((a, b) => b.probability - a.probability);
  const topPlayer = sorted[0];

  if (topPlayer.probability > 0.8 || askedQuestions.length >= 10) {
    return {
      done: true,
      guess: topPlayer.name,
      confidence: topPlayer.probability
    };
  }else if(topPlayer.probability<0.4 && askedQuestions.length>=5){
    const aiGuess= await askGeminiToGuess(playersState);
    return {
        done:true,
        guess:aiGuess,
        ai:true
    }
  }

  return {
    done: false,
    nextQuestion: getNextQuestion()
  };
}

//increase probability
function updateProbabilities(players, question, answer) {
  return players.map(player => {
    let match = false;
    const value = player[question.field];

    if (question.value === "MULTI") {
      match = player.teams.length > 1;
    } else if (Array.isArray(value)) {
      match = value.includes(question.value);
    } else {
      match = value === question.value;
    }

    let factor = 1;

    if (answer === "yes") factor = match ? 1.5 : 0.3;
    if (answer === "no") factor = match ? 0.3 : 1.5;
    if (answer === "maybe") factor = match ? 1.2 : 0.8;

    return {
      ...player,
      probability: player.probability * factor
    };
  });
}

//for particular player probability
function normalize(players) {
  const total = players.reduce((sum, p) => sum + p.probability, 0);
  return players.map(p => ({
    ...p,
    probability: p.probability / total
  }));
}


//generate next question
function getNextQuestion() {
  return getBestQuestion(playersState, questions, askedQuestions);
}

//get smart question
function getBestQuestion(players, questions, asked) {
  let best = null;
  let bestScore = Infinity;

  questions.forEach(q => {
    if (asked.includes(q.id)) return; //only skipping matching item

    let yes = 0;

    players.forEach(p => {
      const value = p[q.field];
      let match = false;

      if (q.value === "MULTI") match = p.teams.length > 1;      //multiple teams
      else if (Array.isArray(value)) match = value.includes(q.value);       //multiple teams
      else match = value === q.value;   //same attributes and value

      if (match) yes += p.probability;
    });

    const no = 1 - yes;
    const score = Math.abs(yes - no); //minimum difference bt matching and non matching

    if (score < bestScore) {
      bestScore = score;
      best = q;
    }
  });
  return best;
}


//Gemini part

//question generator
export async function generateQuestionText(question) {

    const prompt = `
You are an IPL Akinator game host.

Convert the following logic question into a short, natural, engaging yes/no question.

Question Logic:
${question.text}

Rules:
- Keep it under 12 words
- Sound conversational
- Ask ONLY one yes/no question
- No explanation
- No extra text
- No markdown

Good Examples:
- Is your player an overseas cricketer?
- Has he captained an IPL team?
- Is your player a finisher?

Return ONLY the question.
`;

    const result = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    return result.text.trim();
}

//ask gemini to guess
export async function askGeminiToGuess(players) {

    const topPlayers = [...players]
        .sort((a, b) => b.probability - a.probability)
        .slice(0, 5);

    const prompt = `
You are the final guess engine of an IPL guessing game.

Possible players:
${topPlayers.map(
    p => `${p.name} - ${(p.probability * 100).toFixed(1)}%`
).join("\n")}

Rules:
- Choose ONLY ONE player
- Return ONLY the player name
- No explanation
- No reasoning
- No markdown
- No bullet points

Example Output:
MS Dhoni
`;

    const result = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    return result.text.trim().split("\n")[0];
}


//after guessing
export async function explainGuess(player, answers) {
  const formattedAnswers = answers
  .map(a => `${a.question} → ${a.answer}`)
  .join("\n");
    const prompt = `
You are an IPL guessing game narrator.

Player guessed:
${player.name}

User answers:
${formattedAnswers}

Explain briefly why this player matches.

Rules:
- Maximum 2 short sentences
- Friendly tone
- Mention key traits only
- No markdown
- No bullet points

Example:
Your answers matched an Indian wicketkeeper and IPL captain, which strongly points to MS Dhoni.
`;

    const result = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    return result.text.trim();
}