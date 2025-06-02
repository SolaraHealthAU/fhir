import {
  createCoverageSchema,
  createCoverageEligibilityRequestSchema,
  createCoverageEligibilityResponseSchema,
} from "../../src";
import {
  CoverageExample2,
  CoverageExampleEhic,
  CoverageExampleSelfpay,
  CoverageExample,
  CoverageeligibilityrequestExample2,
  CoverageeligibilityrequestExample,
  CoverageeligibilityresponseExampleBenefits2,
  CoverageeligibilityresponseExampleBenefits,
  CoverageeligibilityresponseExampleError,
  CoverageeligibilityresponseExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Coverage Group Schema Validation", () => {
  it("should validate CoverageExample2 fixture (Coverage)", () => {
    const result = createCoverageSchema().safeParse(CoverageExample2);
    if (!result.success) {
      console.error("Validation failed for CoverageExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageExampleEhic fixture (Coverage)", () => {
    const result = createCoverageSchema().safeParse(CoverageExampleEhic);
    if (!result.success) {
      console.error("Validation failed for CoverageExampleEhic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageExampleEhic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageExampleSelfpay fixture (Coverage)", () => {
    const result = createCoverageSchema().safeParse(CoverageExampleSelfpay);
    if (!result.success) {
      console.error("Validation failed for CoverageExampleSelfpay:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageExampleSelfpay: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageExample fixture (Coverage)", () => {
    const result = createCoverageSchema().safeParse(CoverageExample);
    if (!result.success) {
      console.error("Validation failed for CoverageExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityrequestExample2 fixture (CoverageEligibilityRequest)", () => {
    const result = createCoverageEligibilityRequestSchema().safeParse(
      CoverageeligibilityrequestExample2,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityrequestExample2:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityrequestExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityrequestExample fixture (CoverageEligibilityRequest)", () => {
    const result = createCoverageEligibilityRequestSchema().safeParse(
      CoverageeligibilityrequestExample,
    );
    if (!result.success) {
      console.error("Validation failed for CoverageeligibilityrequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityrequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityresponseExampleBenefits2 fixture (CoverageEligibilityResponse)", () => {
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

  it("should validate CoverageeligibilityresponseExampleBenefits fixture (CoverageEligibilityResponse)", () => {
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

  it("should validate CoverageeligibilityresponseExampleError fixture (CoverageEligibilityResponse)", () => {
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

  it("should validate CoverageeligibilityresponseExample fixture (CoverageEligibilityResponse)", () => {
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
