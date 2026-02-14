import { GraphNode } from "@langchain/langgraph";
import { State } from "../graphs/state";
import { SystemMessage } from "@langchain/core/messages";
import { model } from "../utils/llm";
import { generatorPrompt } from "../prompts/generator_Prompt";
import { codeSchema } from "../schemas/code";


// const structuredModel = model.withStructuredOutput(codeSchema)

//define ceo-agent

export const generatorAgent: GraphNode<typeof State> = async (state) => {
  console.log("[generator Recieving Ta/sk:", state)

  const plan = state.plan
  const existingCode=state.existingCode && state.existingCode


  const prompt = generatorPrompt(plan,existingCode)
  //agent duty

  const response = await model.invoke([
    new SystemMessage(prompt),
    ...state.messages,
  ])

  const code = typeof response.content === "string"
    ? response.content
    : response.content.map((chunk: any) => chunk.text ?? "").join("")

  // console.log("Response in CEO:", {...state,ceo: response })

  console.log("response in generator",response)

  return { ...state, code }
}



