import { END, START, StateGraph } from "@langchain/langgraph";
import { state } from "./state";

const agent = new StateGraph(state)
  .compile();