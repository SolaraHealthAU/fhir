import { createMedicinalProductManufacturedSchema } from "../../src";
import { MedicinalproductmanufacturedExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductManufactured Schema Validation", () => {
  it("should validate MedicinalproductmanufacturedExample fixture", () => {
    const result = createMedicinalProductManufacturedSchema().safeParse(
      MedicinalproductmanufacturedExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductmanufacturedExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductmanufacturedExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
