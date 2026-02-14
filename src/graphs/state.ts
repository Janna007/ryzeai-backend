import { MessagesValue, StateSchema } from "@langchain/langgraph";
import z from "zod";
import { plannerSchema } from "../schemas/planner";
import { explanationSchema } from "../schemas/explanation";
import { codeSchema } from "../schemas/code";

export const State = new StateSchema({
    messages: MessagesValue,

    existingPlan: plannerSchema.optional().nullable(),
    existingCode: z.string().nullable(),

    plan: plannerSchema.optional(),
    code: z.string(),
    validation: z.any().optional(),
    explanation: explanationSchema.optional(),

    error: z.string().optional()

});