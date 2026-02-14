import { GraphNode } from "@langchain/langgraph";
import { State } from "../graphs/state";
import { SystemMessage } from "@langchain/core/messages";
import { model } from "../utils/llm";
import { validatorSchema } from "../schemas/validator_Schema";
import { validatorPrompt } from "../prompts/validator_Prompt";

const structuredModel = model.withStructuredOutput(validatorSchema);

export const validatorAgent: GraphNode<typeof State> = async (state) => {
    console.log("[validator] Validating code...");

    const code = state.code;
    if (!code) {
        return { ...state, validation: { isValid: false, errors: ["No code generated"], status: "invalid" } };
    }

    const prompt = validatorPrompt(code);

    try {
        const response = await structuredModel.invoke([
            new SystemMessage(prompt),
            ...state.messages,
        ]);

        console.log("[validator] Result:", response);

        return {
            ...state,
            validation: response
        };
    } catch (error) {
        console.error("[validator] Error:", error);
        return {
            ...state,
            validation: { isValid: false, errors: ["Validation system error"], status: "invalid" }
        };
    }
};
