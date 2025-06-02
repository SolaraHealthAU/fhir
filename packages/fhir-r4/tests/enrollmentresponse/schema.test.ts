import { createEnrollmentResponseSchema } from "../../src";
import { EnrollmentresponseExample } from "./fixture";
import { z } from "zod/v4";

describe("Enrollmentresponse Group Schema Validation", () => {
  it("should validate EnrollmentresponseExample fixture (EnrollmentResponse)", () => {
    const result = createEnrollmentResponseSchema().safeParse(
      EnrollmentresponseExample,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentresponseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
