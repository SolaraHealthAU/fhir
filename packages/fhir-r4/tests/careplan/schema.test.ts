import { createCarePlanSchema } from "../../src";
import {
  CareplanExampleGpvisit,
  CareplanExampleF001Heart,
  CareplanExampleF002Lung,
  CareplanExampleF003Pharynx,
  CareplanExampleF201Renal,
  CareplanExampleF202Malignancy,
  CareplanExampleF203Sepsis,
  CareplanExampleIntegrated,
  CareplanExampleObesityNarrative,
  CareplanExamplePregnancy,
  CareplanExample,
} from "./fixture";
import { z } from "zod/v4";

describe("CarePlan Schema Validation", () => {
  it("should validate CareplanExampleGpvisit fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleGpvisit);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleGpvisit:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleGpvisit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF001Heart fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleF001Heart);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF001Heart:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF001Heart: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF002Lung fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleF002Lung);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF002Lung:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF002Lung: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF003Pharynx fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleF003Pharynx);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF003Pharynx:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF003Pharynx: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF201Renal fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleF201Renal);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF201Renal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF201Renal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF202Malignancy fixture", () => {
    const result = createCarePlanSchema().safeParse(
      CareplanExampleF202Malignancy,
    );
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF202Malignancy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF202Malignancy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleF203Sepsis fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleF203Sepsis);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleF203Sepsis:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleF203Sepsis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleIntegrated fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExampleIntegrated);
    if (!result.success) {
      console.error("Validation failed for CareplanExampleIntegrated:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleIntegrated: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExampleObesityNarrative fixture", () => {
    const result = createCarePlanSchema().safeParse(
      CareplanExampleObesityNarrative,
    );
    if (!result.success) {
      console.error("Validation failed for CareplanExampleObesityNarrative:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExampleObesityNarrative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExamplePregnancy fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExamplePregnancy);
    if (!result.success) {
      console.error("Validation failed for CareplanExamplePregnancy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExamplePregnancy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareplanExample fixture", () => {
    const result = createCarePlanSchema().safeParse(CareplanExample);
    if (!result.success) {
      console.error("Validation failed for CareplanExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareplanExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
