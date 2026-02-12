import { GraphNode } from "@langchain/langgraph";
import { State } from "../graphs/state";
import { SystemMessage } from "@langchain/core/messages";
import { model } from "../utils/llm";
import { explanationSchema } from "../schemas/explanation";
import { explainerPrompt } from "../prompts/explainer_Prompt";


const structuredModel = model.withStructuredOutput(explanationSchema)

//define ceo-agent

export const explanationAgent: GraphNode<typeof State> = async (state) => {
  console.log("[explainer Recieving Ta/sk:", state)

  const plan = state.plan
//   const existingCode=state.existingCode && state.existingCode


  const prompt = explainerPrompt(plan)
  //agent duty

  const response = await structuredModel.invoke([
    new SystemMessage(prompt)
    , ...state.messages])

  // console.log("Response in CEO:", {...state,ceo: response })

  // console.log("response in generator",response)

  return { ...state,explanation:response}
}



