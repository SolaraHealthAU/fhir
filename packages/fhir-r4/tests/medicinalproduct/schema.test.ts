import { createMedicinalProductSchema } from "../../src";
import { MedicinalproductExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProduct Schema Validation", () => {
  it("should validate MedicinalproductExample fixture", () => {
    const result = createMedicinalProductSchema().safeParse(
      MedicinalproductExample,
    );
    if (!result.success) {
      console.error("Validation failed for MedicinalproductExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
