import { createCoverageEligibilityResponseSchema } from "../../src";
import {
  CoverageeligibilityresponseExampleBenefits2,
  CoverageeligibilityresponseExampleBenefits,
  CoverageeligibilityresponseExampleError,
  CoverageeligibilityresponseExample,
} from "./fixture";
import { z } from "zod/v4";

describe("CoverageEligibilityResponse Schema Validation", () => {
  it("should validate CoverageeligibilityresponseExampleBenefits2 fixture", () => {
    const result = createCoverageEligibilityResponseSchema().safeParse(
      CoverageeligibilityresponseExampleBenefits2,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityresponseExampleBenefits2:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityresponseExampleBenefits2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityresponseExampleBenefits fixture", () => {
    const result = createCoverageEligibilityResponseSchema().safeParse(
      CoverageeligibilityresponseExampleBenefits,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityresponseExampleBenefits:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityresponseExampleBenefits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityresponseExampleError fixture", () => {
    const result = createCoverageEligibilityResponseSchema().safeParse(
      CoverageeligibilityresponseExampleError,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityresponseExampleError:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityresponseExampleError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityresponseExample fixture", () => {
    const result = createCoverageEligibilityResponseSchema().safeParse(
      CoverageeligibilityresponseExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityresponseExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
