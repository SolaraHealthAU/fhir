import { createFamilyMemberHistorySchema } from "../../src";
import {
  FamilymemberhistoryExampleMother,
  FamilymemberhistoryExample,
} from "./fixture";
import { z } from "zod/v4";

describe("FamilyMemberHistory Schema Validation", () => {
  it("should validate FamilymemberhistoryExampleMother fixture", () => {
    const result = createFamilyMemberHistorySchema().safeParse(
      FamilymemberhistoryExampleMother,
    );
    if (!result.success) {
      console.error("Validation failed for FamilymemberhistoryExampleMother:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FamilymemberhistoryExampleMother: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FamilymemberhistoryExample fixture", () => {
    const result = createFamilyMemberHistorySchema().safeParse(
      FamilymemberhistoryExample,
    );
    if (!result.success) {
      console.error("Validation failed for FamilymemberhistoryExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FamilymemberhistoryExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
