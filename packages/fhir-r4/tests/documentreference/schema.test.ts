import { createDocumentReferenceSchema } from "../../src";
import { DocumentreferenceExample } from "./fixture";
import { z } from "zod/v4";

describe("Documentreference Group Schema Validation", () => {
  it("should validate DocumentreferenceExample fixture (DocumentReference)", () => {
    const result = createDocumentReferenceSchema().safeParse(
      DocumentreferenceExample,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentreferenceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentreferenceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
