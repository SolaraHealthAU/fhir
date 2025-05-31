import { createEffectEvidenceSynthesisSchema } from "../../src";
import { EffectevidencesynthesisExample } from "./fixture";
import { z } from "zod/v4";

describe("EffectEvidenceSynthesis Schema Validation", () => {
  it("should validate EffectevidencesynthesisExample fixture", () => {
    const result = createEffectEvidenceSynthesisSchema().safeParse(
      EffectevidencesynthesisExample,
    );
    if (!result.success) {
      console.error("Validation failed for EffectevidencesynthesisExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EffectevidencesynthesisExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
