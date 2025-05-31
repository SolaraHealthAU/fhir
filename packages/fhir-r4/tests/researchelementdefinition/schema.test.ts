import { createResearchElementDefinitionSchema } from "../../src";
import { ResearchelementdefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("ResearchElementDefinition Schema Validation", () => {
  it("should validate ResearchelementdefinitionExample fixture", () => {
    const result = createResearchElementDefinitionSchema().safeParse(
      ResearchelementdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchelementdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchelementdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
