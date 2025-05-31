import { createBiologicallyDerivedProductSchema } from "../../src";
import { BiologicallyderivedproductExample } from "./fixture";
import { z } from "zod/v4";

describe("BiologicallyDerivedProduct Schema Validation", () => {
  it("should validate BiologicallyderivedproductExample fixture", () => {
    const result = createBiologicallyDerivedProductSchema().safeParse(
      BiologicallyderivedproductExample,
    );
    if (!result.success) {
      console.error("Validation failed for BiologicallyderivedproductExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BiologicallyderivedproductExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
