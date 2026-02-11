import dotenv from "dotenv"

dotenv.config()

const {
    PORT,
    GROQ_API_KEY,
} = process.env

export const Config = {
    PORT,
    GROQ_API_KEY,
}