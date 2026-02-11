import { MessagesValue, StateSchema } from "@langchain/langgraph";
import z from "zod";

export const state = new StateSchema({
    messages: MessagesValue,
    
    existingPlan: z.string().optional() ,
 
    existingCode:z.string().optional(),

    plan: z.string().optional(),
    code: z.string().optional(),
    explanation: z.string().optional(),
  
    error: z.string().optional()

});