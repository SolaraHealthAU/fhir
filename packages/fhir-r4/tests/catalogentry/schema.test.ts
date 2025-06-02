import { createCatalogEntrySchema } from "../../src";
import { CatalogentryExample } from "./fixture";
import { z } from "zod/v4";

describe("Catalogentry Group Schema Validation", () => {
  it("should validate CatalogentryExample fixture (CatalogEntry)", () => {
    const result = createCatalogEntrySchema().safeParse(CatalogentryExample);
    if (!result.success) {
      console.error("Validation failed for CatalogentryExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CatalogentryExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
