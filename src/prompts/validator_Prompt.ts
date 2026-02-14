import { COMPONENT_SCHEMAS } from "../constants/components";

export function validatorPrompt(code: string) {
    return `
    You are a JSX validator for a fixed component library.
    Your task is to review the generated code and ensure it ONLY uses allowed components and that all REQUIRED props are provided.
    
    Allowed Components and Schamas:
    ${JSON.stringify(COMPONENT_SCHEMAS, null, 2)}
    
    Generated Code:
    ${code}
    
    Rules:
    1. Check if ANY HTML tag (div, span, etc.) is used OUTSIDE of the theme-wrapping <div className="dark">.
    2. Check if all used components from the library have their "Required" props.
       - Navbar MUST have title and items.
       - Sidebar MUST have items.
       - Table MUST have columns and data.
       - Chart MUST have type, data, and title.
       - Modal MUST have isOpen, onClose, and title.
    3. Check if all icons used (like Home, Settings, User) are imported from 'lucide-react'.
    4. Ensure the component is exported as 'default' and named 'MyComponent'.
    5. Provide a list of specific errors if found.
    6. If the code is perfect, return status: "valid".
  `;
}
