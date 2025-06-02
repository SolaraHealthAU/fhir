import { createRiskAssessmentSchema } from "../../src";
import {
  RiskassessmentExampleBreastcancer,
  RiskassessmentExampleCardiac,
  RiskassessmentExamplePopulation,
  RiskassessmentExamplePrognosis,
  RiskassessmentExample,
  RiskassessmentRiskexample,
} from "./fixture";
import { z } from "zod/v4";

describe("Riskassessment Group Schema Validation", () => {
  it("should validate RiskassessmentExampleBreastcancer fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentExampleBreastcancer,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentExampleBreastcancer:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentExampleBreastcancer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentExampleCardiac fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentExampleCardiac,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentExampleCardiac:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentExampleCardiac: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentExamplePopulation fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentExamplePopulation,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentExamplePopulation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentExamplePopulation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentExamplePrognosis fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentExamplePrognosis,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentExamplePrognosis:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentExamplePrognosis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentExample fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentExample,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentRiskexample fixture (RiskAssessment)", () => {
    const result = createRiskAssessmentSchema().safeParse(
      RiskassessmentRiskexample,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentRiskexample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentRiskexample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
