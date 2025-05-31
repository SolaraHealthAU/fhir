import { createCoverageEligibilityRequestSchema } from "../../src";
import {
  CoverageeligibilityrequestExample2,
  CoverageeligibilityrequestExample,
} from "./fixture";
import { z } from "zod/v4";

describe("CoverageEligibilityRequest Schema Validation", () => {
  it("should validate CoverageeligibilityrequestExample2 fixture", () => {
    const result = createCoverageEligibilityRequestSchema().safeParse(
      CoverageeligibilityrequestExample2,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityrequestExample2:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityrequestExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityrequestExample fixture", () => {
    const result = createCoverageEligibilityRequestSchema().safeParse(
      CoverageeligibilityrequestExample,
    );
    if (!result.success) {
      console.error("Validation failed for CoverageeligibilityrequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityrequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
