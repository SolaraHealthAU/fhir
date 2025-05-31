import { createCompartmentDefinitionSchema } from "../../src";
import {
  CompartmentdefinitionDevice,
  CompartmentdefinitionEncounter,
  CompartmentdefinitionExample,
  CompartmentdefinitionPatient,
  CompartmentdefinitionPractitioner,
  CompartmentdefinitionRelatedperson,
} from "./fixture";
import { z } from "zod/v4";

describe("CompartmentDefinition Schema Validation", () => {
  it("should validate CompartmentdefinitionDevice fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionDevice,
    );
    if (!result.success) {
      console.error("Validation failed for CompartmentdefinitionDevice:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionDevice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionEncounter fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionEncounter,
    );
    if (!result.success) {
      console.error("Validation failed for CompartmentdefinitionEncounter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionEncounter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionExample fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for CompartmentdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionPatient fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionPatient,
    );
    if (!result.success) {
      console.error("Validation failed for CompartmentdefinitionPatient:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionPatient: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionPractitioner fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionPractitioner,
    );
    if (!result.success) {
      console.error("Validation failed for CompartmentdefinitionPractitioner:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionPractitioner: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionRelatedperson fixture", () => {
    const result = createCompartmentDefinitionSchema().safeParse(
      CompartmentdefinitionRelatedperson,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CompartmentdefinitionRelatedperson:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionRelatedperson: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
