import { createMedicinalProductIngredientSchema } from "../../src";
import { MedicinalproductingredientExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductIngredient Schema Validation", () => {
  it("should validate MedicinalproductingredientExample fixture", () => {
    const result = createMedicinalProductIngredientSchema().safeParse(
      MedicinalproductingredientExample,
    );
    if (!result.success) {
      console.error("Validation failed for MedicinalproductingredientExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductingredientExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
