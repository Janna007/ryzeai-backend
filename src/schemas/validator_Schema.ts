import z from "zod";

export const validatorSchema = z.object({
    isValid: z.boolean(),
    errors: z.array(z.string()).describe("List of validation errors found in the JSX code"),
    suggestions: z.string().describe("Brief suggestion on how to fix the errors"),
    status: z.enum(["valid", "invalid"])
});
