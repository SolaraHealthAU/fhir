import { createHealthcareServiceSchema } from "../../src";
import { HealthcareserviceExample } from "./fixture";
import { z } from "zod/v4";

describe("HealthcareService Schema Validation", () => {
  it("should validate HealthcareserviceExample fixture", () => {
    const result = createHealthcareServiceSchema().safeParse(
      HealthcareserviceExample,
    );
    if (!result.success) {
      console.error("Validation failed for HealthcareserviceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for HealthcareserviceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
