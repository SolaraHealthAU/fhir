import { createInsurancePlanSchema } from "../../src";
import { InsuranceplanExample } from "./fixture";
import { z } from "zod/v4";

describe("InsurancePlan Schema Validation", () => {
  it("should validate InsuranceplanExample fixture", () => {
    const result = createInsurancePlanSchema().safeParse(InsuranceplanExample);
    if (!result.success) {
      console.error("Validation failed for InsuranceplanExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for InsuranceplanExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
