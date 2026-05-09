import axios from "axios";
import { useEffect, useState } from "react";
import { useQuestionProvider } from "../context/question";

// const API = axios.create({
//   baseURL: "http://localhost:5173/api/game",
// });

// Start New Game
export const startGame =async () => { 


        try {
          const response = await axios.get("http://localhost:3000/api/game/start");
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
        const response = await axios.post("http://localhost:3000/api/game/answer", {
          questionId,
          answer,
        });
            console.log(response.data)
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