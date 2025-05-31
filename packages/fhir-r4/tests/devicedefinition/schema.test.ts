import { createDeviceDefinitionSchema } from "../../src";
import { DevicedefinitionExample } from "./fixture";
import { z } from "zod/v4";

describe("DeviceDefinition Schema Validation", () => {
  it("should validate DevicedefinitionExample fixture", () => {
    const result = createDeviceDefinitionSchema().safeParse(
      DevicedefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for DevicedefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicedefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
