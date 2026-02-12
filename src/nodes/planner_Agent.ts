import { GraphNode } from "@langchain/langgraph";
import { State } from "../graphs/state";
import { SystemMessage } from "@langchain/core/messages";
import { plannerSchema } from "../schemas/planner";
import { model } from "../utils/llm";
import { plannerPrompt } from "../prompts/planner_Prompt";


const structuredModel = model.withStructuredOutput(plannerSchema)

//define ceo-agent

export const plannerAgent: GraphNode<typeof State> = async (state) => {
  console.log("[planner-Agent Recieving Task:", state)
  const userMessage = state.messages[0]?.content
  const existingPlan=state.existingPlan 

  if (!userMessage || typeof (userMessage) !== 'string' || userMessage.trim().length === 0) {
    throw new Error("Task must be a non-empty string")
  }

  const prompt = plannerPrompt(userMessage,existingPlan)
  //agent duty

  const response = await structuredModel.invoke([
    new SystemMessage(prompt)
    , ...state.messages])

  // console.log("Response in CEO:", {...state,ceo: response })


  return { ...state,plan: response }
}



