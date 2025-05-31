import { createNamingSystemSchema } from "../../src";
import { NamingsystemExampleId, NamingsystemExample } from "./fixture";
import { z } from "zod/v4";

describe("NamingSystem Schema Validation", () => {
  it("should validate NamingsystemExampleId fixture", () => {
    const result = createNamingSystemSchema().safeParse(NamingsystemExampleId);
    if (!result.success) {
      console.error("Validation failed for NamingsystemExampleId:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NamingsystemExampleId: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NamingsystemExample fixture", () => {
    const result = createNamingSystemSchema().safeParse(NamingsystemExample);
    if (!result.success) {
      console.error("Validation failed for NamingsystemExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NamingsystemExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
