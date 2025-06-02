import { createResearchSubjectSchema } from "../../src";
import { ResearchsubjectExample } from "./fixture";
import { z } from "zod/v4";

describe("Researchsubject Group Schema Validation", () => {
  it("should validate ResearchsubjectExample fixture (ResearchSubject)", () => {
    const result = createResearchSubjectSchema().safeParse(
      ResearchsubjectExample,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchsubjectExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchsubjectExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
