import { createContractSchema } from "../../src";
import {
  ContractExample42cfrPart2,
  ContractExampleInsPolicy,
  ContractExample,
  PcdExampleNotauthor,
  PcdExampleNotlabs,
  PcdExampleNotorg,
  PcdExampleNotthem,
  PcdExampleNotthis,
} from "./fixture";
import { z } from "zod/v4";

describe("Contract Schema Validation", () => {
  it("should validate ContractExample42cfrPart2 fixture", () => {
    const result = createContractSchema().safeParse(ContractExample42cfrPart2);
    if (!result.success) {
      console.error("Validation failed for ContractExample42cfrPart2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContractExample42cfrPart2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ContractExampleInsPolicy fixture", () => {
    const result = createContractSchema().safeParse(ContractExampleInsPolicy);
    if (!result.success) {
      console.error("Validation failed for ContractExampleInsPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContractExampleInsPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ContractExample fixture", () => {
    const result = createContractSchema().safeParse(ContractExample);
    if (!result.success) {
      console.error("Validation failed for ContractExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContractExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PcdExampleNotauthor fixture", () => {
    const result = createContractSchema().safeParse(PcdExampleNotauthor);
    if (!result.success) {
      console.error("Validation failed for PcdExampleNotauthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PcdExampleNotauthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PcdExampleNotlabs fixture", () => {
    const result = createContractSchema().safeParse(PcdExampleNotlabs);
    if (!result.success) {
      console.error("Validation failed for PcdExampleNotlabs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PcdExampleNotlabs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PcdExampleNotorg fixture", () => {
    const result = createContractSchema().safeParse(PcdExampleNotorg);
    if (!result.success) {
      console.error("Validation failed for PcdExampleNotorg:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PcdExampleNotorg: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PcdExampleNotthem fixture", () => {
    const result = createContractSchema().safeParse(PcdExampleNotthem);
    if (!result.success) {
      console.error("Validation failed for PcdExampleNotthem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PcdExampleNotthem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PcdExampleNotthis fixture", () => {
    const result = createContractSchema().safeParse(PcdExampleNotthis);
    if (!result.success) {
      console.error("Validation failed for PcdExampleNotthis:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PcdExampleNotthis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
