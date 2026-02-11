import { ChatGroq } from "@langchain/groq";
import { Config } from "../config";

export const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0,
    maxTokens: 1000,
    maxRetries: 2,
    apiKey:Config.GROQ_API_KEY!
  });