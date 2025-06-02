import { createGuidanceResponseSchema } from "../../src";
import { GuidanceresponseExample } from "./fixture";
import { z } from "zod/v4";

describe("Guidanceresponse Group Schema Validation", () => {
  it("should validate GuidanceresponseExample fixture (GuidanceResponse)", () => {
    const result = createGuidanceResponseSchema().safeParse(
      GuidanceresponseExample,
    );
    if (!result.success) {
      console.error("Validation failed for GuidanceresponseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GuidanceresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
