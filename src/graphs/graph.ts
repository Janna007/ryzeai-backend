import { END, START, StateGraph } from "@langchain/langgraph";
import { State } from "./state";
import { plannerAgent } from "../nodes/planner_Agent";

export const graph:any = new StateGraph(State)
  .addNode("planner",plannerAgent)
  .addEdge(START,"planner")
  .addEdge("planner",END)
  .compile();