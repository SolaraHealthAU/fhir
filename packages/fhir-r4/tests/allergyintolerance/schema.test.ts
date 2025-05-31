import { createAllergyIntoleranceSchema } from "../../src";
import {
  AllergyintoleranceExample,
  AllergyintoleranceFishallergy,
  AllergyintoleranceMedication,
  AllergyintoleranceNka,
  AllergyintoleranceNkda,
  AllergyintoleranceNkla,
} from "./fixture";
import { z } from "zod/v4";

describe("AllergyIntolerance Schema Validation", () => {
  it("should validate AllergyintoleranceExample fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceExample,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceFishallergy fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceFishallergy,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceFishallergy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceFishallergy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceMedication fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceMedication,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceMedication:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceMedication: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceNka fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceNka,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceNka:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceNka: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceNkda fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceNkda,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceNkda:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceNkda: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceNkla fixture", () => {
    const result = createAllergyIntoleranceSchema().safeParse(
      AllergyintoleranceNkla,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceNkla:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceNkla: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
