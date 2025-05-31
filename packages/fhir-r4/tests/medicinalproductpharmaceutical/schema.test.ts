import { createMedicinalProductPharmaceuticalSchema } from "../../src";
import { MedicinalproductpharmaceuticalExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductPharmaceutical Schema Validation", () => {
  it("should validate MedicinalproductpharmaceuticalExample fixture", () => {
    const result = createMedicinalProductPharmaceuticalSchema().safeParse(
      MedicinalproductpharmaceuticalExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductpharmaceuticalExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductpharmaceuticalExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
