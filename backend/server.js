import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import gameroutes from "./gameroutes.js"

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/game", gameroutes);
console.log(process.env.GEMINI_API_KEY)
// Start Server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
