import { createPatientSchema } from "../../src";
import {
  JsonEdgeCases,
  PatientExampleA,
  PatientExampleAnimal,
  PatientExampleB,
  PatientExampleC,
  PatientExampleChinese,
  PatientExampleD,
  PatientExampleDicom,
  PatientExampleF001Pieter,
  PatientExampleIhePcd,
  PatientExampleInfantFetal,
  PatientExampleInfantMom,
  PatientExampleInfantTwin1,
  PatientExampleInfantTwin2,
  PatientExampleMom,
  PatientExampleNewborn,
  PatientExampleProband,
  PatientExampleXcda,
  PatientExampleXds,
  PatientExample,
  PatientGeneticsExample1,
  PatientGlossyExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Patient Group Schema Validation", () => {
  it("should validate JsonEdgeCases fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(JsonEdgeCases);
    if (!result.success) {
      console.error("Validation failed for JsonEdgeCases:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for JsonEdgeCases: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleA fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleA);
    if (!result.success) {
      console.error("Validation failed for PatientExampleA:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleA: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleAnimal fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleAnimal);
    if (!result.success) {
      console.error("Validation failed for PatientExampleAnimal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleAnimal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleB fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleB);
    if (!result.success) {
      console.error("Validation failed for PatientExampleB:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleB: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleC fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleC);
    if (!result.success) {
      console.error("Validation failed for PatientExampleC:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleC: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleChinese fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleChinese);
    if (!result.success) {
      console.error("Validation failed for PatientExampleChinese:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleChinese: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleD fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleD);
    if (!result.success) {
      console.error("Validation failed for PatientExampleD:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleD: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleDicom fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleDicom);
    if (!result.success) {
      console.error("Validation failed for PatientExampleDicom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleDicom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleF001Pieter fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleF001Pieter);
    if (!result.success) {
      console.error("Validation failed for PatientExampleF001Pieter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleF001Pieter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleIhePcd fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleIhePcd);
    if (!result.success) {
      console.error("Validation failed for PatientExampleIhePcd:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleIhePcd: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleInfantFetal fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleInfantFetal);
    if (!result.success) {
      console.error("Validation failed for PatientExampleInfantFetal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleInfantFetal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleInfantMom fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleInfantMom);
    if (!result.success) {
      console.error("Validation failed for PatientExampleInfantMom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleInfantMom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleInfantTwin1 fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleInfantTwin1);
    if (!result.success) {
      console.error("Validation failed for PatientExampleInfantTwin1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleInfantTwin1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleInfantTwin2 fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleInfantTwin2);
    if (!result.success) {
      console.error("Validation failed for PatientExampleInfantTwin2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleInfantTwin2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleMom fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleMom);
    if (!result.success) {
      console.error("Validation failed for PatientExampleMom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleMom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleNewborn fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleNewborn);
    if (!result.success) {
      console.error("Validation failed for PatientExampleNewborn:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleNewborn: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleProband fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleProband);
    if (!result.success) {
      console.error("Validation failed for PatientExampleProband:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleProband: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleXcda fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleXcda);
    if (!result.success) {
      console.error("Validation failed for PatientExampleXcda:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleXcda: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExampleXds fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExampleXds);
    if (!result.success) {
      console.error("Validation failed for PatientExampleXds:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExampleXds: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExample fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientExample);
    if (!result.success) {
      console.error("Validation failed for PatientExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientGeneticsExample1 fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientGeneticsExample1);
    if (!result.success) {
      console.error("Validation failed for PatientGeneticsExample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientGeneticsExample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientGlossyExample fixture (Patient)", () => {
    const result = createPatientSchema().safeParse(PatientGlossyExample);
    if (!result.success) {
      console.error("Validation failed for PatientGlossyExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientGlossyExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
