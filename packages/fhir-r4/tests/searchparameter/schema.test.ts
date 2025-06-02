import { createSearchParameterSchema } from "../../src";
import {
  CodesystemExtensionsCodesystemAuthor,
  CodesystemExtensionsCodesystemEffective,
  CodesystemExtensionsCodesystemEnd,
  CodesystemExtensionsCodesystemKeyword,
  CodesystemExtensionsCodesystemWorkflow,
  DeviceExtensionsDeviceDin,
  DiagnosticreportGeneticDiagnosticreportAssessedCondition,
  ObservationGeneticObservationAminoAcidChange,
  ObservationGeneticObservationDnaVariant,
  ObservationGeneticObservationGeneAminoAcidChange,
  ObservationGeneticObservationGeneDnavariant,
  ObservationGeneticObservationGeneIdentifier,
  PatientExtensionsPatientAge,
  PatientExtensionsPatientBirthorderboolean,
  PatientExtensionsPatientMothersmaidenname,
  SearchparameterExampleExtension,
  SearchparameterExampleReference,
  SearchparameterExample,
  SearchparameterFilter,
  ValuesetExtensionsValuesetAuthor,
  ValuesetExtensionsValuesetEffective,
  ValuesetExtensionsValuesetEnd,
  ValuesetExtensionsValuesetKeyword,
  ValuesetExtensionsValuesetWorkflow,
} from "./fixture";
import { z } from "zod/v4";

describe("Searchparameter Group Schema Validation", () => {
  it("should validate CodesystemExtensionsCodesystemAuthor fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      CodesystemExtensionsCodesystemAuthor,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExtensionsCodesystemAuthor:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionsCodesystemAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtensionsCodesystemEffective fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      CodesystemExtensionsCodesystemEffective,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExtensionsCodesystemEffective:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionsCodesystemEffective: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtensionsCodesystemEnd fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      CodesystemExtensionsCodesystemEnd,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExtensionsCodesystemEnd:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionsCodesystemEnd: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtensionsCodesystemKeyword fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      CodesystemExtensionsCodesystemKeyword,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExtensionsCodesystemKeyword:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionsCodesystemKeyword: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtensionsCodesystemWorkflow fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      CodesystemExtensionsCodesystemWorkflow,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExtensionsCodesystemWorkflow:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionsCodesystemWorkflow: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DeviceExtensionsDeviceDin fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      DeviceExtensionsDeviceDin,
    );
    if (!result.success) {
      console.error("Validation failed for DeviceExtensionsDeviceDin:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DeviceExtensionsDeviceDin: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportGeneticDiagnosticreportAssessedCondition fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      DiagnosticreportGeneticDiagnosticreportAssessedCondition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportGeneticDiagnosticreportAssessedCondition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportGeneticDiagnosticreportAssessedCondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationGeneticObservationAminoAcidChange fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ObservationGeneticObservationAminoAcidChange,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationGeneticObservationAminoAcidChange:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationGeneticObservationAminoAcidChange: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationGeneticObservationDnaVariant fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ObservationGeneticObservationDnaVariant,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationGeneticObservationDnaVariant:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationGeneticObservationDnaVariant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationGeneticObservationGeneAminoAcidChange fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ObservationGeneticObservationGeneAminoAcidChange,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationGeneticObservationGeneAminoAcidChange:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationGeneticObservationGeneAminoAcidChange: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationGeneticObservationGeneDnavariant fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ObservationGeneticObservationGeneDnavariant,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationGeneticObservationGeneDnavariant:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationGeneticObservationGeneDnavariant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationGeneticObservationGeneIdentifier fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ObservationGeneticObservationGeneIdentifier,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationGeneticObservationGeneIdentifier:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationGeneticObservationGeneIdentifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExtensionsPatientAge fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      PatientExtensionsPatientAge,
    );
    if (!result.success) {
      console.error("Validation failed for PatientExtensionsPatientAge:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExtensionsPatientAge: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExtensionsPatientBirthorderboolean fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      PatientExtensionsPatientBirthorderboolean,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PatientExtensionsPatientBirthorderboolean:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExtensionsPatientBirthorderboolean: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExtensionsPatientMothersmaidenname fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      PatientExtensionsPatientMothersmaidenname,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PatientExtensionsPatientMothersmaidenname:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExtensionsPatientMothersmaidenname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SearchparameterExampleExtension fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      SearchparameterExampleExtension,
    );
    if (!result.success) {
      console.error("Validation failed for SearchparameterExampleExtension:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SearchparameterExampleExtension: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SearchparameterExampleReference fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      SearchparameterExampleReference,
    );
    if (!result.success) {
      console.error("Validation failed for SearchparameterExampleReference:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SearchparameterExampleReference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SearchparameterExample fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      SearchparameterExample,
    );
    if (!result.success) {
      console.error("Validation failed for SearchparameterExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SearchparameterExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SearchparameterFilter fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      SearchparameterFilter,
    );
    if (!result.success) {
      console.error("Validation failed for SearchparameterFilter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SearchparameterFilter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionsValuesetAuthor fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ValuesetExtensionsValuesetAuthor,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExtensionsValuesetAuthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionsValuesetAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionsValuesetEffective fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ValuesetExtensionsValuesetEffective,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetExtensionsValuesetEffective:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionsValuesetEffective: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionsValuesetEnd fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ValuesetExtensionsValuesetEnd,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExtensionsValuesetEnd:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionsValuesetEnd: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionsValuesetKeyword fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ValuesetExtensionsValuesetKeyword,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExtensionsValuesetKeyword:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionsValuesetKeyword: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionsValuesetWorkflow fixture (SearchParameter)", () => {
    const result = createSearchParameterSchema().safeParse(
      ValuesetExtensionsValuesetWorkflow,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetExtensionsValuesetWorkflow:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionsValuesetWorkflow: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
