import { createTestReportSchema } from "../../src";
import { TestreportExample } from "./fixture";
import { z } from "zod/v4";

describe("Testreport Group Schema Validation", () => {
  it("should validate TestreportExample fixture (TestReport)", () => {
    const result = createTestReportSchema().safeParse(TestreportExample);
    if (!result.success) {
      console.error("Validation failed for TestreportExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestreportExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
