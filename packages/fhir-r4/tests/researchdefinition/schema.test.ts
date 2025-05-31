import { createResearchDefinitionSchema } from "../../src";
import { ResearchdefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("ResearchDefinition Schema Validation", () => {
  it("should validate ResearchdefinitionExample fixture", () => {
    const result = createResearchDefinitionSchema().safeParse(
      ResearchdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
