import { createSubstanceSpecificationSchema } from "../../src";
import {
  SubstancenucleicacidExample,
  SubstancepolymerExample,
  SubstanceproteinExample,
  SubstancereferenceinformationExample,
  SubstancesourcematerialExample,
  SubstancespecificationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("SubstanceSpecification Schema Validation", () => {
  it("should validate SubstancenucleicacidExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstancenucleicacidExample,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancenucleicacidExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancenucleicacidExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancepolymerExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstancepolymerExample,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancepolymerExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancepolymerExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceproteinExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstanceproteinExample,
    );
    if (!result.success) {
      console.error("Validation failed for SubstanceproteinExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceproteinExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancereferenceinformationExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstancereferenceinformationExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SubstancereferenceinformationExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancereferenceinformationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancesourcematerialExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstancesourcematerialExample,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancesourcematerialExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancesourcematerialExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancespecificationExample fixture", () => {
    const result = createSubstanceSpecificationSchema().safeParse(
      SubstancespecificationExample,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancespecificationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancespecificationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
