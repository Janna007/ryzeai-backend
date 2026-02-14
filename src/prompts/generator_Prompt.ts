import { COMPONENT_SCHEMAS } from "../constants/components";


export function generatorPrompt(plan: any, existingCode: any) {

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


  return `Generate React UI using ONLY these components:

AVAILABLE COMPONENTS:
${JSON.stringify(COMPONENT_SCHEMAS, null, 2)}

⚠️ CRITICAL - REQUIRED PROPS (YOU MUST INCLUDE THESE):
${requiredPropsGuide}



STRICT RULES:
- Output valid JSX code only - NO markdown, explanations, or backticks
- Function MUST be named "MyComponent" and exported as default
- Use ONLY components from '@/components/ui/fixed' - NO HTML tags (div, span, p, h1, etc.)
- NO custom components, inline styles, Tailwind classes, or icons
- ALL required props MUST be included
- Use Stack/Grid/Container for layouts
- Dark theme: wrap in <div className="dark min-h-screen bg-gray-950 p-8">...</div>.(only when user mention "dark theme" or "dark mode")

PLAN:
${JSON.stringify(plan, null, 2)}

${existingCode ? `EXISTING CODE (modify, don't rewrite):\n${existingCode}\n` : ''}

OUTPUT FORMAT:
import React, { useState } from 'react';
import { Button, Card, Input, Text, Stack, Container, Grid } from '@/components/ui/fixed';

export default function MyComponent() {
  return (
    <Container size="lg">
      <Stack gap="md">
        <Text variant="heading1">Title</Text>
        <Card title="Example">
          <Text>Content here</Text>
        </Card>
      </Stack>
    </Container>
  );
}`;
}