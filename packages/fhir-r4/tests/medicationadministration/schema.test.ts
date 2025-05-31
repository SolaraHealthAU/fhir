import { createMedicationAdministrationSchema } from "../../src";
import {
  Medicationadministration0301,
  Medicationadministration0302,
  Medicationadministration0303,
  Medicationadministration0304,
  Medicationadministration0305,
  Medicationadministration0306,
  Medicationadministration0307,
  Medicationadministration0308,
  Medicationadministration0309,
  Medicationadministration0310,
  Medicationadministration0311,
  Medicationadministration0312,
  Medicationadministration0313,
  Medicationadministrationexample3,
} from "./fixture";
import { z } from "zod/v4";

describe("MedicationAdministration Schema Validation", () => {
  it("should validate Medicationadministration0301 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0301,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0301:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0301: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0302 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0302,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0302:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0302: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0303 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0303,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0303:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0303: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0304 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0304,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0304:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0304: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0305 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0305,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0305:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0305: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0306 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0306,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0306:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0306: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0307 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0307,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0307:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0307: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0308 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0308,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0308:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0308: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0309 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0309,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0309:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0309: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0310 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0310,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0310:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0310: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0311 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0311,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0311:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0311: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0312 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0312,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0312:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0312: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministration0313 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministration0313,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministration0313:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministration0313: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationadministrationexample3 fixture", () => {
    const result = createMedicationAdministrationSchema().safeParse(
      Medicationadministrationexample3,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationadministrationexample3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationadministrationexample3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
