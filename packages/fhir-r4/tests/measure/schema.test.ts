import { createMeasureSchema } from "../../src";
import {
  MeasureCms146Example,
  MeasureComponentAExample,
  MeasureComponentBExample,
  MeasureCompositeExample,
  MeasureExclusiveBreastfeeding,
  MeasureHivIndicators,
  MeasurePredecessorExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Measure Schema Validation", () => {
  it("should validate MeasureCms146Example fixture", () => {
    const result = createMeasureSchema().safeParse(MeasureCms146Example);
    if (!result.success) {
      console.error("Validation failed for MeasureCms146Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureCms146Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasureComponentAExample fixture", () => {
    const result = createMeasureSchema().safeParse(MeasureComponentAExample);
    if (!result.success) {
      console.error("Validation failed for MeasureComponentAExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureComponentAExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasureComponentBExample fixture", () => {
    const result = createMeasureSchema().safeParse(MeasureComponentBExample);
    if (!result.success) {
      console.error("Validation failed for MeasureComponentBExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureComponentBExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasureCompositeExample fixture", () => {
    const result = createMeasureSchema().safeParse(MeasureCompositeExample);
    if (!result.success) {
      console.error("Validation failed for MeasureCompositeExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureCompositeExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasureExclusiveBreastfeeding fixture", () => {
    const result = createMeasureSchema().safeParse(
      MeasureExclusiveBreastfeeding,
    );
    if (!result.success) {
      console.error("Validation failed for MeasureExclusiveBreastfeeding:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureExclusiveBreastfeeding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasureHivIndicators fixture", () => {
    const result = createMeasureSchema().safeParse(MeasureHivIndicators);
    if (!result.success) {
      console.error("Validation failed for MeasureHivIndicators:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasureHivIndicators: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasurePredecessorExample fixture", () => {
    const result = createMeasureSchema().safeParse(MeasurePredecessorExample);
    if (!result.success) {
      console.error("Validation failed for MeasurePredecessorExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasurePredecessorExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
