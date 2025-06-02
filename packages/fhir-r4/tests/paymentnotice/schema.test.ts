import { createPaymentNoticeSchema } from "../../src";
import { PaymentnoticeExample } from "./fixture";
import { z } from "zod/v4";

describe("Paymentnotice Group Schema Validation", () => {
  it("should validate PaymentnoticeExample fixture (PaymentNotice)", () => {
    const result = createPaymentNoticeSchema().safeParse(PaymentnoticeExample);
    if (!result.success) {
      console.error("Validation failed for PaymentnoticeExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PaymentnoticeExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
