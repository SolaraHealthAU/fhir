import { createAccountSchema } from "../../src";
import { AccountExampleWithGuarantor, AccountExample } from "./fixture";
import { z } from "zod/v4";

describe("Account Schema Validation", () => {
  it("should validate AccountExampleWithGuarantor fixture", () => {
    const result = createAccountSchema().safeParse(AccountExampleWithGuarantor);
    if (!result.success) {
      console.error("Validation failed for AccountExampleWithGuarantor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AccountExampleWithGuarantor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AccountExample fixture", () => {
    const result = createAccountSchema().safeParse(AccountExample);
    if (!result.success) {
      console.error("Validation failed for AccountExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AccountExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
