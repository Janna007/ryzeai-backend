import {COMPONENT_SCHEMAS } from "../constants/components";

export function plannerPrompt(userMessage: string, existingPlan: any) {

     // Extract required props clearly
   const requiredPropsGuide = Object.entries(COMPONENT_SCHEMAS)
   .map(([name, schema]: [string, any]) => {
     const required = Object.entries(schema.props)
       .filter(([_, prop]: [string, any]) => prop.required)
       .map(([propName, prop]: [string, any]) => {
         const example = prop.default || 
           (prop.type.includes('|') ? prop.type.split('|')[0].trim().replace(/'/g, '"') : '""');
         return `  ${propName}={${example}}`;
       });
     
     if (required.length === 0) return null;
     
     return `<${name}\n${required.join('\n')}\n>\n  children\n</${name}>`;
   })
   .filter(Boolean)
   .join('\n\n');


    return `You are a UI planner.

AVAILABLE COMPONENTS:
${JSON.stringify(COMPONENT_SCHEMAS, null, 2)}

⚠️ CRITICAL - REQUIRED PROPS (YOU MUST INCLUDE THESE):
${requiredPropsGuide}

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