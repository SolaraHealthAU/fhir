import { createPractitionerRoleSchema } from "../../src";
import { PractitionerroleExample } from "./fixture";
import { z } from "zod/v4";

describe("PractitionerRole Schema Validation", () => {
  it("should validate PractitionerroleExample fixture", () => {
    const result = createPractitionerRoleSchema().safeParse(
      PractitionerroleExample,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerroleExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerroleExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
