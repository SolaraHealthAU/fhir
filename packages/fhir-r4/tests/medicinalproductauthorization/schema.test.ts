import { createMedicinalProductAuthorizationSchema } from "../../src";
import { MedicinalproductauthorizationExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicinalProductAuthorization Schema Validation", () => {
  it("should validate MedicinalproductauthorizationExample fixture", () => {
    const result = createMedicinalProductAuthorizationSchema().safeParse(
      MedicinalproductauthorizationExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductauthorizationExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductauthorizationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
