import { createChargeItemDefinitionSchema } from "../../src";
import {
  ChargeitemdefinitionDeviceExample,
  ChargeitemdefinitionEbmExample,
} from "./fixture";
import { z } from "zod/v4";

describe("ChargeItemDefinition Schema Validation", () => {
  it("should validate ChargeitemdefinitionDeviceExample fixture", () => {
    const result = createChargeItemDefinitionSchema().safeParse(
      ChargeitemdefinitionDeviceExample,
    );
    if (!result.success) {
      console.error("Validation failed for ChargeitemdefinitionDeviceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ChargeitemdefinitionDeviceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ChargeitemdefinitionEbmExample fixture", () => {
    const result = createChargeItemDefinitionSchema().safeParse(
      ChargeitemdefinitionEbmExample,
    );
    if (!result.success) {
      console.error("Validation failed for ChargeitemdefinitionEbmExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ChargeitemdefinitionEbmExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
