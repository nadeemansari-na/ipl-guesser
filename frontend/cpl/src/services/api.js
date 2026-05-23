import axios from "axios";
import { useEffect, useState } from "react";
import { useQuestionProvider } from "../context/question";
import { Backend_Url } from "./Backend";



// Start New Game
export const startGame =async () => { 


        try {
          const response = await axios.get(`${Backend_Url}/api/game/start`);
          console.log(response.data.question)
                return response.data
        } catch (error) {
          console.error("Error starting game:", error);
          throw error;
        }
      
};

// Send Answer To AI Engine
export const sendAnswer = async (questionId, answer) => {

      try {
        const response = await axios.post(`${Backend_Url}/api/game/answer`, {
          questionId,
          answer,
        });
            return response.data
      } catch (error) {
        console.error("Error sending answer:", error);
        throw error;
      }

};

// Reset Game
export const resetGame = async () => {
  try {
    const response = await API.post("/reset");
    return response.data;
  } catch (error) {
    console.error("Error resetting game:", error);
    throw error;
  }
};