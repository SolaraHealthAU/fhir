import { createDocumentManifestSchema } from "../../src";
import {
  DocumentmanifestExample,
  DocumentmanifestFmAttachment,
} from "./fixture";
import { z } from "zod/v4";

describe("Documentmanifest Group Schema Validation", () => {
  it("should validate DocumentmanifestExample fixture (DocumentManifest)", () => {
    const result = createDocumentManifestSchema().safeParse(
      DocumentmanifestExample,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentmanifestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentmanifestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DocumentmanifestFmAttachment fixture (DocumentManifest)", () => {
    const result = createDocumentManifestSchema().safeParse(
      DocumentmanifestFmAttachment,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentmanifestFmAttachment:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentmanifestFmAttachment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
