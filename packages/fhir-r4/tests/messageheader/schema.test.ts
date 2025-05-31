import { createMessageHeaderSchema } from "../../src";
import { MessageheaderExample } from "./fixture";
import { z } from "zod/v4";

describe("MessageHeader Schema Validation", () => {
  it("should validate MessageheaderExample fixture", () => {
    const result = createMessageHeaderSchema().safeParse(MessageheaderExample);
    if (!result.success) {
      console.error("Validation failed for MessageheaderExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessageheaderExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
