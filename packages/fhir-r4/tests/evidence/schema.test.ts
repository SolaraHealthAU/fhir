import { createEvidenceSchema } from "../../src";
import { EvidenceExample } from "./fixture";
import { z } from "zod/v4";

describe("Evidence Schema Validation", () => {
  it("should validate EvidenceExample fixture", () => {
    const result = createEvidenceSchema().safeParse(EvidenceExample);
    if (!result.success) {
      console.error("Validation failed for EvidenceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EvidenceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
