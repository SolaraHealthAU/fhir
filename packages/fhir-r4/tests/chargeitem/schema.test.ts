import { createChargeItemSchema } from "../../src";
import { ChargeitemExample } from "./fixture";
import { z } from "zod/v4";

describe("Chargeitem Group Schema Validation", () => {
  it("should validate ChargeitemExample fixture (ChargeItem)", () => {
    const result = createChargeItemSchema().safeParse(ChargeitemExample);
    if (!result.success) {
      console.error("Validation failed for ChargeitemExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ChargeitemExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
