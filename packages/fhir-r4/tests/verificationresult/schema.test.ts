import { createVerificationResultSchema } from "../../src";
import { VerificationresultExample } from "./fixture";
import { z } from "zod/v4";

describe("VerificationResult Schema Validation", () => {
  it("should validate VerificationresultExample fixture", () => {
    const result = createVerificationResultSchema().safeParse(
      VerificationresultExample,
    );
    if (!result.success) {
      console.error("Validation failed for VerificationresultExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for VerificationresultExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
