import { createPaymentReconciliationSchema } from "../../src";
import { PaymentreconciliationExample } from "./fixture";
import { z } from "zod/v4";

describe("Paymentreconciliation Group Schema Validation", () => {
  it("should validate PaymentreconciliationExample fixture (PaymentReconciliation)", () => {
    const result = createPaymentReconciliationSchema().safeParse(
      PaymentreconciliationExample,
    );
    if (!result.success) {
      console.error("Validation failed for PaymentreconciliationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PaymentreconciliationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
