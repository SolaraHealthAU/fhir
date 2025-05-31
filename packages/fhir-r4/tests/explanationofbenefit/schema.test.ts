import { createExplanationOfBenefitSchema } from "../../src";
import {
  ExplanationofbenefitExample2,
  ExplanationofbenefitExample,
} from "./fixture";
import { z } from "zod/v4";

describe("ExplanationOfBenefit Schema Validation", () => {
  it("should validate ExplanationofbenefitExample2 fixture", () => {
    const result = createExplanationOfBenefitSchema().safeParse(
      ExplanationofbenefitExample2,
    );
    if (!result.success) {
      console.error("Validation failed for ExplanationofbenefitExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExplanationofbenefitExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExplanationofbenefitExample fixture", () => {
    const result = createExplanationOfBenefitSchema().safeParse(
      ExplanationofbenefitExample,
    );
    if (!result.success) {
      console.error("Validation failed for ExplanationofbenefitExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExplanationofbenefitExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
