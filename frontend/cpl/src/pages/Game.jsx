// src/pages/Game.jsx
import { useEffect, useState } from "react";
import AIAvatar from "../components/AIAvatar";
import QuestionCard from "../components/QuestionCard";
import AnswerButtons from "../components/AnswerButtons";
import ConfidenceBar from "../components/ConfidenceBar";
import HistoryPanel from "../components/HistoryPanel";
import ResultModal from "../components/ResultModel";
import { sendAnswer, startGame } from "../services/api";
import {  useQuestionProvider } from "../context/question";

export default function Game() {
  // const [question, setQuestion] = useState(
  //   "Is your player from India?"
  // );
  const {question,setQuestion}=useQuestionProvider()

  const [confidence, setConfidence] = useState(0);

  const [history, setHistory] = useState([]);
  const [ansResult,setAnswerResult]=useState({})
  const [showResult, setShowResult] = useState(false);

  useEffect(()=>{
    async function init(){
      console.log("enter")
    const data= await startGame()
    setQuestion(data.question)
    setConfidence(Math.floor(data.confidence*100))
    }
    init()
  },[])



  const handleAnswer =async (answer) => {
    setHistory((prev) => [
      ...prev,
      {
        question:question.text,
        answer,
      },
    ]);

    try{

      const data =await sendAnswer(question.id,answer)
      if(!data.done){
        setQuestion(data.nextQuestion.question)
        setConfidence(Math.floor(data.confidence*100))
      }
      else{
        setAnswerResult(data)
        setConfidence(Math.floor(data.confidence*100))
      }
      //  setConfidence((prev) => Math.min(prev + 12, 100));
       
       
       if (Math.floor(data.confidence*100) > 80) {
         setShowResult(true);
       }
      }catch(e){
        console.log(e)
      }
     };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
    
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.15),transparent_35%)]" />

      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Main Layout */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:flex-row lg:gap-8">
        {/* Left Section */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <AIAvatar />

          <div className="mt-10 w-full max-w-2xl">
            <QuestionCard question={question} />
          </div>

          <div className="mt-8 w-full max-w-xl">
            <AnswerButtons onAnswer={handleAnswer} />
          </div>

          <div className="mt-10 w-full max-w-xl">
            <ConfidenceBar confidence={confidence} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="mt-10 w-full lg:mt-0 lg:w-[380px]">
          <HistoryPanel history={history} />
        </div>
      </div>

      {/* Result Modal */}
      {showResult && (
        <ResultModal
          player={ansResult.guess}
          confidence={ansResult.confidence}
          onClose={() => setShowResult(false)}
        />
      )}
    </div>
  );
}
