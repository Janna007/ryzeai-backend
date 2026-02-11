import { ALLOWED_COMPONENTS } from "../constants/components";

export function plannerPrompt(userMessage:string,existingPlan:any){
    return `You are a UI planner.

Allowed components:
${ALLOWED_COMPONENTS}

Rules:
- Do NOT invent components
- Do NOT write JSX
- Output VALID JSON ONLY
- Modify existing plan when provided

User request:
${userMessage}

Existing plan:
${existingPlan ? JSON.stringify(existingPlan, null, 2) : "null"}`
}