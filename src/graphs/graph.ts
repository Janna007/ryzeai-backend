import { END, START, StateGraph } from "@langchain/langgraph";
import { State } from "./state";
import { plannerAgent } from "../nodes/planner_Agent";
import { generatorAgent } from "../nodes/generator_Agent";
import { explanationAgent } from "../nodes/explainer_Agent";

export const graph:any = new StateGraph(State)
  .addNode("planner",plannerAgent)
  .addNode("generator",generatorAgent)
  .addNode("explainer",explanationAgent)
  .addEdge(START,"planner")
  .addEdge("planner","generator")
  .addEdge("generator","explainer")
  .addEdge("explainer",END)
  .compile();