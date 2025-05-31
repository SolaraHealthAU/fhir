import { createDeviceUseStatementSchema } from "../../src";
import { DeviceusestatementExample } from "./fixture";
import { z } from "zod/v4";

describe("DeviceUseStatement Schema Validation", () => {
  it("should validate DeviceusestatementExample fixture", () => {
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
