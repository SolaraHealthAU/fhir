import { createParametersSchema } from "../../src";
import { ParametersExample } from "./fixture";
import { z } from "zod/v4";

describe("Parameters Group Schema Validation", () => {
  it("should validate ParametersExample fixture (Parameters)", () => {
    const result = createParametersSchema().safeParse(ParametersExample);
    if (!result.success) {
      console.error("Validation failed for ParametersExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ParametersExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
