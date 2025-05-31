import { createCodeSystemSchema } from "../../src";
import {
  CodesystemFhirVersion,
  CodesystemAbstractTypes,
  CodesystemAccountStatus,
  CodesystemActionCardinalityBehavior,
  CodesystemActionConditionKind,
  CodesystemActionGroupingBehavior,
  CodesystemActionParticipantType,
  CodesystemActionPrecheckBehavior,
  CodesystemActionRelationshipType,
  CodesystemActionRequiredBehavior,
  CodesystemActionSelectionBehavior,
  CodesystemActionType,
  CodesystemActivityDefinitionCategory,
  CodesystemAdditionalmaterials,
  CodesystemAddressType,
  CodesystemAddressUse,
  CodesystemAdjudicationError,
  CodesystemAdjudicationReason,
  CodesystemAdjudication,
  CodesystemAdministrativeGender,
  CodesystemAdverseEventActuality,
  CodesystemAdverseEventCategory,
  CodesystemAdverseEventCausalityAssess,
  CodesystemAdverseEventCausalityMethod,
  CodesystemAdverseEventOutcome,
  CodesystemAdverseEventSeriousness,
  CodesystemAdverseEventSeverity,
  CodesystemAllergIntolSubstanceExpRisk,
  CodesystemAllergyIntoleranceCategory,
  CodesystemAllergyIntoleranceCriticality,
  CodesystemAllergyIntoleranceType,
  CodesystemAllergyintoleranceClinical,
  CodesystemAllergyintoleranceVerification,
  CodesystemAnimalGenderstatus,
  CodesystemAnimalSpecies,
  CodesystemAppointmentCancellationReason,
  CodesystemAppointmentstatus,
  CodesystemAssertDirectionCodes,
  CodesystemAssertOperatorCodes,
  CodesystemAssertResponseCodeTypes,
  CodesystemAssetAvailability,
  CodesystemAuditEntityType,
  CodesystemAuditEventAction,
  CodesystemAuditEventOutcome,
  CodesystemAuditEventType,
  CodesystemAuditSourceType,
  CodesystemBasicResourceType,
  CodesystemBenefitNetwork,
  CodesystemBenefitTerm,
  CodesystemBenefitType,
  CodesystemBenefitUnit,
  CodesystemBindingStrength,
  CodesystemBundleType,
  CodesystemCapabilityStatementKind,
  CodesystemCarePlanActivityStatus,
  CodesystemCareTeamStatus,
  CodesystemCatalogtype,
  CodesystemCdshooksIndicator,
  CodesystemCertaintySubcomponentRating,
  CodesystemCertaintySubcomponentType,
  CodesystemChargeitemBillingcodes,
  CodesystemChargeitemStatus,
  CodesystemChoiceListOrientation,
  CodesystemChromosomeHuman,
  CodesystemClaimCareteamrole,
  CodesystemClaimException,
  CodesystemClaimInformationcategory,
  CodesystemClaimModifiers,
  CodesystemClaimSubtype,
  CodesystemClaimType,
  CodesystemClaimUse,
  CodesystemCodeSearchSupport,
  CodesystemCodesystemAltcodeKind,
  CodesystemCodesystemContentMode,
  CodesystemCodesystemHierarchyMeaning,
  CodesystemCommonTags,
  CodesystemCommunicationCategory,
  CodesystemCommunicationNotDoneReason,
  CodesystemCommunicationTopic,
  CodesystemCompartmentType,
  CodesystemCompositeMeasureScoring,
  CodesystemCompositionAltcodeKind,
  CodesystemCompositionAttestationMode,
  CodesystemCompositionStatus,
  CodesystemConceptMapEquivalence,
  CodesystemConceptProperties,
  CodesystemConceptPropertyType,
  CodesystemConceptSubsumptionOutcome,
  CodesystemConceptmapUnmappedMode,
  CodesystemConditionCategory,
  CodesystemConditionClinical,
  CodesystemConditionState,
  CodesystemConditionVerStatus,
  CodesystemConditionalDeleteStatus,
  CodesystemConditionalReadStatus,
  CodesystemConformanceExpectation,
  CodesystemConsentAction,
  CodesystemConsentCategory,
  CodesystemConsentDataMeaning,
  CodesystemConsentPerformer,
  CodesystemConsentPolicy,
  CodesystemConsentProvisionType,
  CodesystemConsentScope,
  CodesystemConsentStateCodes,
  CodesystemConstraintSeverity,
  CodesystemContactPointSystem,
  CodesystemContactPointUse,
  CodesystemContactentityType,
  CodesystemContainerCap,
  CodesystemContractAction,
  CodesystemContractActionstatus,
  CodesystemContractActorrole,
  CodesystemContractAssetcontext,
  CodesystemContractAssetscope,
  CodesystemContractAssetsubtype,
  CodesystemContractAssettype,
  CodesystemContractContentDerivative,
  CodesystemContractDataMeaning,
  CodesystemContractDecisionMode,
  CodesystemContractDefinitionSubtype,
  CodesystemContractDefinitionType,
  CodesystemContractExpirationType,
  CodesystemContractLegalstate,
  CodesystemContractPartyRole,
  CodesystemContractPublicationstatus,
  CodesystemContractScope,
  CodesystemContractSecurityCategory,
  CodesystemContractSecurityClassification,
  CodesystemContractSecurityControl,
  CodesystemContractSignerType,
  CodesystemContractStatus,
  CodesystemContractSubtype,
  CodesystemContractTermSubtype,
  CodesystemContractTermType,
  CodesystemContractType,
  CodesystemContributorType,
  CodesystemCopyNumberEvent,
  CodesystemCoverageClass,
  CodesystemCoverageCopayType,
  CodesystemCoverageFinancialException,
  CodesystemCoverageSelfpay,
  CodesystemCoverageeligibilityresponseExAuthSupport,
  CodesystemDataAbsentReason,
  CodesystemDataTypes,
  CodesystemDaysOfWeek,
  CodesystemDefinitionResourceTypes,
  CodesystemDefinitionStatus,
  CodesystemDefinitionTopic,
  CodesystemDefinitionUse,
  CodesystemDetectedissueSeverity,
  CodesystemDeviceAction,
  CodesystemDeviceDefinitionStatus,
  CodesystemDeviceNametype,
  CodesystemDeviceStatementStatus,
  CodesystemDeviceStatusReason,
  CodesystemDeviceStatus,
  CodesystemDiagnosisRole,
  CodesystemDiagnosticReportStatus,
  CodesystemDicomAuditLifecycle,
  CodesystemDiscriminatorType,
  CodesystemDocumentMode,
  CodesystemDocumentReferenceStatus,
  CodesystemDocumentRelationshipType,
  CodesystemDoseRateType,
  CodesystemEffectEstimateType,
  CodesystemEligibilityrequestPurpose,
  CodesystemEligibilityresponsePurpose,
  CodesystemEncounterAdmitSource,
  CodesystemEncounterDiet,
  CodesystemEncounterDischargeDisposition,
  CodesystemEncounterLocationStatus,
  CodesystemEncounterParticipantType,
  CodesystemEncounterSpecialArrangements,
  CodesystemEncounterStatus,
  CodesystemEncounterType,
  CodesystemEndpointConnectionType,
  CodesystemEndpointPayloadType,
  CodesystemEndpointStatus,
  CodesystemEntformulaAdditive,
  CodesystemEpisodeOfCareStatus,
  CodesystemEpisodeofcareType,
  CodesystemEventCapabilityMode,
  CodesystemEventResourceTypes,
  CodesystemEventStatus,
  CodesystemEventTiming,
  CodesystemEvidenceQuality,
  CodesystemEvidenceVariantState,
  CodesystemExBenefitcategory,
  CodesystemExDiagnosisOnAdmission,
  CodesystemExDiagnosisrelatedgroup,
  CodesystemExDiagnosistype,
  CodesystemExOnsettype,
  CodesystemExPayeeResourceType,
  CodesystemExPaymenttype,
  CodesystemExProcedureType,
  CodesystemExProgramCode,
  CodesystemExRevenueCenter,
  CodesystemExampleSummary,
  CodesystemExampleSupplement,
  CodesystemExample,
  CodesystemExamplescenarioActorType,
  CodesystemExpansionParameterSource,
  CodesystemExpansionProcessingRule,
  CodesystemExplanationofbenefitStatus,
  CodesystemExposureState,
  CodesystemExpressionLanguage,
  CodesystemExtensionContextType,
  CodesystemExtraActivityType,
  CodesystemExtraSecurityRoleType,
  CodesystemFeedingDevice,
  CodesystemFilterOperator,
  CodesystemFinancialTaskcode,
  CodesystemFinancialTaskinputtype,
  CodesystemFlagCategory,
  CodesystemFlagPriority,
  CodesystemFlagStatus,
  CodesystemFmConditions,
  CodesystemFmItemtype,
  CodesystemFmStatus,
  CodesystemForms,
  CodesystemFundsreserve,
  CodesystemGenderIdentity,
  CodesystemGoalAcceptanceStatus,
  CodesystemGoalAchievement,
  CodesystemGoalCategory,
  CodesystemGoalPriority,
  CodesystemGoalRelationshipType,
  CodesystemGoalStatusReason,
  CodesystemGoalStatus,
  CodesystemGraphCompartmentRule,
  CodesystemGraphCompartmentUse,
  CodesystemGroupMeasure,
  CodesystemGroupType,
  CodesystemGuidanceResponseStatus,
  CodesystemGuidePageGeneration,
  CodesystemGuideParameterCode,
  CodesystemHandlingCondition,
  CodesystemHistoryAbsentReason,
  CodesystemHistoryStatus,
  CodesystemHl7WorkGroup,
  CodesystemHttpOperations,
  CodesystemHttpVerb,
  CodesystemIcd10Procedures,
  CodesystemIdentifierUse,
  CodesystemIdentityAssurancelevel,
  CodesystemImagingstudyStatus,
  CodesystemImmunizationEvaluationDoseStatusReason,
  CodesystemImmunizationEvaluationDoseStatus,
  CodesystemImmunizationFundingSource,
  CodesystemImmunizationOrigin,
  CodesystemImmunizationProgramEligibility,
  CodesystemImmunizationRecommendationStatus,
  CodesystemImmunizationSubpotentReason,
  CodesystemImplantstatus,
  CodesystemInsuranceplanApplicability,
  CodesystemInsuranceplanType,
  CodesystemIntervention,
  CodesystemInvoicePricecomponenttype,
  CodesystemInvoiceStatus,
  CodesystemIso21089Lifecycle,
  CodesystemIssueSeverity,
  CodesystemIssueType,
  CodesystemItemType,
  CodesystemKnowledgeResourceTypes,
  CodesystemLanguagePreferenceType,
  CodesystemLibraryType,
  CodesystemLinkType,
  CodesystemLinkageType,
  CodesystemListEmptyReason,
  CodesystemListExampleCodes,
  CodesystemListItemFlag,
  CodesystemListMode,
  CodesystemListOrder,
  CodesystemListStatus,
  CodesystemLocationMode,
  CodesystemLocationPhysicalType,
  CodesystemLocationStatus,
  CodesystemMapContextType,
  CodesystemMapGroupTypeMode,
  CodesystemMapInputMode,
  CodesystemMapModelMode,
  CodesystemMapSourceListMode,
  CodesystemMapTargetListMode,
  CodesystemMapTransform,
  CodesystemMatchGrade,
  CodesystemMeasureDataUsage,
  CodesystemMeasureImprovementNotation,
  CodesystemMeasurePopulation,
  CodesystemMeasureReportStatus,
  CodesystemMeasureReportType,
  CodesystemMeasureScoring,
  CodesystemMeasureType,
  CodesystemMedAdminPerformFunction,
  CodesystemMediaModality,
  CodesystemMediaType,
  CodesystemMedicationAdminCategory,
  CodesystemMedicationAdminStatus,
  CodesystemMedicationStatementCategory,
  CodesystemMedicationStatementStatus,
  CodesystemMedicationStatus,
  CodesystemMedicationdispenseCategory,
  CodesystemMedicationdispensePerformerFunction,
  CodesystemMedicationdispenseStatusReason,
  CodesystemMedicationdispenseStatus,
  CodesystemMedicationknowledgeCharacteristic,
  CodesystemMedicationknowledgePackageType,
  CodesystemMedicationknowledgeStatus,
  CodesystemMedicationrequestCategory,
  CodesystemMedicationrequestCourseOfTherapy,
  CodesystemMedicationrequestIntent,
  CodesystemMedicationrequestStatusReason,
  CodesystemMedicationrequestStatus,
  CodesystemMessageEvents,
  CodesystemMessageReasonEncounter,
  CodesystemMessageSignificanceCategory,
  CodesystemMessageTransport,
  CodesystemMessageheaderResponseRequest,
  CodesystemMetricCalibrationState,
  CodesystemMetricCalibrationType,
  CodesystemMetricCategory,
  CodesystemMetricColor,
  CodesystemMetricOperationalStatus,
  CodesystemMissingToothReason,
  CodesystemNameAssemblyOrder,
  CodesystemNameUse,
  CodesystemNamingsystemIdentifierType,
  CodesystemNamingsystemType,
  CodesystemNarrativeStatus,
  CodesystemNetworkType,
  CodesystemNhinPurposeofuse,
  CodesystemNoteType,
  CodesystemObjectRole,
  CodesystemObservationCategory,
  CodesystemObservationRangeCategory,
  CodesystemObservationStatistics,
  CodesystemObservationStatus,
  CodesystemOperationKind,
  CodesystemOperationOutcome,
  CodesystemOperationParameterUse,
  CodesystemOralProsthodonticMaterial,
  CodesystemOrganizationRole,
  CodesystemOrganizationType,
  CodesystemOrientationType,
  CodesystemParameterGroup,
  CodesystemParticipantrequired,
  CodesystemParticipationstatus,
  CodesystemPayeetype,
  CodesystemPaymentAdjustmentReason,
  CodesystemPaymentStatus,
  CodesystemPaymentType,
  CodesystemPermittedDataType,
  CodesystemPlanDefinitionType,
  CodesystemPractitionerRole,
  CodesystemPractitionerSpecialty,
  CodesystemPrecisionEstimateType,
  CodesystemProcedureProgressStatusCodes,
  CodesystemProcessPriority,
  CodesystemProductCategory,
  CodesystemProductStatus,
  CodesystemProductStorageScale,
  CodesystemProgram,
  CodesystemPropertyRepresentation,
  CodesystemProvenanceAgentRole,
  CodesystemProvenanceAgentType,
  CodesystemProvenanceEntityRole,
  CodesystemProviderQualification,
  CodesystemPublicationStatus,
  CodesystemQualityType,
  CodesystemQuantityComparator,
  CodesystemQuestionMaxOccurs,
  CodesystemQuestionnaireAnswersStatus,
  CodesystemQuestionnaireDisplayCategory,
  CodesystemQuestionnaireEnableBehavior,
  CodesystemQuestionnaireEnableOperator,
  CodesystemQuestionnaireItemControl,
  CodesystemQuestionnaireUsageMode,
  CodesystemReactionEventCertainty,
  CodesystemReactionEventSeverity,
  CodesystemReasonMedicationGivenCodes,
  CodesystemReasonMedicationNotGivenCodes,
  CodesystemRecommendationStrength,
  CodesystemReferenceHandlingPolicy,
  CodesystemReferenceVersionRules,
  CodesystemReferencerangeMeaning,
  CodesystemRejectionCriteria,
  CodesystemRelatedArtifactType,
  CodesystemRelatedClaimRelationship,
  CodesystemRelationType,
  CodesystemRelationship,
  CodesystemRemittanceOutcome,
  CodesystemReportActionResultCodes,
  CodesystemReportParticipantType,
  CodesystemReportResultCodes,
  CodesystemReportStatusCodes,
  CodesystemRepositoryType,
  CodesystemRequestIntent,
  CodesystemRequestPriority,
  CodesystemRequestResourceTypes,
  CodesystemRequestStatus,
  CodesystemResearchElementType,
  CodesystemResearchStudyObjectiveType,
  CodesystemResearchStudyPhase,
  CodesystemResearchStudyPrimPurpType,
  CodesystemResearchStudyReasonStopped,
  CodesystemResearchStudyStatus,
  CodesystemResearchSubjectStatus,
  CodesystemResourceAggregationMode,
  CodesystemResourceSecurityCategory,
  CodesystemResourceSlicingRules,
  CodesystemResourceStatus,
  CodesystemResourceTypeLink,
  CodesystemResourceValidationMode,
  CodesystemResponseCode,
  CodesystemRestfulCapabilityMode,
  CodesystemRestfulInteraction,
  CodesystemRestfulSecurityService,
  CodesystemRiskEstimateType,
  CodesystemRiskProbability,
  CodesystemSearchComparator,
  CodesystemSearchEntryMode,
  CodesystemSearchModifierCode,
  CodesystemSearchParamType,
  CodesystemSearchXpathUsage,
  CodesystemSecondaryFinding,
  CodesystemSequenceType,
  CodesystemServiceCategory,
  CodesystemServiceModifiers,
  CodesystemServicePharmacy,
  CodesystemServicePlace,
  CodesystemServiceProduct,
  CodesystemServiceProvisionConditions,
  CodesystemServiceReferralMethod,
  CodesystemServiceUscls,
  CodesystemSignatureType,
  CodesystemSlotstatus,
  CodesystemSmartCapabilities,
  CodesystemSnomedct,
  CodesystemSortDirection,
  CodesystemSpecialValues,
  CodesystemSpecimenContainedPreference,
  CodesystemSpecimenStatus,
  CodesystemStandardsStatus,
  CodesystemStrandType,
  CodesystemStructureDefinitionKind,
  CodesystemStudyType,
  CodesystemSubscriberRelationship,
  CodesystemSubscriptionChannelType,
  CodesystemSubscriptionStatus,
  CodesystemSubscriptionTag,
  CodesystemSubstanceCategory,
  CodesystemSubstanceStatus,
  CodesystemSupplydeliveryStatus,
  CodesystemSupplydeliveryType,
  CodesystemSupplyrequestKind,
  CodesystemSupplyrequestReason,
  CodesystemSupplyrequestStatus,
  CodesystemSurface,
  CodesystemSynthesisType,
  CodesystemTaskCode,
  CodesystemTaskIntent,
  CodesystemTaskStatus,
  CodesystemTeeth,
  CodesystemTestscriptOperationCodes,
  CodesystemTestscriptProfileDestinationTypes,
  CodesystemTestscriptProfileOriginTypes,
  CodesystemTldc,
  CodesystemTooth,
  CodesystemTransactionMode,
  CodesystemTriggerType,
  CodesystemTypeDerivationRule,
  CodesystemUdiEntryType,
  CodesystemUdi,
  CodesystemUnknownContentCode,
  CodesystemUsageContextType,
  CodesystemVariableType,
  CodesystemVariantState,
  CodesystemVerificationresultCanPushUpdates,
  CodesystemVerificationresultCommunicationMethod,
  CodesystemVerificationresultFailureAction,
  CodesystemVerificationresultNeed,
  CodesystemVerificationresultPrimarySourceType,
  CodesystemVerificationresultPushTypeAvailable,
  CodesystemVerificationresultStatus,
  CodesystemVerificationresultValidationProcess,
  CodesystemVerificationresultValidationStatus,
  CodesystemVerificationresultValidationType,
  CodesystemVersioningPolicy,
  CodesystemVisionBaseCodes,
  CodesystemVisionEyeCodes,
  CodesystemVisionProduct,
  CodesystemW3cProvenanceActivityType,
} from "./fixture";
import { z } from "zod/v4";

describe("CodeSystem Schema Validation", () => {
  it("should validate CodesystemFhirVersion fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFhirVersion);
    if (!result.success) {
      console.error("Validation failed for CodesystemFhirVersion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFhirVersion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAbstractTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAbstractTypes);
    if (!result.success) {
      console.error("Validation failed for CodesystemAbstractTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAbstractTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAccountStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAccountStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemAccountStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAccountStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionCardinalityBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionCardinalityBehavior,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemActionCardinalityBehavior:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionCardinalityBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionConditionKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionConditionKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionConditionKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionConditionKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionGroupingBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionGroupingBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionGroupingBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionGroupingBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionParticipantType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionPrecheckBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionPrecheckBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionPrecheckBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionPrecheckBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionRelationshipType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionRequiredBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionRequiredBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionRequiredBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionRequiredBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionSelectionBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActionSelectionBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemActionSelectionBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionSelectionBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActionType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemActionType);
    if (!result.success) {
      console.error("Validation failed for CodesystemActionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemActivityDefinitionCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemActivityDefinitionCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemActivityDefinitionCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemActivityDefinitionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdditionalmaterials fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdditionalmaterials,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdditionalmaterials:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdditionalmaterials: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAddressType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAddressType);
    if (!result.success) {
      console.error("Validation failed for CodesystemAddressType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAddressType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAddressUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAddressUse);
    if (!result.success) {
      console.error("Validation failed for CodesystemAddressUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAddressUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdjudicationError fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdjudicationError,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdjudicationError:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdjudicationError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdjudicationReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdjudicationReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdjudicationReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdjudicationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdjudication fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAdjudication);
    if (!result.success) {
      console.error("Validation failed for CodesystemAdjudication:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdjudication: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdministrativeGender fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdministrativeGender,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdministrativeGender:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdministrativeGender: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventActuality fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventActuality,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdverseEventActuality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventActuality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdverseEventCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventCausalityAssess fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventCausalityAssess,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAdverseEventCausalityAssess:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventCausalityAssess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventCausalityMethod fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventCausalityMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAdverseEventCausalityMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventCausalityMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventOutcome fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdverseEventOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventSeriousness fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventSeriousness,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdverseEventSeriousness:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventSeriousness: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAdverseEventSeverity fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAdverseEventSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAdverseEventSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAdverseEventSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergIntolSubstanceExpRisk fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergIntolSubstanceExpRisk,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAllergIntolSubstanceExpRisk:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergIntolSubstanceExpRisk: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergyIntoleranceCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergyIntoleranceCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAllergyIntoleranceCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergyIntoleranceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergyIntoleranceCriticality fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergyIntoleranceCriticality,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAllergyIntoleranceCriticality:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergyIntoleranceCriticality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergyIntoleranceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergyIntoleranceType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAllergyIntoleranceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergyIntoleranceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergyintoleranceClinical fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergyintoleranceClinical,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAllergyintoleranceClinical:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergyintoleranceClinical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAllergyintoleranceVerification fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAllergyintoleranceVerification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAllergyintoleranceVerification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAllergyintoleranceVerification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAnimalGenderstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAnimalGenderstatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAnimalGenderstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAnimalGenderstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAnimalSpecies fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAnimalSpecies);
    if (!result.success) {
      console.error("Validation failed for CodesystemAnimalSpecies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAnimalSpecies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAppointmentCancellationReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAppointmentCancellationReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemAppointmentCancellationReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAppointmentCancellationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAppointmentstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAppointmentstatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAppointmentstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAppointmentstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAssertDirectionCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAssertDirectionCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAssertDirectionCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAssertDirectionCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAssertOperatorCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAssertOperatorCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAssertOperatorCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAssertOperatorCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAssertResponseCodeTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAssertResponseCodeTypes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAssertResponseCodeTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAssertResponseCodeTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAssetAvailability fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAssetAvailability,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAssetAvailability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAssetAvailability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAuditEntityType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAuditEntityType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAuditEntityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAuditEntityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAuditEventAction fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAuditEventAction,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAuditEventAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAuditEventAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAuditEventOutcome fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAuditEventOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAuditEventOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAuditEventOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAuditEventType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemAuditEventType);
    if (!result.success) {
      console.error("Validation failed for CodesystemAuditEventType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAuditEventType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemAuditSourceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemAuditSourceType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemAuditSourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemAuditSourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBasicResourceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemBasicResourceType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemBasicResourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBasicResourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBenefitNetwork fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemBenefitNetwork);
    if (!result.success) {
      console.error("Validation failed for CodesystemBenefitNetwork:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBenefitNetwork: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBenefitTerm fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemBenefitTerm);
    if (!result.success) {
      console.error("Validation failed for CodesystemBenefitTerm:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBenefitTerm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBenefitType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemBenefitType);
    if (!result.success) {
      console.error("Validation failed for CodesystemBenefitType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBenefitType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBenefitUnit fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemBenefitUnit);
    if (!result.success) {
      console.error("Validation failed for CodesystemBenefitUnit:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBenefitUnit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBindingStrength fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemBindingStrength,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemBindingStrength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBindingStrength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemBundleType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemBundleType);
    if (!result.success) {
      console.error("Validation failed for CodesystemBundleType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemBundleType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCapabilityStatementKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCapabilityStatementKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCapabilityStatementKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCapabilityStatementKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCarePlanActivityStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCarePlanActivityStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCarePlanActivityStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCarePlanActivityStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCareTeamStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemCareTeamStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemCareTeamStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCareTeamStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCatalogtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemCatalogtype);
    if (!result.success) {
      console.error("Validation failed for CodesystemCatalogtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCatalogtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCdshooksIndicator fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCdshooksIndicator,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCdshooksIndicator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCdshooksIndicator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCertaintySubcomponentRating fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCertaintySubcomponentRating,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCertaintySubcomponentRating:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCertaintySubcomponentRating: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCertaintySubcomponentType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCertaintySubcomponentType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCertaintySubcomponentType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCertaintySubcomponentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemChargeitemBillingcodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemChargeitemBillingcodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemChargeitemBillingcodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemChargeitemBillingcodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemChargeitemStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemChargeitemStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemChargeitemStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemChargeitemStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemChoiceListOrientation fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemChoiceListOrientation,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemChoiceListOrientation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemChoiceListOrientation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemChromosomeHuman fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemChromosomeHuman,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemChromosomeHuman:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemChromosomeHuman: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimCareteamrole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemClaimCareteamrole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimCareteamrole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimCareteamrole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimException fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemClaimException);
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimException:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimException: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimInformationcategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemClaimInformationcategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemClaimInformationcategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimInformationcategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimModifiers fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemClaimModifiers);
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimModifiers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimModifiers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimSubtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemClaimSubtype);
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemClaimType);
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemClaimUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemClaimUse);
    if (!result.success) {
      console.error("Validation failed for CodesystemClaimUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemClaimUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCodeSearchSupport fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCodeSearchSupport,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCodeSearchSupport:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCodeSearchSupport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCodesystemAltcodeKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCodesystemAltcodeKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCodesystemAltcodeKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCodesystemAltcodeKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCodesystemContentMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCodesystemContentMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCodesystemContentMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCodesystemContentMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCodesystemHierarchyMeaning fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCodesystemHierarchyMeaning,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCodesystemHierarchyMeaning:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCodesystemHierarchyMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCommonTags fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemCommonTags);
    if (!result.success) {
      console.error("Validation failed for CodesystemCommonTags:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCommonTags: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCommunicationCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCommunicationCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCommunicationCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCommunicationCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCommunicationNotDoneReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCommunicationNotDoneReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCommunicationNotDoneReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCommunicationNotDoneReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCommunicationTopic fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCommunicationTopic,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCommunicationTopic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCommunicationTopic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCompartmentType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCompartmentType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCompartmentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCompartmentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCompositeMeasureScoring fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCompositeMeasureScoring,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCompositeMeasureScoring:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCompositeMeasureScoring: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCompositionAltcodeKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCompositionAltcodeKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCompositionAltcodeKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCompositionAltcodeKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCompositionAttestationMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCompositionAttestationMode,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCompositionAttestationMode:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCompositionAttestationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCompositionStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCompositionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCompositionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCompositionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConceptMapEquivalence fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConceptMapEquivalence,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConceptMapEquivalence:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConceptMapEquivalence: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConceptProperties fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConceptProperties,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConceptProperties:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConceptProperties: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConceptPropertyType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConceptPropertyType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConceptPropertyType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConceptPropertyType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConceptSubsumptionOutcome fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConceptSubsumptionOutcome,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemConceptSubsumptionOutcome:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConceptSubsumptionOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConceptmapUnmappedMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConceptmapUnmappedMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConceptmapUnmappedMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConceptmapUnmappedMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConditionCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionClinical fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConditionClinical,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionClinical:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionClinical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionState fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemConditionState);
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionVerStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConditionVerStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionVerStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionVerStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionalDeleteStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConditionalDeleteStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionalDeleteStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionalDeleteStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConditionalReadStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConditionalReadStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConditionalReadStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConditionalReadStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConformanceExpectation fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConformanceExpectation,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConformanceExpectation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConformanceExpectation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentAction fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemConsentAction);
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConsentCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentDataMeaning fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConsentDataMeaning,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentDataMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentDataMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentPerformer fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConsentPerformer,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentPerformer:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentPerformer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentPolicy fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemConsentPolicy);
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentProvisionType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConsentProvisionType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentProvisionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentProvisionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentScope fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemConsentScope);
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentScope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentScope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConsentStateCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConsentStateCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConsentStateCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConsentStateCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemConstraintSeverity fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemConstraintSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemConstraintSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemConstraintSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContactPointSystem fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContactPointSystem,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContactPointSystem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContactPointSystem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContactPointUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContactPointUse,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContactPointUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContactPointUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContactentityType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContactentityType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContactentityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContactentityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContainerCap fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemContainerCap);
    if (!result.success) {
      console.error("Validation failed for CodesystemContainerCap:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContainerCap: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractAction fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemContractAction);
    if (!result.success) {
      console.error("Validation failed for CodesystemContractAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractActionstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractActionstatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractActionstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractActionstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractActorrole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractActorrole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractActorrole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractActorrole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractAssetcontext fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractAssetcontext,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractAssetcontext:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractAssetcontext: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractAssetscope fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractAssetscope,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractAssetscope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractAssetscope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractAssetsubtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractAssetsubtype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractAssetsubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractAssetsubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractAssettype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractAssettype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractAssettype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractAssettype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractContentDerivative fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractContentDerivative,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemContractContentDerivative:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractContentDerivative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractDataMeaning fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractDataMeaning,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractDataMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractDataMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractDecisionMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractDecisionMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractDecisionMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractDecisionMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractDefinitionSubtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractDefinitionSubtype,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemContractDefinitionSubtype:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractDefinitionSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractDefinitionType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractDefinitionType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractDefinitionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractDefinitionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractExpirationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractExpirationType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractExpirationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractExpirationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractLegalstate fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractLegalstate,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractLegalstate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractLegalstate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractPartyRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractPartyRole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractPartyRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractPartyRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractPublicationstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractPublicationstatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemContractPublicationstatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractPublicationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractScope fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemContractScope);
    if (!result.success) {
      console.error("Validation failed for CodesystemContractScope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractScope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractSecurityCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractSecurityCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemContractSecurityCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractSecurityCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractSecurityClassification fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractSecurityClassification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemContractSecurityClassification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractSecurityClassification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractSecurityControl fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractSecurityControl,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractSecurityControl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractSecurityControl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractSignerType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractSignerType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractSignerType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractSignerType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemContractStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemContractStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractSubtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractSubtype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractTermSubtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractTermSubtype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractTermSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractTermSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractTermType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContractTermType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContractTermType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractTermType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContractType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemContractType);
    if (!result.success) {
      console.error("Validation failed for CodesystemContractType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContractType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemContributorType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemContributorType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemContributorType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemContributorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCopyNumberEvent fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCopyNumberEvent,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCopyNumberEvent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCopyNumberEvent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCoverageClass fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemCoverageClass);
    if (!result.success) {
      console.error("Validation failed for CodesystemCoverageClass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCoverageClass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCoverageCopayType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCoverageCopayType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCoverageCopayType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCoverageCopayType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCoverageFinancialException fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCoverageFinancialException,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCoverageFinancialException:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCoverageFinancialException: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCoverageSelfpay fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCoverageSelfpay,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemCoverageSelfpay:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCoverageSelfpay: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemCoverageeligibilityresponseExAuthSupport fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemCoverageeligibilityresponseExAuthSupport,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemCoverageeligibilityresponseExAuthSupport:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemCoverageeligibilityresponseExAuthSupport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDataAbsentReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDataAbsentReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDataAbsentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDataAbsentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDataTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDataTypes);
    if (!result.success) {
      console.error("Validation failed for CodesystemDataTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDataTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDaysOfWeek fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDaysOfWeek);
    if (!result.success) {
      console.error("Validation failed for CodesystemDaysOfWeek:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDaysOfWeek: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDefinitionResourceTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDefinitionResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDefinitionResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDefinitionResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDefinitionStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDefinitionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDefinitionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDefinitionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDefinitionTopic fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDefinitionTopic,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDefinitionTopic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDefinitionTopic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDefinitionUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDefinitionUse);
    if (!result.success) {
      console.error("Validation failed for CodesystemDefinitionUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDefinitionUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDetectedissueSeverity fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDetectedissueSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDetectedissueSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDetectedissueSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceAction fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDeviceAction);
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceDefinitionStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDeviceDefinitionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceDefinitionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceDefinitionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceNametype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDeviceNametype);
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceNametype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceNametype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceStatementStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDeviceStatementStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceStatementStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceStatusReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDeviceStatusReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceStatusReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDeviceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDeviceStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemDeviceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDeviceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDiagnosisRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDiagnosisRole);
    if (!result.success) {
      console.error("Validation failed for CodesystemDiagnosisRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDiagnosisRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDiagnosticReportStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDiagnosticReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDiagnosticReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDiagnosticReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDicomAuditLifecycle fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDicomAuditLifecycle,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDicomAuditLifecycle:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDicomAuditLifecycle: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDiscriminatorType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDiscriminatorType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDiscriminatorType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDiscriminatorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDocumentMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDocumentMode);
    if (!result.success) {
      console.error("Validation failed for CodesystemDocumentMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDocumentMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDocumentReferenceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDocumentReferenceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemDocumentReferenceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDocumentReferenceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDocumentRelationshipType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemDocumentRelationshipType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemDocumentRelationshipType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDocumentRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemDoseRateType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemDoseRateType);
    if (!result.success) {
      console.error("Validation failed for CodesystemDoseRateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemDoseRateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEffectEstimateType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEffectEstimateType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEffectEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEffectEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEligibilityrequestPurpose fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEligibilityrequestPurpose,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemEligibilityrequestPurpose:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEligibilityrequestPurpose: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEligibilityresponsePurpose fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEligibilityresponsePurpose,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemEligibilityresponsePurpose:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEligibilityresponsePurpose: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterAdmitSource fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterAdmitSource,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEncounterAdmitSource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterAdmitSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterDiet fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemEncounterDiet);
    if (!result.success) {
      console.error("Validation failed for CodesystemEncounterDiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterDiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterDischargeDisposition fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterDischargeDisposition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemEncounterDischargeDisposition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterDischargeDisposition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterLocationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterLocationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEncounterLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterParticipantType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterParticipantType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemEncounterParticipantType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterSpecialArrangements fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterSpecialArrangements,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemEncounterSpecialArrangements:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterSpecialArrangements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEncounterStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEncounterStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEncounterType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemEncounterType);
    if (!result.success) {
      console.error("Validation failed for CodesystemEncounterType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEncounterType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEndpointConnectionType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEndpointConnectionType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEndpointConnectionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEndpointConnectionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEndpointPayloadType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEndpointPayloadType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEndpointPayloadType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEndpointPayloadType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEndpointStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemEndpointStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemEndpointStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEndpointStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEntformulaAdditive fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEntformulaAdditive,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEntformulaAdditive:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEntformulaAdditive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEpisodeOfCareStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEpisodeOfCareStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEpisodeOfCareStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEpisodeOfCareStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEpisodeofcareType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEpisodeofcareType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEpisodeofcareType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEpisodeofcareType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEventCapabilityMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEventCapabilityMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEventCapabilityMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEventCapabilityMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEventResourceTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEventResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEventResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEventResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEventStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemEventStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemEventStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEventStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEventTiming fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemEventTiming);
    if (!result.success) {
      console.error("Validation failed for CodesystemEventTiming:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEventTiming: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEvidenceQuality fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEvidenceQuality,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEvidenceQuality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEvidenceQuality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemEvidenceVariantState fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemEvidenceVariantState,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemEvidenceVariantState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemEvidenceVariantState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExBenefitcategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExBenefitcategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExBenefitcategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExBenefitcategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExDiagnosisOnAdmission fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExDiagnosisOnAdmission,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExDiagnosisOnAdmission:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExDiagnosisOnAdmission: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExDiagnosisrelatedgroup fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExDiagnosisrelatedgroup,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExDiagnosisrelatedgroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExDiagnosisrelatedgroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExDiagnosistype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExDiagnosistype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExDiagnosistype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExDiagnosistype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExOnsettype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExOnsettype);
    if (!result.success) {
      console.error("Validation failed for CodesystemExOnsettype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExOnsettype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExPayeeResourceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExPayeeResourceType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExPayeeResourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExPayeeResourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExPaymenttype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExPaymenttype);
    if (!result.success) {
      console.error("Validation failed for CodesystemExPaymenttype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExPaymenttype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExProcedureType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExProcedureType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExProcedureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExProcedureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExProgramCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExProgramCode);
    if (!result.success) {
      console.error("Validation failed for CodesystemExProgramCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExProgramCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExRevenueCenter fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExRevenueCenter,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExRevenueCenter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExRevenueCenter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExampleSummary fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExampleSummary);
    if (!result.success) {
      console.error("Validation failed for CodesystemExampleSummary:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExampleSummary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExampleSupplement fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExampleSupplement,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExampleSupplement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExampleSupplement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExample fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExample);
    if (!result.success) {
      console.error("Validation failed for CodesystemExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExamplescenarioActorType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExamplescenarioActorType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExamplescenarioActorType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExamplescenarioActorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExpansionParameterSource fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExpansionParameterSource,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExpansionParameterSource:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExpansionParameterSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExpansionProcessingRule fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExpansionProcessingRule,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExpansionProcessingRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExpansionProcessingRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExplanationofbenefitStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExplanationofbenefitStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemExplanationofbenefitStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExplanationofbenefitStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExposureState fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemExposureState);
    if (!result.success) {
      console.error("Validation failed for CodesystemExposureState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExposureState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExpressionLanguage fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExpressionLanguage,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExpressionLanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExpressionLanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtensionContextType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExtensionContextType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExtensionContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtensionContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtraActivityType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExtraActivityType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExtraActivityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtraActivityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemExtraSecurityRoleType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemExtraSecurityRoleType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemExtraSecurityRoleType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemExtraSecurityRoleType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFeedingDevice fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFeedingDevice);
    if (!result.success) {
      console.error("Validation failed for CodesystemFeedingDevice:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFeedingDevice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFilterOperator fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFilterOperator);
    if (!result.success) {
      console.error("Validation failed for CodesystemFilterOperator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFilterOperator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFinancialTaskcode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemFinancialTaskcode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemFinancialTaskcode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFinancialTaskcode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFinancialTaskinputtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemFinancialTaskinputtype,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemFinancialTaskinputtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFinancialTaskinputtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFlagCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFlagCategory);
    if (!result.success) {
      console.error("Validation failed for CodesystemFlagCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFlagCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFlagPriority fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFlagPriority);
    if (!result.success) {
      console.error("Validation failed for CodesystemFlagPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFlagPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFlagStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFlagStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemFlagStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFlagStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFmConditions fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFmConditions);
    if (!result.success) {
      console.error("Validation failed for CodesystemFmConditions:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFmConditions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFmItemtype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFmItemtype);
    if (!result.success) {
      console.error("Validation failed for CodesystemFmItemtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFmItemtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFmStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFmStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemFmStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFmStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemForms fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemForms);
    if (!result.success) {
      console.error("Validation failed for CodesystemForms:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemForms: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemFundsreserve fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemFundsreserve);
    if (!result.success) {
      console.error("Validation failed for CodesystemFundsreserve:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemFundsreserve: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGenderIdentity fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGenderIdentity);
    if (!result.success) {
      console.error("Validation failed for CodesystemGenderIdentity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGenderIdentity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalAcceptanceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGoalAcceptanceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalAcceptanceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalAcceptanceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalAchievement fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGoalAchievement,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalAchievement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalAchievement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGoalCategory);
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalPriority fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGoalPriority);
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalRelationshipType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGoalRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalStatusReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGoalStatusReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalStatusReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGoalStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGoalStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemGoalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGoalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGraphCompartmentRule fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGraphCompartmentRule,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGraphCompartmentRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGraphCompartmentRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGraphCompartmentUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGraphCompartmentUse,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGraphCompartmentUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGraphCompartmentUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGroupMeasure fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGroupMeasure);
    if (!result.success) {
      console.error("Validation failed for CodesystemGroupMeasure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGroupMeasure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGroupType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemGroupType);
    if (!result.success) {
      console.error("Validation failed for CodesystemGroupType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGroupType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGuidanceResponseStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGuidanceResponseStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGuidanceResponseStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGuidanceResponseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGuidePageGeneration fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGuidePageGeneration,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGuidePageGeneration:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGuidePageGeneration: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemGuideParameterCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemGuideParameterCode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemGuideParameterCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemGuideParameterCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHandlingCondition fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemHandlingCondition,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemHandlingCondition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHandlingCondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHistoryAbsentReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemHistoryAbsentReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemHistoryAbsentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHistoryAbsentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHistoryStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemHistoryStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemHistoryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHistoryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHl7WorkGroup fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemHl7WorkGroup);
    if (!result.success) {
      console.error("Validation failed for CodesystemHl7WorkGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHl7WorkGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHttpOperations fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemHttpOperations);
    if (!result.success) {
      console.error("Validation failed for CodesystemHttpOperations:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHttpOperations: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemHttpVerb fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemHttpVerb);
    if (!result.success) {
      console.error("Validation failed for CodesystemHttpVerb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemHttpVerb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIcd10Procedures fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemIcd10Procedures,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemIcd10Procedures:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIcd10Procedures: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIdentifierUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemIdentifierUse);
    if (!result.success) {
      console.error("Validation failed for CodesystemIdentifierUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIdentifierUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIdentityAssurancelevel fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemIdentityAssurancelevel,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemIdentityAssurancelevel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIdentityAssurancelevel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImagingstudyStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImagingstudyStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemImagingstudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImagingstudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationEvaluationDoseStatusReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationEvaluationDoseStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationEvaluationDoseStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationEvaluationDoseStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationEvaluationDoseStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationEvaluationDoseStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationEvaluationDoseStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationEvaluationDoseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationFundingSource fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationFundingSource,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationFundingSource:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationFundingSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationOrigin fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationOrigin,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemImmunizationOrigin:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationOrigin: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationProgramEligibility fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationProgramEligibility,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationProgramEligibility:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationProgramEligibility: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationRecommendationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationRecommendationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationRecommendationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationRecommendationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImmunizationSubpotentReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemImmunizationSubpotentReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemImmunizationSubpotentReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImmunizationSubpotentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemImplantstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemImplantstatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemImplantstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemImplantstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemInsuranceplanApplicability fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemInsuranceplanApplicability,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemInsuranceplanApplicability:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemInsuranceplanApplicability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemInsuranceplanType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemInsuranceplanType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemInsuranceplanType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemInsuranceplanType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIntervention fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemIntervention);
    if (!result.success) {
      console.error("Validation failed for CodesystemIntervention:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIntervention: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemInvoicePricecomponenttype fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemInvoicePricecomponenttype,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemInvoicePricecomponenttype:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemInvoicePricecomponenttype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemInvoiceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemInvoiceStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemInvoiceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemInvoiceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIso21089Lifecycle fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemIso21089Lifecycle,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemIso21089Lifecycle:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIso21089Lifecycle: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIssueSeverity fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemIssueSeverity);
    if (!result.success) {
      console.error("Validation failed for CodesystemIssueSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIssueSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemIssueType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemIssueType);
    if (!result.success) {
      console.error("Validation failed for CodesystemIssueType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemIssueType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemItemType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemItemType);
    if (!result.success) {
      console.error("Validation failed for CodesystemItemType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemItemType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemKnowledgeResourceTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemKnowledgeResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemKnowledgeResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemKnowledgeResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLanguagePreferenceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemLanguagePreferenceType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemLanguagePreferenceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLanguagePreferenceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLibraryType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemLibraryType);
    if (!result.success) {
      console.error("Validation failed for CodesystemLibraryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLibraryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLinkType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemLinkType);
    if (!result.success) {
      console.error("Validation failed for CodesystemLinkType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLinkType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLinkageType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemLinkageType);
    if (!result.success) {
      console.error("Validation failed for CodesystemLinkageType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLinkageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListEmptyReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemListEmptyReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemListEmptyReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListEmptyReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListExampleCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemListExampleCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemListExampleCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListExampleCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListItemFlag fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemListItemFlag);
    if (!result.success) {
      console.error("Validation failed for CodesystemListItemFlag:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListItemFlag: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemListMode);
    if (!result.success) {
      console.error("Validation failed for CodesystemListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListOrder fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemListOrder);
    if (!result.success) {
      console.error("Validation failed for CodesystemListOrder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemListStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemListStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemListStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemListStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLocationMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemLocationMode);
    if (!result.success) {
      console.error("Validation failed for CodesystemLocationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLocationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLocationPhysicalType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemLocationPhysicalType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemLocationPhysicalType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLocationPhysicalType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemLocationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemLocationStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapContextType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMapContextType);
    if (!result.success) {
      console.error("Validation failed for CodesystemMapContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapGroupTypeMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMapGroupTypeMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMapGroupTypeMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapGroupTypeMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapInputMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMapInputMode);
    if (!result.success) {
      console.error("Validation failed for CodesystemMapInputMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapInputMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapModelMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMapModelMode);
    if (!result.success) {
      console.error("Validation failed for CodesystemMapModelMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapModelMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapSourceListMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMapSourceListMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMapSourceListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapSourceListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapTargetListMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMapTargetListMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMapTargetListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapTargetListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMapTransform fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMapTransform);
    if (!result.success) {
      console.error("Validation failed for CodesystemMapTransform:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMapTransform: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMatchGrade fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMatchGrade);
    if (!result.success) {
      console.error("Validation failed for CodesystemMatchGrade:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMatchGrade: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureDataUsage fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMeasureDataUsage,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasureDataUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureDataUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureImprovementNotation fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMeasureImprovementNotation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMeasureImprovementNotation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureImprovementNotation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasurePopulation fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMeasurePopulation,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasurePopulation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasurePopulation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureReportStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMeasureReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasureReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureReportType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMeasureReportType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasureReportType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureReportType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureScoring fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMeasureScoring);
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasureScoring:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureScoring: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMeasureType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMeasureType);
    if (!result.success) {
      console.error("Validation failed for CodesystemMeasureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMeasureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedAdminPerformFunction fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedAdminPerformFunction,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedAdminPerformFunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedAdminPerformFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMediaModality fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMediaModality);
    if (!result.success) {
      console.error("Validation failed for CodesystemMediaModality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMediaModality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMediaType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMediaType);
    if (!result.success) {
      console.error("Validation failed for CodesystemMediaType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMediaType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationAdminCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationAdminCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedicationAdminCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationAdminCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationAdminStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationAdminStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedicationAdminStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationAdminStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationStatementCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationStatementCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationStatementCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationStatementCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationStatementStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationStatementStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationStatementStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationdispenseCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationdispenseCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationdispenseCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationdispenseCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationdispensePerformerFunction fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationdispensePerformerFunction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationdispensePerformerFunction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationdispensePerformerFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationdispenseStatusReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationdispenseStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationdispenseStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationdispenseStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationdispenseStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationdispenseStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationdispenseStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationdispenseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationknowledgeCharacteristic fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationknowledgeCharacteristic,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationknowledgeCharacteristic:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationknowledgeCharacteristic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationknowledgePackageType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationknowledgePackageType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationknowledgePackageType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationknowledgePackageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationknowledgeStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationknowledgeStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationknowledgeStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationknowledgeStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationrequestCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationrequestCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationrequestCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationrequestCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationrequestCourseOfTherapy fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationrequestCourseOfTherapy,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationrequestCourseOfTherapy:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationrequestCourseOfTherapy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationrequestIntent fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationrequestIntent,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedicationrequestIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationrequestIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationrequestStatusReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationrequestStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMedicationrequestStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationrequestStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMedicationrequestStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMedicationrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMedicationrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMedicationrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMessageEvents fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMessageEvents);
    if (!result.success) {
      console.error("Validation failed for CodesystemMessageEvents:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMessageEvents: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMessageReasonEncounter fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMessageReasonEncounter,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMessageReasonEncounter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMessageReasonEncounter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMessageSignificanceCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMessageSignificanceCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMessageSignificanceCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMessageSignificanceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMessageTransport fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMessageTransport,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMessageTransport:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMessageTransport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMessageheaderResponseRequest fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMessageheaderResponseRequest,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemMessageheaderResponseRequest:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMessageheaderResponseRequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMetricCalibrationState fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMetricCalibrationState,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMetricCalibrationState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMetricCalibrationState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMetricCalibrationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMetricCalibrationType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMetricCalibrationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMetricCalibrationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMetricCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMetricCategory);
    if (!result.success) {
      console.error("Validation failed for CodesystemMetricCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMetricCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMetricColor fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemMetricColor);
    if (!result.success) {
      console.error("Validation failed for CodesystemMetricColor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMetricColor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMetricOperationalStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMetricOperationalStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMetricOperationalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMetricOperationalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemMissingToothReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemMissingToothReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemMissingToothReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemMissingToothReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNameAssemblyOrder fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemNameAssemblyOrder,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemNameAssemblyOrder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNameAssemblyOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNameUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemNameUse);
    if (!result.success) {
      console.error("Validation failed for CodesystemNameUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNameUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNamingsystemIdentifierType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemNamingsystemIdentifierType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemNamingsystemIdentifierType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNamingsystemIdentifierType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNamingsystemType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemNamingsystemType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemNamingsystemType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNamingsystemType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNarrativeStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemNarrativeStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemNarrativeStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNarrativeStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNetworkType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemNetworkType);
    if (!result.success) {
      console.error("Validation failed for CodesystemNetworkType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNetworkType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNhinPurposeofuse fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemNhinPurposeofuse,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemNhinPurposeofuse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNhinPurposeofuse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemNoteType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemNoteType);
    if (!result.success) {
      console.error("Validation failed for CodesystemNoteType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemNoteType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemObjectRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemObjectRole);
    if (!result.success) {
      console.error("Validation failed for CodesystemObjectRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemObjectRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemObservationCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemObservationCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemObservationCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemObservationCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemObservationRangeCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemObservationRangeCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemObservationRangeCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemObservationRangeCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemObservationStatistics fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemObservationStatistics,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemObservationStatistics:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemObservationStatistics: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemObservationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemObservationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemObservationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemObservationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOperationKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemOperationKind);
    if (!result.success) {
      console.error("Validation failed for CodesystemOperationKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOperationKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOperationOutcome fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOperationOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemOperationOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOperationOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOperationParameterUse fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOperationParameterUse,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemOperationParameterUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOperationParameterUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOralProsthodonticMaterial fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOralProsthodonticMaterial,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemOralProsthodonticMaterial:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOralProsthodonticMaterial: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOrganizationRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOrganizationRole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemOrganizationRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOrganizationRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOrganizationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOrganizationType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemOrganizationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOrganizationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemOrientationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemOrientationType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemOrientationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemOrientationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemParameterGroup fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemParameterGroup);
    if (!result.success) {
      console.error("Validation failed for CodesystemParameterGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemParameterGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemParticipantrequired fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemParticipantrequired,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemParticipantrequired:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemParticipantrequired: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemParticipationstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemParticipationstatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemParticipationstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemParticipationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPayeetype fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemPayeetype);
    if (!result.success) {
      console.error("Validation failed for CodesystemPayeetype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPayeetype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPaymentAdjustmentReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPaymentAdjustmentReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPaymentAdjustmentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPaymentAdjustmentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPaymentStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemPaymentStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemPaymentStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPaymentStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPaymentType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemPaymentType);
    if (!result.success) {
      console.error("Validation failed for CodesystemPaymentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPaymentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPermittedDataType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPermittedDataType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPermittedDataType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPermittedDataType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPlanDefinitionType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPlanDefinitionType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPlanDefinitionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPlanDefinitionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPractitionerRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPractitionerRole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPractitionerRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPractitionerRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPractitionerSpecialty fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPractitionerSpecialty,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPractitionerSpecialty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPractitionerSpecialty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPrecisionEstimateType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPrecisionEstimateType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPrecisionEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPrecisionEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProcedureProgressStatusCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProcedureProgressStatusCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemProcedureProgressStatusCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProcedureProgressStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProcessPriority fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProcessPriority,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProcessPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProcessPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProductCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProductCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProductCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProductCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProductStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemProductStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemProductStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProductStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProductStorageScale fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProductStorageScale,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProductStorageScale:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProductStorageScale: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProgram fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemProgram);
    if (!result.success) {
      console.error("Validation failed for CodesystemProgram:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProgram: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPropertyRepresentation fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPropertyRepresentation,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPropertyRepresentation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPropertyRepresentation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProvenanceAgentRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProvenanceAgentRole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProvenanceAgentRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProvenanceAgentRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProvenanceAgentType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProvenanceAgentType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProvenanceAgentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProvenanceAgentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProvenanceEntityRole fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProvenanceEntityRole,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProvenanceEntityRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProvenanceEntityRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemProviderQualification fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemProviderQualification,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemProviderQualification:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemProviderQualification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemPublicationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemPublicationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemPublicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemPublicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQualityType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemQualityType);
    if (!result.success) {
      console.error("Validation failed for CodesystemQualityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQualityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuantityComparator fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuantityComparator,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemQuantityComparator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuantityComparator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionMaxOccurs fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionMaxOccurs,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemQuestionMaxOccurs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionMaxOccurs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireAnswersStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireAnswersStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemQuestionnaireAnswersStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireAnswersStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireDisplayCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireDisplayCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemQuestionnaireDisplayCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireDisplayCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireEnableBehavior fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireEnableBehavior,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemQuestionnaireEnableBehavior:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireEnableBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireEnableOperator fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireEnableOperator,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemQuestionnaireEnableOperator:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireEnableOperator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireItemControl fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireItemControl,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemQuestionnaireItemControl:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireItemControl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemQuestionnaireUsageMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemQuestionnaireUsageMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemQuestionnaireUsageMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemQuestionnaireUsageMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReactionEventCertainty fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReactionEventCertainty,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReactionEventCertainty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReactionEventCertainty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReactionEventSeverity fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReactionEventSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReactionEventSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReactionEventSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReasonMedicationGivenCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReasonMedicationGivenCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemReasonMedicationGivenCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReasonMedicationGivenCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReasonMedicationNotGivenCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReasonMedicationNotGivenCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemReasonMedicationNotGivenCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReasonMedicationNotGivenCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRecommendationStrength fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRecommendationStrength,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRecommendationStrength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRecommendationStrength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReferenceHandlingPolicy fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReferenceHandlingPolicy,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReferenceHandlingPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReferenceHandlingPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReferenceVersionRules fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReferenceVersionRules,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReferenceVersionRules:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReferenceVersionRules: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReferencerangeMeaning fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReferencerangeMeaning,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReferencerangeMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReferencerangeMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRejectionCriteria fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRejectionCriteria,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRejectionCriteria:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRejectionCriteria: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRelatedArtifactType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRelatedArtifactType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRelatedArtifactType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRelatedArtifactType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRelatedClaimRelationship fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRelatedClaimRelationship,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemRelatedClaimRelationship:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRelatedClaimRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRelationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemRelationType);
    if (!result.success) {
      console.error("Validation failed for CodesystemRelationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRelationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRelationship fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemRelationship);
    if (!result.success) {
      console.error("Validation failed for CodesystemRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRemittanceOutcome fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRemittanceOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRemittanceOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRemittanceOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReportActionResultCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReportActionResultCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReportActionResultCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReportActionResultCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReportParticipantType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReportParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReportParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReportParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReportResultCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReportResultCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReportResultCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReportResultCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemReportStatusCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemReportStatusCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemReportStatusCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemReportStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRepositoryType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemRepositoryType);
    if (!result.success) {
      console.error("Validation failed for CodesystemRepositoryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRepositoryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRequestIntent fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemRequestIntent);
    if (!result.success) {
      console.error("Validation failed for CodesystemRequestIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRequestIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRequestPriority fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRequestPriority,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRequestPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRequestPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRequestResourceTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRequestResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRequestResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRequestResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRequestStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemRequestStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemRequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchElementType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchElementType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResearchElementType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchElementType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchStudyObjectiveType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchStudyObjectiveType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemResearchStudyObjectiveType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchStudyObjectiveType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchStudyPhase fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchStudyPhase,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResearchStudyPhase:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchStudyPhase: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchStudyPrimPurpType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchStudyPrimPurpType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemResearchStudyPrimPurpType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchStudyPrimPurpType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchStudyReasonStopped fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchStudyReasonStopped,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemResearchStudyReasonStopped:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchStudyReasonStopped: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchStudyStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchStudyStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResearchStudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchStudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResearchSubjectStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResearchSubjectStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResearchSubjectStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResearchSubjectStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceAggregationMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResourceAggregationMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResourceAggregationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceAggregationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceSecurityCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResourceSecurityCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemResourceSecurityCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceSecurityCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceSlicingRules fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResourceSlicingRules,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResourceSlicingRules:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceSlicingRules: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemResourceStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemResourceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceTypeLink fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResourceTypeLink,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResourceTypeLink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceTypeLink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResourceValidationMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemResourceValidationMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemResourceValidationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResourceValidationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemResponseCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemResponseCode);
    if (!result.success) {
      console.error("Validation failed for CodesystemResponseCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemResponseCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRestfulCapabilityMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRestfulCapabilityMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRestfulCapabilityMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRestfulCapabilityMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRestfulInteraction fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRestfulInteraction,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRestfulInteraction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRestfulInteraction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRestfulSecurityService fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRestfulSecurityService,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRestfulSecurityService:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRestfulSecurityService: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRiskEstimateType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRiskEstimateType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRiskEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRiskEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemRiskProbability fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemRiskProbability,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemRiskProbability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemRiskProbability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSearchComparator fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSearchComparator,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSearchComparator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSearchComparator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSearchEntryMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSearchEntryMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSearchEntryMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSearchEntryMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSearchModifierCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSearchModifierCode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSearchModifierCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSearchModifierCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSearchParamType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSearchParamType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSearchParamType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSearchParamType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSearchXpathUsage fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSearchXpathUsage,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSearchXpathUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSearchXpathUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSecondaryFinding fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSecondaryFinding,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSecondaryFinding:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSecondaryFinding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSequenceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSequenceType);
    if (!result.success) {
      console.error("Validation failed for CodesystemSequenceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSequenceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemServiceCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemServiceCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceModifiers fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemServiceModifiers,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemServiceModifiers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceModifiers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServicePharmacy fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemServicePharmacy,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemServicePharmacy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServicePharmacy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServicePlace fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemServicePlace);
    if (!result.success) {
      console.error("Validation failed for CodesystemServicePlace:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServicePlace: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceProduct fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemServiceProduct);
    if (!result.success) {
      console.error("Validation failed for CodesystemServiceProduct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceProduct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceProvisionConditions fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemServiceProvisionConditions,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemServiceProvisionConditions:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceProvisionConditions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceReferralMethod fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemServiceReferralMethod,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemServiceReferralMethod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceReferralMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemServiceUscls fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemServiceUscls);
    if (!result.success) {
      console.error("Validation failed for CodesystemServiceUscls:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemServiceUscls: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSignatureType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSignatureType);
    if (!result.success) {
      console.error("Validation failed for CodesystemSignatureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSignatureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSlotstatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSlotstatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemSlotstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSlotstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSmartCapabilities fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSmartCapabilities,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSmartCapabilities:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSmartCapabilities: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSnomedct fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSnomedct);
    if (!result.success) {
      console.error("Validation failed for CodesystemSnomedct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSnomedct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSortDirection fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSortDirection);
    if (!result.success) {
      console.error("Validation failed for CodesystemSortDirection:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSortDirection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSpecialValues fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSpecialValues);
    if (!result.success) {
      console.error("Validation failed for CodesystemSpecialValues:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSpecialValues: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSpecimenContainedPreference fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSpecimenContainedPreference,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemSpecimenContainedPreference:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSpecimenContainedPreference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSpecimenStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSpecimenStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemSpecimenStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSpecimenStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemStandardsStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemStandardsStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemStandardsStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemStandardsStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemStrandType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemStrandType);
    if (!result.success) {
      console.error("Validation failed for CodesystemStrandType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemStrandType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemStructureDefinitionKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemStructureDefinitionKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemStructureDefinitionKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemStructureDefinitionKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemStudyType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemStudyType);
    if (!result.success) {
      console.error("Validation failed for CodesystemStudyType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemStudyType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubscriberRelationship fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubscriberRelationship,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubscriberRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubscriberRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubscriptionChannelType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubscriptionChannelType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubscriptionChannelType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubscriptionChannelType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubscriptionStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubscriptionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubscriptionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubscriptionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubscriptionTag fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubscriptionTag,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubscriptionTag:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubscriptionTag: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubstanceCategory fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubstanceCategory,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubstanceCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubstanceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSubstanceStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSubstanceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSubstanceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSubstanceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSupplydeliveryStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSupplydeliveryStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSupplydeliveryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSupplydeliveryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSupplydeliveryType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSupplydeliveryType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSupplydeliveryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSupplydeliveryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSupplyrequestKind fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSupplyrequestKind,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSupplyrequestKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSupplyrequestKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSupplyrequestReason fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSupplyrequestReason,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSupplyrequestReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSupplyrequestReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSupplyrequestStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemSupplyrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemSupplyrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSupplyrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSurface fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSurface);
    if (!result.success) {
      console.error("Validation failed for CodesystemSurface:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSurface: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemSynthesisType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemSynthesisType);
    if (!result.success) {
      console.error("Validation failed for CodesystemSynthesisType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemSynthesisType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTaskCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTaskCode);
    if (!result.success) {
      console.error("Validation failed for CodesystemTaskCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTaskCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTaskIntent fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTaskIntent);
    if (!result.success) {
      console.error("Validation failed for CodesystemTaskIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTaskIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTaskStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTaskStatus);
    if (!result.success) {
      console.error("Validation failed for CodesystemTaskStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTaskStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTeeth fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTeeth);
    if (!result.success) {
      console.error("Validation failed for CodesystemTeeth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTeeth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTestscriptOperationCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemTestscriptOperationCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemTestscriptOperationCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTestscriptOperationCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTestscriptProfileDestinationTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemTestscriptProfileDestinationTypes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemTestscriptProfileDestinationTypes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTestscriptProfileDestinationTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTestscriptProfileOriginTypes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemTestscriptProfileOriginTypes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemTestscriptProfileOriginTypes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTestscriptProfileOriginTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTldc fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTldc);
    if (!result.success) {
      console.error("Validation failed for CodesystemTldc:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTldc: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTooth fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTooth);
    if (!result.success) {
      console.error("Validation failed for CodesystemTooth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTooth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTransactionMode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemTransactionMode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemTransactionMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTransactionMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTriggerType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemTriggerType);
    if (!result.success) {
      console.error("Validation failed for CodesystemTriggerType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTriggerType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemTypeDerivationRule fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemTypeDerivationRule,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemTypeDerivationRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemTypeDerivationRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemUdiEntryType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemUdiEntryType);
    if (!result.success) {
      console.error("Validation failed for CodesystemUdiEntryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemUdiEntryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemUdi fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemUdi);
    if (!result.success) {
      console.error("Validation failed for CodesystemUdi:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemUdi: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemUnknownContentCode fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemUnknownContentCode,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemUnknownContentCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemUnknownContentCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemUsageContextType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemUsageContextType,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemUsageContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemUsageContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVariableType fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemVariableType);
    if (!result.success) {
      console.error("Validation failed for CodesystemVariableType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVariableType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVariantState fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemVariantState);
    if (!result.success) {
      console.error("Validation failed for CodesystemVariantState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVariantState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultCanPushUpdates fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultCanPushUpdates,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultCanPushUpdates:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultCanPushUpdates: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultCommunicationMethod fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultCommunicationMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultCommunicationMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultCommunicationMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultFailureAction fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultFailureAction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultFailureAction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultFailureAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultNeed fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultNeed,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemVerificationresultNeed:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultNeed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultPrimarySourceType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultPrimarySourceType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultPrimarySourceType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultPrimarySourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultPushTypeAvailable fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultPushTypeAvailable,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultPushTypeAvailable:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultPushTypeAvailable: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultValidationProcess fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultValidationProcess,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultValidationProcess:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultValidationProcess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultValidationStatus fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultValidationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultValidationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultValidationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVerificationresultValidationType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVerificationresultValidationType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemVerificationresultValidationType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVerificationresultValidationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVersioningPolicy fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVersioningPolicy,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemVersioningPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVersioningPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVisionBaseCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemVisionBaseCodes,
    );
    if (!result.success) {
      console.error("Validation failed for CodesystemVisionBaseCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVisionBaseCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVisionEyeCodes fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemVisionEyeCodes);
    if (!result.success) {
      console.error("Validation failed for CodesystemVisionEyeCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVisionEyeCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemVisionProduct fixture", () => {
    const result = createCodeSystemSchema().safeParse(CodesystemVisionProduct);
    if (!result.success) {
      console.error("Validation failed for CodesystemVisionProduct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemVisionProduct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodesystemW3cProvenanceActivityType fixture", () => {
    const result = createCodeSystemSchema().safeParse(
      CodesystemW3cProvenanceActivityType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CodesystemW3cProvenanceActivityType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodesystemW3cProvenanceActivityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
