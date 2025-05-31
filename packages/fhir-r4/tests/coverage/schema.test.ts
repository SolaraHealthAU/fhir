import { createCoverageSchema } from "../../src";
import {
  CoverageExample2,
  CoverageExampleEhic,
  CoverageExampleSelfpay,
  CoverageExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Coverage Schema Validation", () => {
  it("should validate CoverageExample2 fixture", () => {
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

  it("should validate CoverageExampleEhic fixture", () => {
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

  it("should validate CoverageExampleSelfpay fixture", () => {
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

  it("should validate CoverageExample fixture", () => {
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
});
