import { createRelatedPersonSchema } from "../../src";
import {
  RelatedpersonExampleF001Sarah,
  RelatedpersonExampleF002Ariadne,
  RelatedpersonExampleNewbornMom,
} from "./fixture";
import { z } from "zod/v4";

describe("Relatedperson Group Schema Validation", () => {
  it("should validate RelatedpersonExampleF001Sarah fixture (RelatedPerson)", () => {
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

  it("should validate RelatedpersonExampleF002Ariadne fixture (RelatedPerson)", () => {
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

  it("should validate RelatedpersonExampleNewbornMom fixture (RelatedPerson)", () => {
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
});
