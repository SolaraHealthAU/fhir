import { createImmunizationSchema } from "../../src";
import {
  ImmunizationExampleHistorical,
  ImmunizationExampleProtocol,
  ImmunizationExampleRefused,
  ImmunizationExampleSubpotent,
  ImmunizationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Immunization Schema Validation", () => {
  it("should validate ImmunizationExampleHistorical fixture", () => {
    const result = createImmunizationSchema().safeParse(
      ImmunizationExampleHistorical,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationExampleHistorical:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationExampleHistorical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationExampleProtocol fixture", () => {
    const result = createImmunizationSchema().safeParse(
      ImmunizationExampleProtocol,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationExampleProtocol:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationExampleProtocol: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationExampleRefused fixture", () => {
    const result = createImmunizationSchema().safeParse(
      ImmunizationExampleRefused,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationExampleRefused:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationExampleRefused: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationExampleSubpotent fixture", () => {
    const result = createImmunizationSchema().safeParse(
      ImmunizationExampleSubpotent,
    );
    if (!result.success) {
      console.error("Validation failed for ImmunizationExampleSubpotent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationExampleSubpotent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationExample fixture", () => {
    const result = createImmunizationSchema().safeParse(ImmunizationExample);
    if (!result.success) {
      console.error("Validation failed for ImmunizationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
