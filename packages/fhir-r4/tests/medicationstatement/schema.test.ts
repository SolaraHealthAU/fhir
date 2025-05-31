import { createMedicationStatementSchema } from "../../src";
import {
  Medicationstatementexample1,
  Medicationstatementexample2,
  Medicationstatementexample3,
  Medicationstatementexample4,
  Medicationstatementexample5,
  Medicationstatementexample6,
  Medicationstatementexample7,
} from "./fixture";
import { z } from "zod/v4";

describe("MedicationStatement Schema Validation", () => {
  it("should validate Medicationstatementexample1 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample1,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample2 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample2,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample3 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample3,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample4 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample4,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample5 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample5,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample5:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample5: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample6 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample6,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample6:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample6: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationstatementexample7 fixture", () => {
    const result = createMedicationStatementSchema().safeParse(
      Medicationstatementexample7,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationstatementexample7:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationstatementexample7: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
