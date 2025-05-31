import { createMedicinalProductUndesirableEffectSchema } from "../../src";
import { MedicinalproductundesirableeffectExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductUndesirableEffect Schema Validation", () => {
  it("should validate MedicinalproductundesirableeffectExample fixture", () => {
    const result = createMedicinalProductUndesirableEffectSchema().safeParse(
      MedicinalproductundesirableeffectExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductundesirableeffectExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductundesirableeffectExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
