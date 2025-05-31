import { createBinarySchema } from "../../src";
import { BinaryF006 } from "./fixture";
import { z } from "zod/v4";

describe("Binary Schema Validation", () => {
  it("should validate BinaryF006 fixture", () => {
    const result = createBinarySchema().safeParse(BinaryF006);
    if (!result.success) {
      console.error("Validation failed for BinaryF006:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BinaryF006: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
