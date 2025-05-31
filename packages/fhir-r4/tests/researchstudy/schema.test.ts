import { createResearchStudySchema } from "../../src";
import { ResearchstudyExample } from "./fixture";
import { z } from "zod/v4";

describe("ResearchStudy Schema Validation", () => {
  it("should validate ResearchstudyExample fixture", () => {
    const result = createResearchStudySchema().safeParse(ResearchstudyExample);
    if (!result.success) {
      console.error("Validation failed for ResearchstudyExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchstudyExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
