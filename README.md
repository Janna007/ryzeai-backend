# ryzeAI Backend

A powerful, graph-based multi-agent backend designed for real-time React UI generation.

## Architecture Overview

The backend is built using **LangGraph**, orchestrating a sequence of specialized AI agents to transform user requirements into working React code. It follows a modular design where each step of the generation process is handled by a dedicated node in the state graph.

### The Graph Flow
1. **Planner**: Analyzes the user request and creates a technical plan.
2. **Generator**: Translates the plan into JSX code using a fixed component library.
3. **Validator**: Inspects the generated code for syntax errors and component usage rules.
4. **Explainer**: Provides a natural language summary of what was built and why.

## Agent Design & Prompts

Each agent is powered by a specific prompt that constrains its output to ensure reliability and compatibility with the frontend.

- **Planner Agent**: Focuses on breakdown and layout logic.
- **Generator Agent**: Grounded in `COMPONENT_SCHEMAS`. It uses strict rules (e.g., "NO HTML tags", "Function MUST be named MyComponent") to ensure the output can be transpiled in the browser.
- **Validator Agent**: Acting as a linter, it checks against the `COMPONENT_SCHEMAS` to ensure all required props are present.
- **Explainer Agent**: Interprets the final state to communicate the "thinking" behind the design.

## Component System Design

The system uses a **"Fixed Component Schema"** approach. Instead of giving the LLM free rein over Tailwind or standard HTML, we provide a set of high-level primitives (Stack, Grid, Card, etc.) with strict Prop definitions. This ensures:
- Visual consistency.
- Zero-runtime-error generation.
- Easy translation into Shadcn-based React components.

## Known Limitations

- **Context Window**: Extremely long code generations might hit context limits on certain Groq models.
- **Single File Output**: Currently limited to generating a single-file React component.
- **Strict Layouts**: The AI is discouraged from using arbitrary Tailwind classes to prevent layout breakages.

## Future Improvements

- **Self-Correction Loop**: Implementing an automated retry mechanism where the Validator sends errors back to the Generator.
- **Multi-Model Support**: Adding support for OpenAI and Anthropic models to compare generation quality.
- **Streaming State**: Providing real-time updates of the graph execution to the frontend.
