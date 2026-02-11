import z from "zod";

export const plannerSchema=z.object({
        layout: z.string(),
        components: z.array(z.string()),
        reasoning: z.string() 
})