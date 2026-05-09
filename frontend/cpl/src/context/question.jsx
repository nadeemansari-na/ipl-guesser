import { createContext,useContext, useState } from "react";


 const questionContext=createContext(null)

export const QuestionProvider=({children})=>{
    const [question,setQuestion]=useState({})

    return (
        <questionContext.Provider value={{question,setQuestion}} >
            {children}
        </questionContext.Provider>
    )
}

export const useQuestionProvider=()=>{
    const context=useContext(questionContext)
    if(!context){
        throw new Error("useQuestionProvider must be used within QuestionProvider")
    }
    return context
}