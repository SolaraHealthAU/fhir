import { createRiskEvidenceSynthesisSchema } from "../../src";
import { RiskevidencesynthesisExample } from "./fixture";
import { z } from "zod/v4";

describe("RiskEvidenceSynthesis Schema Validation", () => {
  it("should validate RiskevidencesynthesisExample fixture", () => {
    const result = createRiskEvidenceSynthesisSchema().safeParse(
      RiskevidencesynthesisExample,
    );
    if (!result.success) {
      console.error("Validation failed for RiskevidencesynthesisExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskevidencesynthesisExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
