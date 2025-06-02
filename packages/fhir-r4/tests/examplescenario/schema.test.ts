import { createExampleScenarioSchema } from "../../src";
import { ExamplescenarioExample } from "./fixture";
import { z } from "zod/v4";

describe("Examplescenario Group Schema Validation", () => {
  it("should validate ExamplescenarioExample fixture (ExampleScenario)", () => {
    const result = createExampleScenarioSchema().safeParse(
      ExamplescenarioExample,
    );
    if (!result.success) {
      console.error("Validation failed for ExamplescenarioExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExamplescenarioExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
