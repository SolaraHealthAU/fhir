import { createAdverseEventSchema } from "../../src";
import { AdverseeventExample } from "./fixture";
import { z } from "zod/v4";

describe("Adverseevent Group Schema Validation", () => {
  it("should validate AdverseeventExample fixture (AdverseEvent)", () => {
    const result = createAdverseEventSchema().safeParse(AdverseeventExample);
    if (!result.success) {
      console.error("Validation failed for AdverseeventExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AdverseeventExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
