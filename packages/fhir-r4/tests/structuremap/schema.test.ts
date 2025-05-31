import { createStructureMapSchema } from "../../src";
import {
  StructuremapExample,
  StructuremapSupplyrequestTransform,
} from "./fixture";
import { z } from "zod/v4";

describe("StructureMap Schema Validation", () => {
  it("should validate StructuremapExample fixture", () => {
    const result = createStructureMapSchema().safeParse(StructuremapExample);
    if (!result.success) {
      console.error("Validation failed for StructuremapExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StructuremapExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate StructuremapSupplyrequestTransform fixture", () => {
    const result = createStructureMapSchema().safeParse(
      StructuremapSupplyrequestTransform,
    );
    if (!result.success) {
      console.error(
        "Validation failed for StructuremapSupplyrequestTransform:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StructuremapSupplyrequestTransform: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
