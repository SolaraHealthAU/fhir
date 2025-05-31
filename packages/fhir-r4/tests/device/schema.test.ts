import { createDeviceSchema } from "../../src";
import { DeviceExampleF001Feedingtube, DeviceExample } from "./fixture";
import { z } from "zod/v4";

describe("Device Schema Validation", () => {
  it("should validate DeviceExampleF001Feedingtube fixture", () => {
    const result = createDeviceSchema().safeParse(DeviceExampleF001Feedingtube);
    if (!result.success) {
      console.error("Validation failed for DeviceExampleF001Feedingtube:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DeviceExampleF001Feedingtube: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DeviceExample fixture", () => {
    const result = createDeviceSchema().safeParse(DeviceExample);
    if (!result.success) {
      console.error("Validation failed for DeviceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DeviceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
