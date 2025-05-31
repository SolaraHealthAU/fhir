import { createSpecimenSchema } from "../../src";
import {
  SpecimenExampleIsolate,
  SpecimenExamplePooledSerum,
  SpecimenExampleSerum,
  SpecimenExampleUrine,
  SpecimenExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Specimen Schema Validation", () => {
  it("should validate SpecimenExampleIsolate fixture", () => {
    const result = createSpecimenSchema().safeParse(SpecimenExampleIsolate);
    if (!result.success) {
      console.error("Validation failed for SpecimenExampleIsolate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenExampleIsolate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimenExamplePooledSerum fixture", () => {
    const result = createSpecimenSchema().safeParse(SpecimenExamplePooledSerum);
    if (!result.success) {
      console.error("Validation failed for SpecimenExamplePooledSerum:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenExamplePooledSerum: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimenExampleSerum fixture", () => {
    const result = createSpecimenSchema().safeParse(SpecimenExampleSerum);
    if (!result.success) {
      console.error("Validation failed for SpecimenExampleSerum:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenExampleSerum: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimenExampleUrine fixture", () => {
    const result = createSpecimenSchema().safeParse(SpecimenExampleUrine);
    if (!result.success) {
      console.error("Validation failed for SpecimenExampleUrine:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenExampleUrine: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimenExample fixture", () => {
    const result = createSpecimenSchema().safeParse(SpecimenExample);
    if (!result.success) {
      console.error("Validation failed for SpecimenExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
