import { createTerminologyCapabilitiesSchema } from "../../src";
import { TerminologycapabilitiesExample } from "./fixture";
import { z } from "zod/v4";

describe("TerminologyCapabilities Schema Validation", () => {
  it("should validate TerminologycapabilitiesExample fixture", () => {
    const result = createTerminologyCapabilitiesSchema().safeParse(
      TerminologycapabilitiesExample,
    );
    if (!result.success) {
      console.error("Validation failed for TerminologycapabilitiesExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TerminologycapabilitiesExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
