import { createBundleSchema } from "../../src";
import {
  BundleExample,
  BundleReferences,
  BundleRequestMedsallergies,
  BundleRequestSimplesummary,
  BundleResponseMedsallergies,
  BundleResponseSimplesummary,
  BundleResponse,
  BundleSearchWarning,
  BundleTransaction,
  DiagnosticreportExampleF001Bloodexam,
  DiagnosticreportExampleF202Bloodculture,
  DiagnosticreportExampleLipids,
  DiagnosticreportExampleLri,
  DiagnosticreportGeneticsComprehensiveBoneMarrowReport,
  DiagnosticreportGeneticsExample2Familyhistory,
  DiagnosticreportHlaGeneticsResultsExample,
  DiagnosticreportMicro1,
  DocumentExampleDischargesummary,
  EndpointExamplesGeneralTemplate,
  ExternalResources,
  LocationExamplesGeneral,
  MessageRequestLink,
  MessageResponseLink,
  PatientExamplesGeneral,
  PractitionerExamplesGeneral,
  PractitionerroleExamplesGeneral,
} from "./fixture";
import { z } from "zod/v4";

describe("Bundle Schema Validation", () => {
  it("should validate BundleExample fixture", () => {
    const result = createBundleSchema().safeParse(BundleExample);
    if (!result.success) {
      console.error("Validation failed for BundleExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleReferences fixture", () => {
    const result = createBundleSchema().safeParse(BundleReferences);
    if (!result.success) {
      console.error("Validation failed for BundleReferences:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleReferences: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleRequestMedsallergies fixture", () => {
    const result = createBundleSchema().safeParse(BundleRequestMedsallergies);
    if (!result.success) {
      console.error("Validation failed for BundleRequestMedsallergies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleRequestMedsallergies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleRequestSimplesummary fixture", () => {
    const result = createBundleSchema().safeParse(BundleRequestSimplesummary);
    if (!result.success) {
      console.error("Validation failed for BundleRequestSimplesummary:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleRequestSimplesummary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleResponseMedsallergies fixture", () => {
    const result = createBundleSchema().safeParse(BundleResponseMedsallergies);
    if (!result.success) {
      console.error("Validation failed for BundleResponseMedsallergies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleResponseMedsallergies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleResponseSimplesummary fixture", () => {
    const result = createBundleSchema().safeParse(BundleResponseSimplesummary);
    if (!result.success) {
      console.error("Validation failed for BundleResponseSimplesummary:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleResponseSimplesummary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleResponse fixture", () => {
    const result = createBundleSchema().safeParse(BundleResponse);
    if (!result.success) {
      console.error("Validation failed for BundleResponse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleResponse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleSearchWarning fixture", () => {
    const result = createBundleSchema().safeParse(BundleSearchWarning);
    if (!result.success) {
      console.error("Validation failed for BundleSearchWarning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleSearchWarning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleTransaction fixture", () => {
    const result = createBundleSchema().safeParse(BundleTransaction);
    if (!result.success) {
      console.error("Validation failed for BundleTransaction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleTransaction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleF001Bloodexam fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportExampleF001Bloodexam,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportExampleF001Bloodexam:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleF001Bloodexam: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleF202Bloodculture fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportExampleF202Bloodculture,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportExampleF202Bloodculture:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleF202Bloodculture: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleLipids fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportExampleLipids,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExampleLipids:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleLipids: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleLri fixture", () => {
    const result = createBundleSchema().safeParse(DiagnosticreportExampleLri);
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExampleLri:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleLri: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportGeneticsComprehensiveBoneMarrowReport fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportGeneticsComprehensiveBoneMarrowReport,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportGeneticsComprehensiveBoneMarrowReport:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportGeneticsComprehensiveBoneMarrowReport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportGeneticsExample2Familyhistory fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportGeneticsExample2Familyhistory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportGeneticsExample2Familyhistory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportGeneticsExample2Familyhistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportHlaGeneticsResultsExample fixture", () => {
    const result = createBundleSchema().safeParse(
      DiagnosticreportHlaGeneticsResultsExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportHlaGeneticsResultsExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportHlaGeneticsResultsExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportMicro1 fixture", () => {
    const result = createBundleSchema().safeParse(DiagnosticreportMicro1);
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportMicro1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportMicro1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DocumentExampleDischargesummary fixture", () => {
    const result = createBundleSchema().safeParse(
      DocumentExampleDischargesummary,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentExampleDischargesummary:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentExampleDischargesummary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointExamplesGeneralTemplate fixture", () => {
    const result = createBundleSchema().safeParse(
      EndpointExamplesGeneralTemplate,
    );
    if (!result.success) {
      console.error("Validation failed for EndpointExamplesGeneralTemplate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointExamplesGeneralTemplate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExternalResources fixture", () => {
    const result = createBundleSchema().safeParse(ExternalResources);
    if (!result.success) {
      console.error("Validation failed for ExternalResources:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExternalResources: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExamplesGeneral fixture", () => {
    const result = createBundleSchema().safeParse(LocationExamplesGeneral);
    if (!result.success) {
      console.error("Validation failed for LocationExamplesGeneral:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExamplesGeneral: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessageRequestLink fixture", () => {
    const result = createBundleSchema().safeParse(MessageRequestLink);
    if (!result.success) {
      console.error("Validation failed for MessageRequestLink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessageRequestLink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessageResponseLink fixture", () => {
    const result = createBundleSchema().safeParse(MessageResponseLink);
    if (!result.success) {
      console.error("Validation failed for MessageResponseLink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessageResponseLink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientExamplesGeneral fixture", () => {
    const result = createBundleSchema().safeParse(PatientExamplesGeneral);
    if (!result.success) {
      console.error("Validation failed for PatientExamplesGeneral:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientExamplesGeneral: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExamplesGeneral fixture", () => {
    const result = createBundleSchema().safeParse(PractitionerExamplesGeneral);
    if (!result.success) {
      console.error("Validation failed for PractitionerExamplesGeneral:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExamplesGeneral: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerroleExamplesGeneral fixture", () => {
    const result = createBundleSchema().safeParse(
      PractitionerroleExamplesGeneral,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerroleExamplesGeneral:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerroleExamplesGeneral: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
