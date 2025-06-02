import { makeResourceList } from "./utils";
import { createAccountSchema } from "./v4.0.1/account/schema";
import { createActivityDefinitionSchema } from "./v4.0.1/activitydefinition/schema";
import { createAdverseEventSchema } from "./v4.0.1/adverseevent/schema";
import { createAllergyIntoleranceSchema } from "./v4.0.1/allergyintolerance/schema";
import { createAppointmentSchema } from "./v4.0.1/appointment/schema";
import { createAppointmentResponseSchema } from "./v4.0.1/appointment/schema";
import { createAuditEventSchema } from "./v4.0.1/auditevent/schema";
import { createBasicSchema } from "./v4.0.1/basic/schema";
import { createBinarySchema } from "./v4.0.1/binary/schema";
import { createBiologicallyDerivedProductSchema } from "./v4.0.1/biologicallyderivedproduct/schema";
import { createBodyStructureSchema } from "./v4.0.1/bodystructure/schema";
import { createBundleSchema } from "./v4.0.1/bundle/schema";
import { createCapabilityStatementSchema } from "./v4.0.1/capabilitystatement/schema";
import { createCarePlanSchema } from "./v4.0.1/careplan/schema";
import { createCareTeamSchema } from "./v4.0.1/careteam/schema";
import { createCatalogEntrySchema } from "./v4.0.1/catalogentry/schema";
import { createChargeItemSchema } from "./v4.0.1/chargeitem/schema";
import { createChargeItemDefinitionSchema } from "./v4.0.1/chargeitem/schema";
import { createClaimSchema } from "./v4.0.1/claim/schema";
import { createClaimResponseSchema } from "./v4.0.1/claim/schema";
import { createClinicalImpressionSchema } from "./v4.0.1/clinicalimpression/schema";
import { createCodeSystemSchema } from "./v4.0.1/codesystem/schema";
import { createCommunicationSchema } from "./v4.0.1/communication/schema";
import { createCommunicationRequestSchema } from "./v4.0.1/communication/schema";
import { createCompartmentDefinitionSchema } from "./v4.0.1/compartmentdefinition/schema";
import { createCompositionSchema } from "./v4.0.1/composition/schema";
import { createConceptMapSchema } from "./v4.0.1/conceptmap/schema";
import { createConditionSchema } from "./v4.0.1/condition/schema";
import { createConsentSchema } from "./v4.0.1/consent/schema";
import { createContractSchema } from "./v4.0.1/contract/schema";
import { createCoverageSchema } from "./v4.0.1/coverage/schema";
import { createCoverageEligibilityRequestSchema } from "./v4.0.1/coverage/schema";
import { createCoverageEligibilityResponseSchema } from "./v4.0.1/coverage/schema";
import { createDetectedIssueSchema } from "./v4.0.1/detectedissue/schema";
import { createDeviceSchema } from "./v4.0.1/device/schema";
import { createDeviceDefinitionSchema } from "./v4.0.1/device/schema";
import { createDeviceMetricSchema } from "./v4.0.1/device/schema";
import { createDeviceRequestSchema } from "./v4.0.1/device/schema";
import { createDeviceUseStatementSchema } from "./v4.0.1/device/schema";
import { createDiagnosticReportSchema } from "./v4.0.1/diagnosticreport/schema";
import { createDocumentManifestSchema } from "./v4.0.1/documentmanifest/schema";
import { createDocumentReferenceSchema } from "./v4.0.1/documentreference/schema";
import { createEffectEvidenceSynthesisSchema } from "./v4.0.1/effectevidencesynthesis/schema";
import { createEncounterSchema } from "./v4.0.1/encounter/schema";
import { createEndpointSchema } from "./v4.0.1/endpoint/schema";
import { createEnrollmentRequestSchema } from "./v4.0.1/enrollmentrequest/schema";
import { createEnrollmentResponseSchema } from "./v4.0.1/enrollmentresponse/schema";
import { createEpisodeOfCareSchema } from "./v4.0.1/episodeofcare/schema";
import { createEventDefinitionSchema } from "./v4.0.1/eventdefinition/schema";
import { createEvidenceSchema } from "./v4.0.1/evidence/schema";
import { createEvidenceVariableSchema } from "./v4.0.1/evidence/schema";
import { createExampleScenarioSchema } from "./v4.0.1/examplescenario/schema";
import { createExampleScenarioInstanceSchema } from "./v4.0.1/examplescenario/schema";
import { createExplanationOfBenefitSchema } from "./v4.0.1/explanationofbenefit/schema";
import { createFamilyMemberHistorySchema } from "./v4.0.1/familymemberhistory/schema";
import { createFlagSchema } from "./v4.0.1/flag/schema";
import { createGoalSchema } from "./v4.0.1/goal/schema";
import { createGraphDefinitionSchema } from "./v4.0.1/graphdefinition/schema";
import { createGroupSchema } from "./v4.0.1/group/schema";
import { createGuidanceResponseSchema } from "./v4.0.1/guidanceresponse/schema";
import { createHealthcareServiceSchema } from "./v4.0.1/healthcareservice/schema";
import { createImagingStudySchema } from "./v4.0.1/imagingstudy/schema";
import { createImmunizationSchema } from "./v4.0.1/immunization/schema";
import { createImmunizationEvaluationSchema } from "./v4.0.1/immunization/schema";
import { createImmunizationRecommendationSchema } from "./v4.0.1/immunization/schema";
import { createImplementationGuideSchema } from "./v4.0.1/implementationguide/schema";
import { createInsurancePlanSchema } from "./v4.0.1/insuranceplan/schema";
import { createInvoiceSchema } from "./v4.0.1/invoice/schema";
import { createLibrarySchema } from "./v4.0.1/library/schema";
import { createLinkageSchema } from "./v4.0.1/linkage/schema";
import { createListSchema } from "./v4.0.1/list/schema";
import { createLocationSchema } from "./v4.0.1/location/schema";
import { createMeasureSchema } from "./v4.0.1/measure/schema";
import { createMeasureReportSchema } from "./v4.0.1/measure/schema";
import { createMediaSchema } from "./v4.0.1/media/schema";
import { createMedicationSchema } from "./v4.0.1/medication/schema";
import { createMedicationAdministrationSchema } from "./v4.0.1/medication/schema";
import { createMedicationDispenseSchema } from "./v4.0.1/medication/schema";
import { createMedicationKnowledgeSchema } from "./v4.0.1/medication/schema";
import { createMedicationRequestSchema } from "./v4.0.1/medication/schema";
import { createMedicationStatementSchema } from "./v4.0.1/medication/schema";
import { createMedicinalProductSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductAuthorizationSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductContraindicationSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductIndicationSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductIngredientSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductInteractionSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductManufacturedSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductPackagedSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductPharmaceuticalSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMedicinalProductUndesirableEffectSchema } from "./v4.0.1/medicinalproduct/schema";
import { createMessageDefinitionSchema } from "./v4.0.1/messagedefinition/schema";
import { createMessageHeaderSchema } from "./v4.0.1/messageheader/schema";
import { createMolecularSequenceSchema } from "./v4.0.1/molecularsequence/schema";
import { createNamingSystemSchema } from "./v4.0.1/namingsystem/schema";
import { createNutritionOrderSchema } from "./v4.0.1/nutritionorder/schema";
import { createObservationSchema } from "./v4.0.1/observation/schema";
import { createObservationDefinitionSchema } from "./v4.0.1/observation/schema";
import { createOperationDefinitionSchema } from "./v4.0.1/operationdefinition/schema";
import { createOperationOutcomeSchema } from "./v4.0.1/operationoutcome/schema";
import { createOrganizationSchema } from "./v4.0.1/organization/schema";
import { createOrganizationAffiliationSchema } from "./v4.0.1/organization/schema";
import { createParametersSchema } from "./v4.0.1/parameters/schema";
import { createPatientSchema } from "./v4.0.1/patient/schema";
import { createPaymentNoticeSchema } from "./v4.0.1/paymentnotice/schema";
import { createPaymentReconciliationSchema } from "./v4.0.1/paymentreconciliation/schema";
import { createPersonSchema } from "./v4.0.1/person/schema";
import { createPlanDefinitionSchema } from "./v4.0.1/plandefinition/schema";
import { createPractitionerSchema } from "./v4.0.1/practitioner/schema";
import { createPractitionerRoleSchema } from "./v4.0.1/practitioner/schema";
import { createProcedureSchema } from "./v4.0.1/procedure/schema";
import { createProvenanceSchema } from "./v4.0.1/provenance/schema";
import { createQuestionnaireSchema } from "./v4.0.1/questionnaire/schema";
import { createQuestionnaireResponseSchema } from "./v4.0.1/questionnaire/schema";
import { createRelatedPersonSchema } from "./v4.0.1/relatedperson/schema";
import { createRequestGroupSchema } from "./v4.0.1/requestgroup/schema";
import { createResearchDefinitionSchema } from "./v4.0.1/researchdefinition/schema";
import { createResearchElementDefinitionSchema } from "./v4.0.1/researchelementdefinition/schema";
import { createResearchStudySchema } from "./v4.0.1/researchstudy/schema";
import { createResearchSubjectSchema } from "./v4.0.1/researchsubject/schema";
import { createRiskAssessmentSchema } from "./v4.0.1/riskassessment/schema";
import { createRiskEvidenceSynthesisSchema } from "./v4.0.1/riskevidencesynthesis/schema";
import { createScheduleSchema } from "./v4.0.1/schedule/schema";
import { createSearchParameterSchema } from "./v4.0.1/searchparameter/schema";
import { createServiceRequestSchema } from "./v4.0.1/servicerequest/schema";
import { createSlotSchema } from "./v4.0.1/slot/schema";
import { createSpecimenSchema } from "./v4.0.1/specimen/schema";
import { createSpecimenDefinitionSchema } from "./v4.0.1/specimen/schema";
import { createStructureDefinitionSchema } from "./v4.0.1/structuredefinition/schema";
import { createStructureMapSchema } from "./v4.0.1/structuremap/schema";
import { createSubscriptionSchema } from "./v4.0.1/subscription/schema";
import { createSubstanceSchema } from "./v4.0.1/substance/schema";
import { createSubstanceNucleicAcidSchema } from "./v4.0.1/substance/schema";
import { createSubstancePolymerSchema } from "./v4.0.1/substance/schema";
import { createSubstanceProteinSchema } from "./v4.0.1/substance/schema";
import { createSubstanceReferenceInformationSchema } from "./v4.0.1/substance/schema";
import { createSubstanceSourceMaterialSchema } from "./v4.0.1/substance/schema";
import { createSubstanceSpecificationSchema } from "./v4.0.1/substance/schema";
import { createSupplyDeliverySchema } from "./v4.0.1/supplydelivery/schema";
import { createSupplyRequestSchema } from "./v4.0.1/supplyrequest/schema";
import { createTaskSchema } from "./v4.0.1/task/schema";
import { createTerminologyCapabilitiesSchema } from "./v4.0.1/terminologycapabilities/schema";
import { createTestReportSchema } from "./v4.0.1/testreport/schema";
import { createTestScriptSchema } from "./v4.0.1/testscript/schema";
import { createValueSetSchema } from "./v4.0.1/valueset/schema";
import { createVerificationResultSchema } from "./v4.0.1/verificationresult/schema";
import { createVisionPrescriptionSchema } from "./v4.0.1/visionprescription/schema";

// Import all resource types
import type { Account } from "./v4.0.1/account/types";
import type { ActivityDefinition } from "./v4.0.1/activitydefinition/types";
import type { AdverseEvent } from "./v4.0.1/adverseevent/types";
import type { AllergyIntolerance } from "./v4.0.1/allergyintolerance/types";
import type { Appointment } from "./v4.0.1/appointment/types";
import type { AppointmentResponse } from "./v4.0.1/appointment/types";
import type { AuditEvent } from "./v4.0.1/auditevent/types";
import type { Basic } from "./v4.0.1/basic/types";
import type { Binary } from "./v4.0.1/binary/types";
import type { BiologicallyDerivedProduct } from "./v4.0.1/biologicallyderivedproduct/types";
import type { BodyStructure } from "./v4.0.1/bodystructure/types";
import type { Bundle } from "./v4.0.1/bundle/types";
import type { CapabilityStatement } from "./v4.0.1/capabilitystatement/types";
import type { CarePlan } from "./v4.0.1/careplan/types";
import type { CareTeam } from "./v4.0.1/careteam/types";
import type { CatalogEntry } from "./v4.0.1/catalogentry/types";
import type { ChargeItem } from "./v4.0.1/chargeitem/types";
import type { ChargeItemDefinition } from "./v4.0.1/chargeitem/types";
import type { Claim } from "./v4.0.1/claim/types";
import type { ClaimResponse } from "./v4.0.1/claim/types";
import type { ClinicalImpression } from "./v4.0.1/clinicalimpression/types";
import type { CodeSystem } from "./v4.0.1/codesystem/types";
import type { Communication } from "./v4.0.1/communication/types";
import type { CommunicationRequest } from "./v4.0.1/communication/types";
import type { CompartmentDefinition } from "./v4.0.1/compartmentdefinition/types";
import type { Composition } from "./v4.0.1/composition/types";
import type { ConceptMap } from "./v4.0.1/conceptmap/types";
import type { Condition } from "./v4.0.1/condition/types";
import type { Consent } from "./v4.0.1/consent/types";
import type { Contract } from "./v4.0.1/contract/types";
import type { Coverage } from "./v4.0.1/coverage/types";
import type { CoverageEligibilityRequest } from "./v4.0.1/coverage/types";
import type { CoverageEligibilityResponse } from "./v4.0.1/coverage/types";
import type { DetectedIssue } from "./v4.0.1/detectedissue/types";
import type { Device } from "./v4.0.1/device/types";
import type { DeviceDefinition } from "./v4.0.1/device/types";
import type { DeviceMetric } from "./v4.0.1/device/types";
import type { DeviceRequest } from "./v4.0.1/device/types";
import type { DeviceUseStatement } from "./v4.0.1/device/types";
import type { DiagnosticReport } from "./v4.0.1/diagnosticreport/types";
import type { DocumentManifest } from "./v4.0.1/documentmanifest/types";
import type { DocumentReference } from "./v4.0.1/documentreference/types";
import type { EffectEvidenceSynthesis } from "./v4.0.1/effectevidencesynthesis/types";
import type { Encounter } from "./v4.0.1/encounter/types";
import type { Endpoint } from "./v4.0.1/endpoint/types";
import type { EnrollmentRequest } from "./v4.0.1/enrollmentrequest/types";
import type { EnrollmentResponse } from "./v4.0.1/enrollmentresponse/types";
import type { EpisodeOfCare } from "./v4.0.1/episodeofcare/types";
import type { EventDefinition } from "./v4.0.1/eventdefinition/types";
import type { Evidence } from "./v4.0.1/evidence/types";
import type { EvidenceVariable } from "./v4.0.1/evidence/types";
import type { ExampleScenario } from "./v4.0.1/examplescenario/types";
import type { ExampleScenarioInstance } from "./v4.0.1/examplescenario/types";
import type { ExplanationOfBenefit } from "./v4.0.1/explanationofbenefit/types";
import type { FamilyMemberHistory } from "./v4.0.1/familymemberhistory/types";
import type { Flag } from "./v4.0.1/flag/types";
import type { Goal } from "./v4.0.1/goal/types";
import type { GraphDefinition } from "./v4.0.1/graphdefinition/types";
import type { Group } from "./v4.0.1/group/types";
import type { GuidanceResponse } from "./v4.0.1/guidanceresponse/types";
import type { HealthcareService } from "./v4.0.1/healthcareservice/types";
import type { ImagingStudy } from "./v4.0.1/imagingstudy/types";
import type { Immunization } from "./v4.0.1/immunization/types";
import type { ImmunizationEvaluation } from "./v4.0.1/immunization/types";
import type { ImmunizationRecommendation } from "./v4.0.1/immunization/types";
import type { ImplementationGuide } from "./v4.0.1/implementationguide/types";
import type { InsurancePlan } from "./v4.0.1/insuranceplan/types";
import type { Invoice } from "./v4.0.1/invoice/types";
import type { Library } from "./v4.0.1/library/types";
import type { Linkage } from "./v4.0.1/linkage/types";
import type { List } from "./v4.0.1/list/types";
import type { Location } from "./v4.0.1/location/types";
import type { Measure } from "./v4.0.1/measure/types";
import type { MeasureReport } from "./v4.0.1/measure/types";
import type { Media } from "./v4.0.1/media/types";
import type { Medication } from "./v4.0.1/medication/types";
import type { MedicationAdministration } from "./v4.0.1/medication/types";
import type { MedicationDispense } from "./v4.0.1/medication/types";
import type { MedicationKnowledge } from "./v4.0.1/medication/types";
import type { MedicationRequest } from "./v4.0.1/medication/types";
import type { MedicationStatement } from "./v4.0.1/medication/types";
import type { MedicinalProduct } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductAuthorization } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductContraindication } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductIndication } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductIngredient } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductInteraction } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductManufactured } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductPackaged } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductPharmaceutical } from "./v4.0.1/medicinalproduct/types";
import type { MedicinalProductUndesirableEffect } from "./v4.0.1/medicinalproduct/types";
import type { MessageDefinition } from "./v4.0.1/messagedefinition/types";
import type { MessageHeader } from "./v4.0.1/messageheader/types";
import type { MolecularSequence } from "./v4.0.1/molecularsequence/types";
import type { NamingSystem } from "./v4.0.1/namingsystem/types";
import type { NutritionOrder } from "./v4.0.1/nutritionorder/types";
import type { Observation } from "./v4.0.1/observation/types";
import type { ObservationDefinition } from "./v4.0.1/observation/types";
import type { OperationDefinition } from "./v4.0.1/operationdefinition/types";
import type { OperationOutcome } from "./v4.0.1/operationoutcome/types";
import type { Organization } from "./v4.0.1/organization/types";
import type { OrganizationAffiliation } from "./v4.0.1/organization/types";
import type { Parameters } from "./v4.0.1/parameters/types";
import type { Patient } from "./v4.0.1/patient/types";
import type { PaymentNotice } from "./v4.0.1/paymentnotice/types";
import type { PaymentReconciliation } from "./v4.0.1/paymentreconciliation/types";
import type { Person } from "./v4.0.1/person/types";
import type { PlanDefinition } from "./v4.0.1/plandefinition/types";
import type { Practitioner } from "./v4.0.1/practitioner/types";
import type { PractitionerRole } from "./v4.0.1/practitioner/types";
import type { Procedure } from "./v4.0.1/procedure/types";
import type { Provenance } from "./v4.0.1/provenance/types";
import type { Questionnaire } from "./v4.0.1/questionnaire/types";
import type { QuestionnaireResponse } from "./v4.0.1/questionnaire/types";
import type { RelatedPerson } from "./v4.0.1/relatedperson/types";
import type { RequestGroup } from "./v4.0.1/requestgroup/types";
import type { ResearchDefinition } from "./v4.0.1/researchdefinition/types";
import type { ResearchElementDefinition } from "./v4.0.1/researchelementdefinition/types";
import type { ResearchStudy } from "./v4.0.1/researchstudy/types";
import type { ResearchSubject } from "./v4.0.1/researchsubject/types";
import type { RiskAssessment } from "./v4.0.1/riskassessment/types";
import type { RiskEvidenceSynthesis } from "./v4.0.1/riskevidencesynthesis/types";
import type { Schedule } from "./v4.0.1/schedule/types";
import type { SearchParameter } from "./v4.0.1/searchparameter/types";
import type { ServiceRequest } from "./v4.0.1/servicerequest/types";
import type { Slot } from "./v4.0.1/slot/types";
import type { Specimen } from "./v4.0.1/specimen/types";
import type { SpecimenDefinition } from "./v4.0.1/specimen/types";
import type { StructureDefinition } from "./v4.0.1/structuredefinition/types";
import type { StructureMap } from "./v4.0.1/structuremap/types";
import type { Subscription } from "./v4.0.1/subscription/types";
import type { Substance } from "./v4.0.1/substance/types";
import type { SubstanceNucleicAcid } from "./v4.0.1/substance/types";
import type { SubstancePolymer } from "./v4.0.1/substance/types";
import type { SubstanceProtein } from "./v4.0.1/substance/types";
import type { SubstanceReferenceInformation } from "./v4.0.1/substance/types";
import type { SubstanceSourceMaterial } from "./v4.0.1/substance/types";
import type { SubstanceSpecification } from "./v4.0.1/substance/types";
import type { SupplyDelivery } from "./v4.0.1/supplydelivery/types";
import type { SupplyRequest } from "./v4.0.1/supplyrequest/types";
import type { Task } from "./v4.0.1/task/types";
import type { TerminologyCapabilities } from "./v4.0.1/terminologycapabilities/types";
import type { TestReport } from "./v4.0.1/testreport/types";
import type { TestScript } from "./v4.0.1/testscript/types";
import type { ValueSet } from "./v4.0.1/valueset/types";
import type { VerificationResult } from "./v4.0.1/verificationresult/types";
import type { VisionPrescription } from "./v4.0.1/visionprescription/types";

/**
 * A discriminated-union that accepts *any* FHIR resource.
 */
export const createResourceListSchema = () =>
  makeResourceList(
    createAccountSchema(),
    createActivityDefinitionSchema(),
    createAdverseEventSchema(),
    createAllergyIntoleranceSchema(),
    createAppointmentSchema(),
    createAppointmentResponseSchema(),
    createAuditEventSchema(),
    createBasicSchema(),
    createBinarySchema(),
    createBiologicallyDerivedProductSchema(),
    createBodyStructureSchema(),
    createBundleSchema(),
    createCapabilityStatementSchema(),
    createCarePlanSchema(),
    createCareTeamSchema(),
    createCatalogEntrySchema(),
    createChargeItemSchema(),
    createChargeItemDefinitionSchema(),
    createClaimSchema(),
    createClaimResponseSchema(),
    createClinicalImpressionSchema(),
    createCodeSystemSchema(),
    createCommunicationSchema(),
    createCommunicationRequestSchema(),
    createCompartmentDefinitionSchema(),
    createCompositionSchema(),
    createConceptMapSchema(),
    createConditionSchema(),
    createConsentSchema(),
    createContractSchema(),
    createCoverageSchema(),
    createCoverageEligibilityRequestSchema(),
    createCoverageEligibilityResponseSchema(),
    createDetectedIssueSchema(),
    createDeviceSchema(),
    createDeviceDefinitionSchema(),
    createDeviceMetricSchema(),
    createDeviceRequestSchema(),
    createDeviceUseStatementSchema(),
    createDiagnosticReportSchema(),
    createDocumentManifestSchema(),
    createDocumentReferenceSchema(),
    createEffectEvidenceSynthesisSchema(),
    createEncounterSchema(),
    createEndpointSchema(),
    createEnrollmentRequestSchema(),
    createEnrollmentResponseSchema(),
    createEpisodeOfCareSchema(),
    createEventDefinitionSchema(),
    createEvidenceSchema(),
    createEvidenceVariableSchema(),
    createExampleScenarioSchema(),
    createExampleScenarioInstanceSchema(),
    createExplanationOfBenefitSchema(),
    createFamilyMemberHistorySchema(),
    createFlagSchema(),
    createGoalSchema(),
    createGraphDefinitionSchema(),
    createGroupSchema(),
    createGuidanceResponseSchema(),
    createHealthcareServiceSchema(),
    createImagingStudySchema(),
    createImmunizationSchema(),
    createImmunizationEvaluationSchema(),
    createImmunizationRecommendationSchema(),
    createImplementationGuideSchema(),
    createInsurancePlanSchema(),
    createInvoiceSchema(),
    createLibrarySchema(),
    createLinkageSchema(),
    createListSchema(),
    createLocationSchema(),
    createMeasureSchema(),
    createMeasureReportSchema(),
    createMediaSchema(),
    createMedicationSchema(),
    createMedicationAdministrationSchema(),
    createMedicationDispenseSchema(),
    createMedicationKnowledgeSchema(),
    createMedicationRequestSchema(),
    createMedicationStatementSchema(),
    createMedicinalProductSchema(),
    createMedicinalProductAuthorizationSchema(),
    createMedicinalProductContraindicationSchema(),
    createMedicinalProductIndicationSchema(),
    createMedicinalProductIngredientSchema(),
    createMedicinalProductInteractionSchema(),
    createMedicinalProductManufacturedSchema(),
    createMedicinalProductPackagedSchema(),
    createMedicinalProductPharmaceuticalSchema(),
    createMedicinalProductUndesirableEffectSchema(),
    createMessageDefinitionSchema(),
    createMessageHeaderSchema(),
    createMolecularSequenceSchema(),
    createNamingSystemSchema(),
    createNutritionOrderSchema(),
    createObservationSchema(),
    createObservationDefinitionSchema(),
    createOperationDefinitionSchema(),
    createOperationOutcomeSchema(),
    createOrganizationSchema(),
    createOrganizationAffiliationSchema(),
    createParametersSchema(),
    createPatientSchema(),
    createPaymentNoticeSchema(),
    createPaymentReconciliationSchema(),
    createPersonSchema(),
    createPlanDefinitionSchema(),
    createPractitionerSchema(),
    createPractitionerRoleSchema(),
    createProcedureSchema(),
    createProvenanceSchema(),
    createQuestionnaireSchema(),
    createQuestionnaireResponseSchema(),
    createRelatedPersonSchema(),
    createRequestGroupSchema(),
    createResearchDefinitionSchema(),
    createResearchElementDefinitionSchema(),
    createResearchStudySchema(),
    createResearchSubjectSchema(),
    createRiskAssessmentSchema(),
    createRiskEvidenceSynthesisSchema(),
    createScheduleSchema(),
    createSearchParameterSchema(),
    createServiceRequestSchema(),
    createSlotSchema(),
    createSpecimenSchema(),
    createSpecimenDefinitionSchema(),
    createStructureDefinitionSchema(),
    createStructureMapSchema(),
    createSubscriptionSchema(),
    createSubstanceSchema(),
    createSubstanceNucleicAcidSchema(),
    createSubstancePolymerSchema(),
    createSubstanceProteinSchema(),
    createSubstanceReferenceInformationSchema(),
    createSubstanceSourceMaterialSchema(),
    createSubstanceSpecificationSchema(),
    createSupplyDeliverySchema(),
    createSupplyRequestSchema(),
    createTaskSchema(),
    createTerminologyCapabilitiesSchema(),
    createTestReportSchema(),
    createTestScriptSchema(),
    createValueSetSchema(),
    createVerificationResultSchema(),
    createVisionPrescriptionSchema(),
  );

export type ResourceList =
  | Account
  | ActivityDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | CatalogEntry
  | ChargeItem
  | ChargeItemDefinition
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceDefinition
  | DeviceMetric
  | DeviceRequest
  | DeviceUseStatement
  | DiagnosticReport
  | DocumentManifest
  | DocumentReference
  | EffectEvidenceSynthesis
  | Encounter
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceVariable
  | ExampleScenario
  | ExampleScenarioInstance
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | InsurancePlan
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | Measure
  | MeasureReport
  | Media
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProduct
  | MedicinalProductAuthorization
  | MedicinalProductContraindication
  | MedicinalProductIndication
  | MedicinalProductIngredient
  | MedicinalProductInteraction
  | MedicinalProductManufactured
  | MedicinalProductPackaged
  | MedicinalProductPharmaceutical
  | MedicinalProductUndesirableEffect
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionOrder
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RelatedPerson
  | RequestGroup
  | ResearchDefinition
  | ResearchElementDefinition
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | RiskEvidenceSynthesis
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | Substance
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SubstanceSpecification
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestReport
  | TestScript
  | ValueSet
  | VerificationResult
  | VisionPrescription;
