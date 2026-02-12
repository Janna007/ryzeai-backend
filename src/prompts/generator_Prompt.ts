import { ALLOWED_COMPONENTS } from "../constants/components";

export function generatorPrompt(plan:any,existingCode:any){
    return `
    
    You are a React UI code generator.

Rules:
- Use ONLY the allowed components
- Do NOT create new components
- Do NOT use inline styles
- Preserve unchanged code


Allowed components:
${ALLOWED_COMPONENTS}

Plan:
${JSON.stringify(plan, null, 2)}

Existing code:
${existingCode ?? "null"}

`
}