import { createConditionSchema } from "../../src";
import {
  ConditionExampleF001Heart,
  ConditionExampleF002Lung,
  ConditionExampleF003Abscess,
  ConditionExampleF201Fever,
  ConditionExampleF202Malignancy,
  ConditionExampleF203Sepsis,
  ConditionExampleF204Renal,
  ConditionExampleF205Infection,
  ConditionExampleFamilyHistory,
  ConditionExampleStroke,
  ConditionExample,
  ConditionExample2,
} from "./fixture";
import { z } from "zod/v4";

describe("Condition Schema Validation", () => {
  it("should validate ConditionExampleF001Heart fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExampleF001Heart);
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF001Heart:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF001Heart: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF002Lung fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExampleF002Lung);
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF002Lung:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF002Lung: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF003Abscess fixture", () => {
    const result = createConditionSchema().safeParse(
      ConditionExampleF003Abscess,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF003Abscess:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF003Abscess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF201Fever fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExampleF201Fever);
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF201Fever:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF201Fever: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF202Malignancy fixture", () => {
    const result = createConditionSchema().safeParse(
      ConditionExampleF202Malignancy,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF202Malignancy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF202Malignancy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF203Sepsis fixture", () => {
    const result = createConditionSchema().safeParse(
      ConditionExampleF203Sepsis,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF203Sepsis:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF203Sepsis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF204Renal fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExampleF204Renal);
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF204Renal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF204Renal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleF205Infection fixture", () => {
    const result = createConditionSchema().safeParse(
      ConditionExampleF205Infection,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionExampleF205Infection:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleF205Infection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleFamilyHistory fixture", () => {
    const result = createConditionSchema().safeParse(
      ConditionExampleFamilyHistory,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionExampleFamilyHistory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleFamilyHistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExampleStroke fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExampleStroke);
    if (!result.success) {
      console.error("Validation failed for ConditionExampleStroke:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExampleStroke: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExample fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExample);
    if (!result.success) {
      console.error("Validation failed for ConditionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionExample2 fixture", () => {
    const result = createConditionSchema().safeParse(ConditionExample2);
    if (!result.success) {
      console.error("Validation failed for ConditionExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
