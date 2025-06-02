import { createInvoiceSchema } from "../../src";
import { InvoiceExample } from "./fixture";
import { z } from "zod/v4";

describe("Invoice Group Schema Validation", () => {
  it("should validate InvoiceExample fixture (Invoice)", () => {
    const result = createInvoiceSchema().safeParse(InvoiceExample);
    if (!result.success) {
      console.error("Validation failed for InvoiceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for InvoiceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
