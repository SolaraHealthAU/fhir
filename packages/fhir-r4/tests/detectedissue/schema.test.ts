import { createDetectedIssueSchema } from "../../src";
import {
  DetectedissueExampleAllergy,
  DetectedissueExampleDup,
  DetectedissueExampleLab,
  DetectedissueExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Detectedissue Group Schema Validation", () => {
  it("should validate DetectedissueExampleAllergy fixture (DetectedIssue)", () => {
    const result = createDetectedIssueSchema().safeParse(
      DetectedissueExampleAllergy,
    );
    if (!result.success) {
      console.error("Validation failed for DetectedissueExampleAllergy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DetectedissueExampleAllergy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DetectedissueExampleDup fixture (DetectedIssue)", () => {
    const result = createDetectedIssueSchema().safeParse(
      DetectedissueExampleDup,
    );
    if (!result.success) {
      console.error("Validation failed for DetectedissueExampleDup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DetectedissueExampleDup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DetectedissueExampleLab fixture (DetectedIssue)", () => {
    const result = createDetectedIssueSchema().safeParse(
      DetectedissueExampleLab,
    );
    if (!result.success) {
      console.error("Validation failed for DetectedissueExampleLab:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DetectedissueExampleLab: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DetectedissueExample fixture (DetectedIssue)", () => {
    const result = createDetectedIssueSchema().safeParse(DetectedissueExample);
    if (!result.success) {
      console.error("Validation failed for DetectedissueExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DetectedissueExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
