export function explainerPrompt(plan:any){
    return `
    
   Explain the UI decisions made.

Mention:
- Why each component was chosen
- What changed from previous version
- How the layout supports user intent

Plan:
${JSON.stringify(plan, null, 2)}

`
}