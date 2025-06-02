import { createConceptMapSchema } from "../../src";
import {
  CmAddressTypeV3,
  CmAddressUseV2,
  CmAddressUseV3,
  CmAdministrativeGenderV2,
  CmAdministrativeGenderV3,
  CmCompositionStatusV3,
  CmContactPointSystemV2,
  CmContactPointUseV2,
  CmContactPointUseV3,
  CmDataAbsentReasonV3,
  CmDetectedissueSeverityV3,
  CmDocumentReferenceStatusV3,
  CmNameUseV2,
  CmNameUseV3,
  Conceptmap103,
  ConceptmapCdshooksIndicator,
  ConceptmapExample2,
  ConceptmapExample,
  ScValuesetAccountStatus,
  ScValuesetAllergyintoleranceClinical,
  ScValuesetAllergyintoleranceVerification,
  ScValuesetAppointmentstatus,
  ScValuesetCarePlanActivityStatus,
  ScValuesetCareTeamStatus,
  ScValuesetChargeitemStatus,
  ScValuesetClinicalimpressionStatus,
  ScValuesetCompositionStatus,
  ScValuesetConditionVerStatus,
  ScValuesetConsentStateCodes,
  ScValuesetContractPublicationstatus,
  ScValuesetContractStatus,
  ScValuesetDeviceStatementStatus,
  ScValuesetDeviceStatus,
  ScValuesetDiagnosticReportStatus,
  ScValuesetDocumentReferenceStatus,
  ScValuesetEncounterLocationStatus,
  ScValuesetEncounterStatus,
  ScValuesetEndpointStatus,
  ScValuesetEpisodeOfCareStatus,
  ScValuesetEventStatus,
  ScValuesetExplanationofbenefitStatus,
  ScValuesetFlagStatus,
  ScValuesetFmStatus,
  ScValuesetGoalAchievement,
  ScValuesetGoalStatus,
  ScValuesetGuidanceResponseStatus,
  ScValuesetHistoryStatus,
  ScValuesetImagingstudyStatus,
  ScValuesetImmunizationEvaluationStatus,
  ScValuesetImmunizationStatus,
  ScValuesetInvoiceStatus,
  ScValuesetListStatus,
  ScValuesetLocationStatus,
  ScValuesetMeasureReportStatus,
  ScValuesetMedicationAdminStatus,
  ScValuesetMedicationStatementStatus,
  ScValuesetMedicationStatus,
  ScValuesetMedicationdispenseStatus,
  ScValuesetMedicationknowledgeStatus,
  ScValuesetMedicationrequestStatus,
  ScValuesetMetricOperationalStatus,
  ScValuesetObservationStatus,
  ScValuesetParticipationstatus,
  ScValuesetProductStatus,
  ScValuesetPublicationStatus,
  ScValuesetQuestionnaireAnswersStatus,
  ScValuesetReportStatusCodes,
  ScValuesetRequestStatus,
  ScValuesetResearchStudyStatus,
  ScValuesetResearchSubjectStatus,
  ScValuesetSlotstatus,
  ScValuesetSpecimenStatus,
  ScValuesetSubscriptionStatus,
  ScValuesetSubstanceStatus,
  ScValuesetSupplydeliveryStatus,
  ScValuesetSupplyrequestStatus,
  ScValuesetTaskStatus,
  ScValuesetVerificationresultStatus,
  ScValuesetVerificationresultValidationStatus,
} from "./fixture";
import { z } from "zod/v4";

describe("Conceptmap Group Schema Validation", () => {
  it("should validate CmAddressTypeV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmAddressTypeV3);
    if (!result.success) {
      console.error("Validation failed for CmAddressTypeV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmAddressTypeV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmAddressUseV2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmAddressUseV2);
    if (!result.success) {
      console.error("Validation failed for CmAddressUseV2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmAddressUseV2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmAddressUseV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmAddressUseV3);
    if (!result.success) {
      console.error("Validation failed for CmAddressUseV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmAddressUseV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmAdministrativeGenderV2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmAdministrativeGenderV2);
    if (!result.success) {
      console.error("Validation failed for CmAdministrativeGenderV2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmAdministrativeGenderV2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmAdministrativeGenderV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmAdministrativeGenderV3);
    if (!result.success) {
      console.error("Validation failed for CmAdministrativeGenderV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmAdministrativeGenderV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmCompositionStatusV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmCompositionStatusV3);
    if (!result.success) {
      console.error("Validation failed for CmCompositionStatusV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmCompositionStatusV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmContactPointSystemV2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmContactPointSystemV2);
    if (!result.success) {
      console.error("Validation failed for CmContactPointSystemV2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmContactPointSystemV2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmContactPointUseV2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmContactPointUseV2);
    if (!result.success) {
      console.error("Validation failed for CmContactPointUseV2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmContactPointUseV2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmContactPointUseV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmContactPointUseV3);
    if (!result.success) {
      console.error("Validation failed for CmContactPointUseV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmContactPointUseV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmDataAbsentReasonV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmDataAbsentReasonV3);
    if (!result.success) {
      console.error("Validation failed for CmDataAbsentReasonV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmDataAbsentReasonV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmDetectedissueSeverityV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      CmDetectedissueSeverityV3,
    );
    if (!result.success) {
      console.error("Validation failed for CmDetectedissueSeverityV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmDetectedissueSeverityV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmDocumentReferenceStatusV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      CmDocumentReferenceStatusV3,
    );
    if (!result.success) {
      console.error("Validation failed for CmDocumentReferenceStatusV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmDocumentReferenceStatusV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmNameUseV2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmNameUseV2);
    if (!result.success) {
      console.error("Validation failed for CmNameUseV2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmNameUseV2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CmNameUseV3 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(CmNameUseV3);
    if (!result.success) {
      console.error("Validation failed for CmNameUseV3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CmNameUseV3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Conceptmap103 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(Conceptmap103);
    if (!result.success) {
      console.error("Validation failed for Conceptmap103:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Conceptmap103: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConceptmapCdshooksIndicator fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ConceptmapCdshooksIndicator,
    );
    if (!result.success) {
      console.error("Validation failed for ConceptmapCdshooksIndicator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConceptmapCdshooksIndicator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConceptmapExample2 fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ConceptmapExample2);
    if (!result.success) {
      console.error("Validation failed for ConceptmapExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConceptmapExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConceptmapExample fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ConceptmapExample);
    if (!result.success) {
      console.error("Validation failed for ConceptmapExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConceptmapExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetAccountStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetAccountStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetAccountStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetAccountStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetAllergyintoleranceClinical fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetAllergyintoleranceClinical,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetAllergyintoleranceClinical:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetAllergyintoleranceClinical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetAllergyintoleranceVerification fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetAllergyintoleranceVerification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetAllergyintoleranceVerification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetAllergyintoleranceVerification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetAppointmentstatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetAppointmentstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetAppointmentstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetAppointmentstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetCarePlanActivityStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetCarePlanActivityStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetCarePlanActivityStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetCarePlanActivityStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetCareTeamStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetCareTeamStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetCareTeamStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetCareTeamStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetChargeitemStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetChargeitemStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetChargeitemStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetChargeitemStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetClinicalimpressionStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetClinicalimpressionStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetClinicalimpressionStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetClinicalimpressionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetCompositionStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetCompositionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetCompositionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetCompositionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetConditionVerStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetConditionVerStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetConditionVerStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetConditionVerStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetConsentStateCodes fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetConsentStateCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetConsentStateCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetConsentStateCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetContractPublicationstatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetContractPublicationstatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetContractPublicationstatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetContractPublicationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetContractStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetContractStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetContractStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetContractStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetDeviceStatementStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetDeviceStatementStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetDeviceStatementStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetDeviceStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetDeviceStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetDeviceStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetDeviceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetDeviceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetDiagnosticReportStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetDiagnosticReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetDiagnosticReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetDiagnosticReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetDocumentReferenceStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetDocumentReferenceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetDocumentReferenceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetDocumentReferenceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetEncounterLocationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetEncounterLocationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetEncounterLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetEncounterLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetEncounterStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetEncounterStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetEncounterStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetEncounterStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetEndpointStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetEndpointStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetEndpointStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetEndpointStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetEpisodeOfCareStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetEpisodeOfCareStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetEpisodeOfCareStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetEpisodeOfCareStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetEventStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetEventStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetEventStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetEventStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetExplanationofbenefitStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetExplanationofbenefitStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetExplanationofbenefitStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetExplanationofbenefitStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetFlagStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetFlagStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetFlagStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetFlagStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetFmStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetFmStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetFmStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetFmStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetGoalAchievement fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetGoalAchievement,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetGoalAchievement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetGoalAchievement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetGoalStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetGoalStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetGoalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetGoalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetGuidanceResponseStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetGuidanceResponseStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetGuidanceResponseStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetGuidanceResponseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetHistoryStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetHistoryStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetHistoryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetHistoryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetImagingstudyStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetImagingstudyStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetImagingstudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetImagingstudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetImmunizationEvaluationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetImmunizationEvaluationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetImmunizationEvaluationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetImmunizationEvaluationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetImmunizationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetImmunizationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetImmunizationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetImmunizationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetInvoiceStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetInvoiceStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetInvoiceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetInvoiceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetListStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetListStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetListStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetListStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetLocationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetLocationStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMeasureReportStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMeasureReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetMeasureReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMeasureReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationAdminStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationAdminStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetMedicationAdminStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationAdminStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationStatementStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationStatementStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetMedicationStatementStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetMedicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationdispenseStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationdispenseStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetMedicationdispenseStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationdispenseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationknowledgeStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationknowledgeStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetMedicationknowledgeStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationknowledgeStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMedicationrequestStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMedicationrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetMedicationrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMedicationrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetMetricOperationalStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetMetricOperationalStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetMetricOperationalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetMetricOperationalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetObservationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetObservationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetObservationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetObservationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetParticipationstatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetParticipationstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetParticipationstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetParticipationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetProductStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetProductStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetProductStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetProductStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetPublicationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetPublicationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetPublicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetPublicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetQuestionnaireAnswersStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetQuestionnaireAnswersStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetQuestionnaireAnswersStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetQuestionnaireAnswersStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetReportStatusCodes fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetReportStatusCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetReportStatusCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetReportStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetRequestStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetRequestStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetRequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetRequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetResearchStudyStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetResearchStudyStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetResearchStudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetResearchStudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetResearchSubjectStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetResearchSubjectStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetResearchSubjectStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetResearchSubjectStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSlotstatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetSlotstatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetSlotstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSlotstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSpecimenStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetSpecimenStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetSpecimenStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSpecimenStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSubscriptionStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetSubscriptionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetSubscriptionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSubscriptionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSubstanceStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetSubstanceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetSubstanceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSubstanceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSupplydeliveryStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetSupplydeliveryStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetSupplydeliveryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSupplydeliveryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetSupplyrequestStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetSupplyrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ScValuesetSupplyrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetSupplyrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetTaskStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(ScValuesetTaskStatus);
    if (!result.success) {
      console.error("Validation failed for ScValuesetTaskStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetTaskStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetVerificationresultStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetVerificationresultStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetVerificationresultStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetVerificationresultStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScValuesetVerificationresultValidationStatus fixture (ConceptMap)", () => {
    const result = createConceptMapSchema().safeParse(
      ScValuesetVerificationresultValidationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ScValuesetVerificationresultValidationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScValuesetVerificationresultValidationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
