import z from "zod";

export const codeSchema=z.object({
        fileName:z.string(),
        filePath:z.string(),
        code:z.string()
})