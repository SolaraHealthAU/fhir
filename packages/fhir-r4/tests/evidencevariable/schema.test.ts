import { createEvidenceVariableSchema } from "../../src";
import { EvidencevariableExample } from "./fixture";
import { z } from "zod/v4";

describe("EvidenceVariable Schema Validation", () => {
  it("should validate EvidencevariableExample fixture", () => {
    const result = createEvidenceVariableSchema().safeParse(
      EvidencevariableExample,
    );
    if (!result.success) {
      console.error("Validation failed for EvidencevariableExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EvidencevariableExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
