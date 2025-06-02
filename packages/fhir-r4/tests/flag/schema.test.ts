import { createFlagSchema } from "../../src";
import { FlagExampleEncounter, FlagExample } from "./fixture";
import { z } from "zod/v4";

describe("Flag Group Schema Validation", () => {
  it("should validate FlagExampleEncounter fixture (Flag)", () => {
    const result = createFlagSchema().safeParse(FlagExampleEncounter);
    if (!result.success) {
      console.error("Validation failed for FlagExampleEncounter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FlagExampleEncounter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FlagExample fixture (Flag)", () => {
    const result = createFlagSchema().safeParse(FlagExample);
    if (!result.success) {
      console.error("Validation failed for FlagExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FlagExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
