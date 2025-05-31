import { createDeviceRequestSchema } from "../../src";
import {
  DevicerequestExampleInsulinpump,
  DevicerequestExample,
  DevicerequestLeftLens,
  DevicerequestRightLens,
} from "./fixture";
import { z } from "zod/v4";

describe("DeviceRequest Schema Validation", () => {
  it("should validate DevicerequestExampleInsulinpump fixture", () => {
    const result = createDeviceRequestSchema().safeParse(
      DevicerequestExampleInsulinpump,
    );
    if (!result.success) {
      console.error("Validation failed for DevicerequestExampleInsulinpump:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicerequestExampleInsulinpump: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DevicerequestExample fixture", () => {
    const result = createDeviceRequestSchema().safeParse(DevicerequestExample);
    if (!result.success) {
      console.error("Validation failed for DevicerequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicerequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DevicerequestLeftLens fixture", () => {
    const result = createDeviceRequestSchema().safeParse(DevicerequestLeftLens);
    if (!result.success) {
      console.error("Validation failed for DevicerequestLeftLens:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicerequestLeftLens: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DevicerequestRightLens fixture", () => {
    const result = createDeviceRequestSchema().safeParse(
      DevicerequestRightLens,
    );
    if (!result.success) {
      console.error("Validation failed for DevicerequestRightLens:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicerequestRightLens: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
