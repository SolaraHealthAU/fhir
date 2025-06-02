import { createDeviceSchema, createDeviceUseStatementSchema } from "../../src";
import {
  DeviceExampleF001Feedingtube,
  DeviceExample,
  DeviceusestatementExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Device Group Schema Validation", () => {
  it("should validate DeviceExampleF001Feedingtube fixture (Device)", () => {
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

  it("should validate DeviceExample fixture (Device)", () => {
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

  it("should validate DeviceusestatementExample fixture (DeviceUseStatement)", () => {
    const result = createDeviceUseStatementSchema().safeParse(
      DeviceusestatementExample,
    );
    if (!result.success) {
      console.error("Validation failed for DeviceusestatementExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DeviceusestatementExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
