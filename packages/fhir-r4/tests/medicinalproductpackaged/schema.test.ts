import { createMedicinalProductPackagedSchema } from "../../src";
import { MedicinalproductpackagedExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductPackaged Schema Validation", () => {
  it("should validate MedicinalproductpackagedExample fixture", () => {
    const result = createMedicinalProductPackagedSchema().safeParse(
      MedicinalproductpackagedExample,
    );
    if (!result.success) {
      console.error("Validation failed for MedicinalproductpackagedExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductpackagedExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
