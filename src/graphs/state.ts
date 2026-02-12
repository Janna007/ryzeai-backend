import { MessagesValue, StateSchema } from "@langchain/langgraph";
import z from "zod";
import { plannerSchema } from "../schemas/planner";
import { explanationSchema } from "../schemas/explanation";
import { codeSchema } from "../schemas/code";

export const State = new StateSchema({
    messages: MessagesValue,
    
    existingPlan:plannerSchema.optional(),
    existingCode:codeSchema.optional(),

    plan: plannerSchema.optional(),
    code: codeSchema.optional(),
    explanation:explanationSchema.optional(),
  
    error: z.string().optional()

});