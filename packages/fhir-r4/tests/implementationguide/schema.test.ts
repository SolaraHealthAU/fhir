import { createImplementationGuideSchema } from "../../src";
import { ImplementationguideExample } from "./fixture";
import { z } from "zod/v4";

describe("Implementationguide Group Schema Validation", () => {
  it("should validate ImplementationguideExample fixture (ImplementationGuide)", () => {
    const result = createImplementationGuideSchema().safeParse(
      ImplementationguideExample,
    );
    if (!result.success) {
      console.error("Validation failed for ImplementationguideExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImplementationguideExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
