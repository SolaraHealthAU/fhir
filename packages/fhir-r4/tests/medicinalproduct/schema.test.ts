import {
  createMedicinalProductSchema,
  createMedicinalProductUndesirableEffectSchema,
} from "../../src";
import {
  MedicinalproductExample,
  MedicinalproductundesirableeffectExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Medicinalproduct Group Schema Validation", () => {
  it("should validate MedicinalproductExample fixture (MedicinalProduct)", () => {
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

  it("should validate MedicinalproductundesirableeffectExample fixture (MedicinalProductUndesirableEffect)", () => {
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
