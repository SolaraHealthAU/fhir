import { createSupplyRequestSchema } from "../../src";
import { SupplyrequestExampleSimpleorder } from "./fixture";
import { z } from "zod/v4";

describe("SupplyRequest Schema Validation", () => {
  it("should validate SupplyrequestExampleSimpleorder fixture", () => {
    const result = createSupplyRequestSchema().safeParse(
      SupplyrequestExampleSimpleorder,
    );
    if (!result.success) {
      console.error("Validation failed for SupplyrequestExampleSimpleorder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SupplyrequestExampleSimpleorder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
