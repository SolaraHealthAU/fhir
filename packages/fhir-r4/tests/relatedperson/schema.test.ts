import { createRelatedPersonSchema } from "../../src";
import {
  RelatedpersonExampleF001Sarah,
  RelatedpersonExampleF002Ariadne,
  RelatedpersonExampleNewbornMom,
  RelatedpersonExamplePeter,
  RelatedpersonExample,
} from "./fixture";
import { z } from "zod/v4";

describe("RelatedPerson Schema Validation", () => {
  it("should validate RelatedpersonExampleF001Sarah fixture", () => {
    const result = createRelatedPersonSchema().safeParse(
      RelatedpersonExampleF001Sarah,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedpersonExampleF001Sarah:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonExampleF001Sarah: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedpersonExampleF002Ariadne fixture", () => {
    const result = createRelatedPersonSchema().safeParse(
      RelatedpersonExampleF002Ariadne,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedpersonExampleF002Ariadne:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonExampleF002Ariadne: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedpersonExampleNewbornMom fixture", () => {
    const result = createRelatedPersonSchema().safeParse(
      RelatedpersonExampleNewbornMom,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedpersonExampleNewbornMom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonExampleNewbornMom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedpersonExamplePeter fixture", () => {
    const result = createRelatedPersonSchema().safeParse(
      RelatedpersonExamplePeter,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedpersonExamplePeter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonExamplePeter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedpersonExample fixture", () => {
    const result = createRelatedPersonSchema().safeParse(RelatedpersonExample);
    if (!result.success) {
      console.error("Validation failed for RelatedpersonExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
