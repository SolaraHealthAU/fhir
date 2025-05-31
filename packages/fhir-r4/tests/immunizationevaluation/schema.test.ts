import { createImmunizationEvaluationSchema } from "../../src";
import {
  ImmunizationevaluationExampleNotvalid,
  ImmunizationevaluationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("ImmunizationEvaluation Schema Validation", () => {
  it("should validate ImmunizationevaluationExampleNotvalid fixture", () => {
    const result = createImmunizationEvaluationSchema().safeParse(
      ImmunizationevaluationExampleNotvalid,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ImmunizationevaluationExampleNotvalid:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationevaluationExampleNotvalid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationevaluationExample fixture", () => {
    const result = createImmunizationEvaluationSchema().safeParse(
      ImmunizationevaluationExample,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationevaluationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationevaluationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
