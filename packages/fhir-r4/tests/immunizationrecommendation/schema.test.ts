import { createImmunizationRecommendationSchema } from "../../src";
import {
  ImmunizationrecommendationExampleTargetDisease,
  ImmunizationrecommendationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("ImmunizationRecommendation Schema Validation", () => {
  it("should validate ImmunizationrecommendationExampleTargetDisease fixture", () => {
    const result = createImmunizationRecommendationSchema().safeParse(
      ImmunizationrecommendationExampleTargetDisease,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ImmunizationrecommendationExampleTargetDisease:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationrecommendationExampleTargetDisease: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationrecommendationExample fixture", () => {
    const result = createImmunizationRecommendationSchema().safeParse(
      ImmunizationrecommendationExample,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationrecommendationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationrecommendationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
