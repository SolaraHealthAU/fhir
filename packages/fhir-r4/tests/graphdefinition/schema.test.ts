import { createGraphDefinitionSchema } from "../../src";
import { GraphdefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("Graphdefinition Group Schema Validation", () => {
  it("should validate GraphdefinitionExample fixture (GraphDefinition)", () => {
    const result = createGraphDefinitionSchema().safeParse(
      GraphdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for GraphdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GraphdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
