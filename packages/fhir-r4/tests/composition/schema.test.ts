import { createCompositionSchema } from "../../src";
import { CompositionExampleMixed, CompositionExample } from "./fixture";
import { z } from "zod/v4";

describe("Composition Schema Validation", () => {
  it("should validate CompositionExampleMixed fixture", () => {
    const result = createCompositionSchema().safeParse(CompositionExampleMixed);
    if (!result.success) {
      console.error("Validation failed for CompositionExampleMixed:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompositionExampleMixed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompositionExample fixture", () => {
    const result = createCompositionSchema().safeParse(CompositionExample);
    if (!result.success) {
      console.error("Validation failed for CompositionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompositionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
