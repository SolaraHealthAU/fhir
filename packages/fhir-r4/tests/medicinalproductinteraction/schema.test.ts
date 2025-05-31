import { createMedicinalProductInteractionSchema } from "../../src";
import { MedicinalproductinteractionExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductInteraction Schema Validation", () => {
  it("should validate MedicinalproductinteractionExample fixture", () => {
    const result = createMedicinalProductInteractionSchema().safeParse(
      MedicinalproductinteractionExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductinteractionExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductinteractionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
