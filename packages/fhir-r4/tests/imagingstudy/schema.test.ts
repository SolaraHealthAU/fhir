import { createImagingStudySchema } from "../../src";
import { ImagingstudyExampleXr, ImagingstudyExample } from "./fixture";
import { z } from "zod/v4";

describe("ImagingStudy Schema Validation", () => {
  it("should validate ImagingstudyExampleXr fixture", () => {
    const result = createImagingStudySchema().safeParse(ImagingstudyExampleXr);
    if (!result.success) {
      console.error("Validation failed for ImagingstudyExampleXr:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImagingstudyExampleXr: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImagingstudyExample fixture", () => {
    const result = createImagingStudySchema().safeParse(ImagingstudyExample);
    if (!result.success) {
      console.error("Validation failed for ImagingstudyExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImagingstudyExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
