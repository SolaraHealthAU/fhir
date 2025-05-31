import { createLinkageSchema } from "../../src";
import { LinkageExample } from "./fixture";
import { z } from "zod/v4";

describe("Linkage Schema Validation", () => {
  it("should validate LinkageExample fixture", () => {
    const result = createLinkageSchema().safeParse(LinkageExample);
    if (!result.success) {
      console.error("Validation failed for LinkageExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LinkageExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
