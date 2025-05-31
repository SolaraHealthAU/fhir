import { createObservationDefinitionSchema } from "../../src";
import { ObservationdefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("ObservationDefinition Schema Validation", () => {
  it("should validate ObservationdefinitionExample fixture", () => {
    const result = createObservationDefinitionSchema().safeParse(
      ObservationdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
