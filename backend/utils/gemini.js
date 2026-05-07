import dotenv from "dotenv";
dotenv.config();

// console.log("API KEY:", process.env.API_KEY ? "LOADED" : "MISSING");
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
export const ai = new GoogleGenAI({apiKey:`${process.env.GEMINI_API_KEY}`});

//test
// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3.1-flash-lite-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();