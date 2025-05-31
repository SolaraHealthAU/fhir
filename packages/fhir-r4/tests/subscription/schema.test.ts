import { createSubscriptionSchema } from "../../src";
import { SubscriptionExampleError, SubscriptionExample } from "./fixture";
import { z } from "zod/v4";

describe("Subscription Schema Validation", () => {
  it("should validate SubscriptionExampleError fixture", () => {
    const result = createSubscriptionSchema().safeParse(
      SubscriptionExampleError,
    );
    if (!result.success) {
      console.error("Validation failed for SubscriptionExampleError:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubscriptionExampleError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubscriptionExample fixture", () => {
    const result = createSubscriptionSchema().safeParse(SubscriptionExample);
    if (!result.success) {
      console.error("Validation failed for SubscriptionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubscriptionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
