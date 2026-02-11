import z from "zod";

export const explanationSchema=z.object({
         summary: z.string(),
         decisions: z.array(z.object({
            component:z.string(),
            reason:z.string()
         })),
       
})