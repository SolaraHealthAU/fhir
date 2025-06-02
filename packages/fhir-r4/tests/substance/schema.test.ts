import { createSubstanceSchema } from "../../src";
import {
  SubstanceExampleAmoxicillinClavulanate,
  SubstanceExampleF201Dust,
  SubstanceExampleF202Staphylococcus,
  SubstanceExampleF203Potassium,
  SubstanceExampleSilverNitrateProduct,
  SubstanceExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Substance Group Schema Validation", () => {
  it("should validate SubstanceExampleAmoxicillinClavulanate fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(
      SubstanceExampleAmoxicillinClavulanate,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SubstanceExampleAmoxicillinClavulanate:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExampleAmoxicillinClavulanate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceExampleF201Dust fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(SubstanceExampleF201Dust);
    if (!result.success) {
      console.error("Validation failed for SubstanceExampleF201Dust:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExampleF201Dust: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceExampleF202Staphylococcus fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(
      SubstanceExampleF202Staphylococcus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SubstanceExampleF202Staphylococcus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExampleF202Staphylococcus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceExampleF203Potassium fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(
      SubstanceExampleF203Potassium,
    );
    if (!result.success) {
      console.error("Validation failed for SubstanceExampleF203Potassium:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExampleF203Potassium: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceExampleSilverNitrateProduct fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(
      SubstanceExampleSilverNitrateProduct,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SubstanceExampleSilverNitrateProduct:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExampleSilverNitrateProduct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceExample fixture (Substance)", () => {
    const result = createSubstanceSchema().safeParse(SubstanceExample);
    if (!result.success) {
      console.error("Validation failed for SubstanceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
