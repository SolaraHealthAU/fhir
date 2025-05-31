import { createMedicinalProductContraindicationSchema } from "../../src";
import { MedicinalproductcontraindicationExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductContraindication Schema Validation", () => {
  it("should validate MedicinalproductcontraindicationExample fixture", () => {
    const result = createMedicinalProductContraindicationSchema().safeParse(
      MedicinalproductcontraindicationExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductcontraindicationExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductcontraindicationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
