import { createDeviceMetricSchema } from "../../src";
import { DevicemetricExample } from "./fixture";
import { z } from "zod/v4";

describe("DeviceMetric Schema Validation", () => {
  it("should validate DevicemetricExample fixture", () => {
    const result = createDeviceMetricSchema().safeParse(DevicemetricExample);
    if (!result.success) {
      console.error("Validation failed for DevicemetricExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicemetricExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
