import { MessagesValue, StateSchema } from "@langchain/langgraph";
import z from "zod";
import { plannerSchema } from "../schemas/planner";
import { explanationSchema } from "../schemas/explanation";

export const State = new StateSchema({
    messages: MessagesValue,
    
    existingPlan:plannerSchema.optional(),
    existingCode:z.string().optional(),

    plan: plannerSchema.optional(),
    code: z.string().optional(),
    explanation:explanationSchema.optional(),
  
    error: z.string().optional()

});