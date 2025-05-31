import { createMedicinalProductIndicationSchema } from "../../src";
import { MedicinalproductindicationExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductIndication Schema Validation", () => {
  it("should validate MedicinalproductindicationExample fixture", () => {
    const result = createMedicinalProductIndicationSchema().safeParse(
      MedicinalproductindicationExample,
    );
    if (!result.success) {
      console.error("Validation failed for MedicinalproductindicationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductindicationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
