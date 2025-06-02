import { createBasicSchema } from "../../src";
import { BasicExampleNarrative, BasicExample, BasicExample2 } from "./fixture";
import { z } from "zod/v4";

describe("Basic Group Schema Validation", () => {
  it("should validate BasicExampleNarrative fixture (Basic)", () => {
    const result = createBasicSchema().safeParse(BasicExampleNarrative);
    if (!result.success) {
      console.error("Validation failed for BasicExampleNarrative:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BasicExampleNarrative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BasicExample fixture (Basic)", () => {
    const result = createBasicSchema().safeParse(BasicExample);
    if (!result.success) {
      console.error("Validation failed for BasicExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BasicExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BasicExample2 fixture (Basic)", () => {
    const result = createBasicSchema().safeParse(BasicExample2);
    if (!result.success) {
      console.error("Validation failed for BasicExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BasicExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
