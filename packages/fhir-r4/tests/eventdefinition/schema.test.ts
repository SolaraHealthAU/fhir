import { createEventDefinitionSchema } from "../../src";
import { EventdefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("EventDefinition Schema Validation", () => {
  it("should validate EventdefinitionExample fixture", () => {
    const result = createEventDefinitionSchema().safeParse(
      EventdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for EventdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EventdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
