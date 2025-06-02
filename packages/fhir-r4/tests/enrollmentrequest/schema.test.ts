import { createEnrollmentRequestSchema } from "../../src";
import { EnrollmentrequestExample } from "./fixture";
import { z } from "zod/v4";

describe("Enrollmentrequest Group Schema Validation", () => {
  it("should validate EnrollmentrequestExample fixture (EnrollmentRequest)", () => {
    const result = createEnrollmentRequestSchema().safeParse(
      EnrollmentrequestExample,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentrequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentrequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
