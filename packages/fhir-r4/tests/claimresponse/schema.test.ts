import { createClaimResponseSchema } from "../../src";
import {
  ClaimresponseExample2,
  ClaimresponseExampleAdditem,
  ClaimresponseExampleUnsolicitedPreauth,
  ClaimresponseExampleVision3tier,
  ClaimresponseExample,
} from "./fixture";
import { z } from "zod/v4";

describe("ClaimResponse Schema Validation", () => {
  it("should validate ClaimresponseExample2 fixture", () => {
    const result = createClaimResponseSchema().safeParse(ClaimresponseExample2);
    if (!result.success) {
      console.error("Validation failed for ClaimresponseExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimresponseExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimresponseExampleAdditem fixture", () => {
    const result = createClaimResponseSchema().safeParse(
      ClaimresponseExampleAdditem,
    );
    if (!result.success) {
      console.error("Validation failed for ClaimresponseExampleAdditem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimresponseExampleAdditem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimresponseExampleUnsolicitedPreauth fixture", () => {
    const result = createClaimResponseSchema().safeParse(
      ClaimresponseExampleUnsolicitedPreauth,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ClaimresponseExampleUnsolicitedPreauth:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimresponseExampleUnsolicitedPreauth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimresponseExampleVision3tier fixture", () => {
    const result = createClaimResponseSchema().safeParse(
      ClaimresponseExampleVision3tier,
    );
    if (!result.success) {
      console.error("Validation failed for ClaimresponseExampleVision3tier:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimresponseExampleVision3tier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimresponseExample fixture", () => {
    const result = createClaimResponseSchema().safeParse(ClaimresponseExample);
    if (!result.success) {
      console.error("Validation failed for ClaimresponseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
