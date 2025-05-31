import { createSupplyDeliverySchema } from "../../src";
import {
  SupplydeliveryExamplePumpdelivery,
  SupplydeliveryExample,
} from "./fixture";
import { z } from "zod/v4";

describe("SupplyDelivery Schema Validation", () => {
  it("should validate SupplydeliveryExamplePumpdelivery fixture", () => {
    const result = createSupplyDeliverySchema().safeParse(
      SupplydeliveryExamplePumpdelivery,
    );
    if (!result.success) {
      console.error("Validation failed for SupplydeliveryExamplePumpdelivery:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SupplydeliveryExamplePumpdelivery: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SupplydeliveryExample fixture", () => {
    const result = createSupplyDeliverySchema().safeParse(
      SupplydeliveryExample,
    );
    if (!result.success) {
      console.error("Validation failed for SupplydeliveryExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SupplydeliveryExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
