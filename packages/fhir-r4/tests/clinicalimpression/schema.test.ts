import { createClinicalImpressionSchema } from "../../src";
import { ClinicalimpressionExample } from "./fixture";
import { z } from "zod/v4";

describe("Clinicalimpression Group Schema Validation", () => {
  it("should validate ClinicalimpressionExample fixture (ClinicalImpression)", () => {
    const result = createClinicalImpressionSchema().safeParse(
      ClinicalimpressionExample,
    );
    if (!result.success) {
      console.error("Validation failed for ClinicalimpressionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClinicalimpressionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
