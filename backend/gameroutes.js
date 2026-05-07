import express from "express"
import { askedhistory, explainGuess, generateQuestionText, initGame,processAnswer } from "./engine/brain.js"

 const router=express.Router()

//start question
router.get("/start",async (req,res)=>{
    const firstquestion=initGame()
    console.log(firstquestion)
    const text= await generateQuestionText(firstquestion)
    res.json({
        question:firstquestion,
        text:text
    })
})


//answer question
router.post("/answer",async (req,res)=>{
    const {questionId, answer} =req.body;

    const result=await processAnswer(questionId, answer);
    
    
    if(result.done){
        const explaination= await explainGuess({name:result.guess}, askedhistory);

        return res.json({
            ...result,
            explaination
        })
    }
    console.log(result.nextQuestion)
    const text= await generateQuestionText(result.nextQuestion);

    res.json({
        done:false,
        nextQuestion:{
            id:result.nextQuestion.id,
            text:text
        }
    })

    // res.json(result);
})

export default router