import { createVisionPrescriptionSchema } from "../../src";
import {
  VisionprescriptionExample1,
  VisionprescriptionExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Visionprescription Group Schema Validation", () => {
  it("should validate VisionprescriptionExample1 fixture (VisionPrescription)", () => {
    const result = createVisionPrescriptionSchema().safeParse(
      VisionprescriptionExample1,
    );
    if (!result.success) {
      console.error("Validation failed for VisionprescriptionExample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for VisionprescriptionExample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate VisionprescriptionExample fixture (VisionPrescription)", () => {
    const result = createVisionPrescriptionSchema().safeParse(
      VisionprescriptionExample,
    );
    if (!result.success) {
      console.error("Validation failed for VisionprescriptionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for VisionprescriptionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
