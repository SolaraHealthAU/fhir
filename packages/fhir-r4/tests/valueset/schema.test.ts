import { createValueSetSchema } from "../../src";
import {
  ValuesetFhirVersion,
  ValuesetAbstractTypes,
  ValuesetAccountStatus,
  ValuesetAccountType,
  ValuesetActionCardinalityBehavior,
  ValuesetActionConditionKind,
  ValuesetActionGroupingBehavior,
  ValuesetActionParticipantRole,
  ValuesetActionParticipantType,
  ValuesetActionPrecheckBehavior,
  ValuesetActionRelationshipType,
  ValuesetActionRequiredBehavior,
  ValuesetActionSelectionBehavior,
  ValuesetActionType,
  ValuesetActivityDefinitionCategory,
  ValuesetAdditionalInstructionCodes,
  ValuesetAdditionalmaterials,
  ValuesetAddressType,
  ValuesetAddressUse,
  ValuesetAdjudicationError,
  ValuesetAdjudicationReason,
  ValuesetAdjudication,
  ValuesetAdministrationMethodCodes,
  ValuesetAdministrativeGender,
  ValuesetAdverseEventActuality,
  ValuesetAdverseEventCategory,
  ValuesetAdverseEventCausalityAssess,
  ValuesetAdverseEventCausalityMethod,
  ValuesetAdverseEventOutcome,
  ValuesetAdverseEventSeriousness,
  ValuesetAdverseEventSeverity,
  ValuesetAdverseEventType,
  ValuesetAgeUnits,
  ValuesetAllDistanceUnits,
  ValuesetAllLanguages,
  ValuesetAllTimeUnits,
  ValuesetAllTypes,
  ValuesetAllelename,
  ValuesetAllergIntolSubstanceExpRisk,
  ValuesetAllergyIntoleranceCategory,
  ValuesetAllergyIntoleranceCriticality,
  ValuesetAllergyIntoleranceType,
  ValuesetAllergyintoleranceClinical,
  ValuesetAllergyintoleranceCode,
  ValuesetAllergyintoleranceVerification,
  ValuesetAnimalGenderstatus,
  ValuesetAnimalSpecies,
  ValuesetAppointmentCancellationReason,
  ValuesetAppointmentstatus,
  ValuesetApproachSiteCodes,
  ValuesetAssertDirectionCodes,
  ValuesetAssertOperatorCodes,
  ValuesetAssertResponseCodeTypes,
  ValuesetAssetAvailability,
  ValuesetAuditEntityType,
  ValuesetAuditEventAction,
  ValuesetAuditEventOutcome,
  ValuesetAuditEventSubType,
  ValuesetAuditEventType,
  ValuesetAuditSourceType,
  ValuesetBasicResourceType,
  ValuesetBenefitNetwork,
  ValuesetBenefitTerm,
  ValuesetBenefitType,
  ValuesetBenefitUnit,
  ValuesetBindingStrength,
  ValuesetBodySite,
  ValuesetBodysiteLaterality,
  ValuesetBodystructureCode,
  ValuesetBodystructureRelativeLocation,
  ValuesetBundleType,
  ValuesetC80Facilitycodes,
  ValuesetC80PracticeCodes,
  ValuesetCapabilityStatementKind,
  ValuesetCarePlanActivityKind,
  ValuesetCarePlanActivityOutcome,
  ValuesetCarePlanActivityStatus,
  ValuesetCarePlanCategory,
  ValuesetCarePlanIntent,
  ValuesetCareTeamCategory,
  ValuesetCareTeamStatus,
  ValuesetCatalogtype,
  ValuesetCdshooksIndicator,
  ValuesetCertaintySubcomponentRating,
  ValuesetCertaintySubcomponentType,
  ValuesetChargeitemBillingcodes,
  ValuesetChargeitemStatus,
  ValuesetChoiceListOrientation,
  ValuesetChromosomeHuman,
  ValuesetClaimCareteamrole,
  ValuesetClaimException,
  ValuesetClaimInformationcategory,
  ValuesetClaimModifiers,
  ValuesetClaimSubtype,
  ValuesetClaimType,
  ValuesetClaimUse,
  ValuesetClinicalFindings,
  ValuesetClinicalimpressionPrognosis,
  ValuesetClinicalimpressionStatus,
  ValuesetClinvar,
  ValuesetCodeSearchSupport,
  ValuesetCodesystemAltcodeKind,
  ValuesetCodesystemContentMode,
  ValuesetCodesystemHierarchyMeaning,
  ValuesetCommonTags,
  ValuesetCommunicationCategory,
  ValuesetCommunicationNotDoneReason,
  ValuesetCommunicationTopic,
  ValuesetCompartmentType,
  ValuesetCompositeMeasureScoring,
  ValuesetCompositionAltcodeKind,
  ValuesetCompositionAttestationMode,
  ValuesetCompositionStatus,
  ValuesetConceptMapEquivalence,
  ValuesetConceptPropertyType,
  ValuesetConceptSubsumptionOutcome,
  ValuesetConceptmapUnmappedMode,
  ValuesetConditionCategory,
  ValuesetConditionCause,
  ValuesetConditionClinical,
  ValuesetConditionCode,
  ValuesetConditionOutcome,
  ValuesetConditionPredecessor,
  ValuesetConditionSeverity,
  ValuesetConditionStageType,
  ValuesetConditionStage,
  ValuesetConditionState,
  ValuesetConditionVerStatus,
  ValuesetConditionalDeleteStatus,
  ValuesetConditionalReadStatus,
  ValuesetConformanceExpectation,
  ValuesetConsentAction,
  ValuesetConsentCategory,
  ValuesetConsentContentClass,
  ValuesetConsentContentCode,
  ValuesetConsentDataMeaning,
  ValuesetConsentPerformer,
  ValuesetConsentPolicy,
  ValuesetConsentProvisionType,
  ValuesetConsentScope,
  ValuesetConsentStateCodes,
  ValuesetConsistencyType,
  ValuesetConstraintSeverity,
  ValuesetContactPointSystem,
  ValuesetContactPointUse,
  ValuesetContactentityType,
  ValuesetContainerCap,
  ValuesetContainerMaterial,
  ValuesetContractAction,
  ValuesetContractActionstatus,
  ValuesetContractActorrole,
  ValuesetContractAssetcontext,
  ValuesetContractAssetscope,
  ValuesetContractAssetsubtype,
  ValuesetContractAssettype,
  ValuesetContractContentDerivative,
  ValuesetContractDataMeaning,
  ValuesetContractDecisionMode,
  ValuesetContractDefinitionSubtype,
  ValuesetContractDefinitionType,
  ValuesetContractExpirationType,
  ValuesetContractLegalstate,
  ValuesetContractPartyRole,
  ValuesetContractPublicationstatus,
  ValuesetContractScope,
  ValuesetContractSecurityCategory,
  ValuesetContractSecurityClassification,
  ValuesetContractSecurityControl,
  ValuesetContractSignerType,
  ValuesetContractStatus,
  ValuesetContractSubtype,
  ValuesetContractTermSubtype,
  ValuesetContractTermType,
  ValuesetContractType,
  ValuesetContributorType,
  ValuesetCopyNumberEvent,
  ValuesetCosmic,
  ValuesetCoverageClass,
  ValuesetCoverageCopayType,
  ValuesetCoverageFinancialException,
  ValuesetCoverageSelfpay,
  ValuesetCoverageType,
  ValuesetCoverageeligibilityresponseExAuthSupport,
  ValuesetCptAll,
  ValuesetCurrencies,
  ValuesetDataAbsentReason,
  ValuesetDataTypes,
  ValuesetDataelementSdcobjectclass,
  ValuesetDataelementSdcobjectclassproperty,
  ValuesetDaysOfWeek,
  ValuesetDbsnp,
  ValuesetDefinedTypes,
  ValuesetDefinitionResourceTypes,
  ValuesetDefinitionStatus,
  ValuesetDefinitionTopic,
  ValuesetDefinitionUse,
  ValuesetDesignationUse,
  ValuesetDetectedissueCategory,
  ValuesetDetectedissueMitigationAction,
  ValuesetDetectedissueSeverity,
  ValuesetDeviceAction,
  ValuesetDeviceComponentProperty,
  ValuesetDeviceDefinitionStatus,
  ValuesetDeviceKind,
  ValuesetDeviceNametype,
  ValuesetDeviceSafety,
  ValuesetDeviceStatementStatus,
  ValuesetDeviceStatusReason,
  ValuesetDeviceStatus,
  ValuesetDeviceType,
  ValuesetDevicemetricType,
  ValuesetDiagnosisRole,
  ValuesetDiagnosticBasedOnSnomed,
  ValuesetDiagnosticReportStatus,
  ValuesetDiagnosticServiceSections,
  ValuesetDicm405Mediatype,
  ValuesetDietType,
  ValuesetDiscriminatorType,
  ValuesetDistanceUnits,
  ValuesetDocSectionCodes,
  ValuesetDocTypecodes,
  ValuesetDocumentClasscodes,
  ValuesetDocumentMode,
  ValuesetDocumentReferenceStatus,
  ValuesetDocumentRelationshipType,
  ValuesetDoseRateType,
  ValuesetDurationUnits,
  ValuesetEffectEstimateType,
  ValuesetEligibilityrequestPurpose,
  ValuesetEligibilityresponsePurpose,
  ValuesetEncounterAdmitSource,
  ValuesetEncounterDiet,
  ValuesetEncounterDischargeDisposition,
  ValuesetEncounterLocationStatus,
  ValuesetEncounterParticipantType,
  ValuesetEncounterReason,
  ValuesetEncounterSpecialArrangements,
  ValuesetEncounterSpecialCourtesy,
  ValuesetEncounterStatus,
  ValuesetEncounterType,
  ValuesetEndpointConnectionType,
  ValuesetEndpointPayloadType,
  ValuesetEndpointStatus,
  ValuesetEnsembl,
  ValuesetEnteralRoute,
  ValuesetEntformulaAdditive,
  ValuesetEntformulaType,
  ValuesetEpisodeOfCareStatus,
  ValuesetEpisodeofcareType,
  ValuesetEventCapabilityMode,
  ValuesetEventOrRequestResourceTypes,
  ValuesetEventResourceTypes,
  ValuesetEventStatus,
  ValuesetEventTiming,
  ValuesetEvidenceQuality,
  ValuesetEvidenceVariantState,
  ValuesetExBenefitcategory,
  ValuesetExDiagnosisOnAdmission,
  ValuesetExDiagnosisrelatedgroup,
  ValuesetExDiagnosistype,
  ValuesetExOnsettype,
  ValuesetExPayeeResourceType,
  ValuesetExPaymenttype,
  ValuesetExProcedureType,
  ValuesetExProgramCode,
  ValuesetExRevenueCenter,
  ValuesetExampleExpansion,
  ValuesetExampleFilter,
  ValuesetExampleHierarchical,
  ValuesetExampleInactive,
  ValuesetExampleIntensional,
  ValuesetExampleYesnodontknow,
  ValuesetExample,
  ValuesetExamplescenarioActorType,
  ValuesetExpansionParameterSource,
  ValuesetExpansionProcessingRule,
  ValuesetExplanationofbenefitStatus,
  ValuesetExposureState,
  ValuesetExpressionLanguage,
  ValuesetExtensionContextType,
  ValuesetFeedingDevice,
  ValuesetFilterOperator,
  ValuesetFinancialTaskcode,
  ValuesetFinancialTaskinputtype,
  ValuesetFlagCategory,
  ValuesetFlagCode,
  ValuesetFlagPriority,
  ValuesetFlagStatus,
  ValuesetFmConditions,
  ValuesetFmItemtype,
  ValuesetFmStatus,
  ValuesetFocalSubject,
  ValuesetFoodType,
  ValuesetFormatcodes,
  ValuesetForms,
  ValuesetFundsreserve,
  ValuesetGenderIdentity,
  ValuesetGenenames,
  ValuesetGoalAcceptanceStatus,
  ValuesetGoalAchievement,
  ValuesetGoalCategory,
  ValuesetGoalPriority,
  ValuesetGoalRelationshipType,
  ValuesetGoalStartEvent,
  ValuesetGoalStatusReason,
  ValuesetGoalStatus,
  ValuesetGraphCompartmentRule,
  ValuesetGraphCompartmentUse,
  ValuesetGroupMeasure,
  ValuesetGroupType,
  ValuesetGuidanceResponseStatus,
  ValuesetGuidePageGeneration,
  ValuesetGuideParameterCode,
  ValuesetHandlingCondition,
  ValuesetHistoryAbsentReason,
  ValuesetHistoryStatus,
  ValuesetHl7WorkGroup,
  ValuesetHttpOperations,
  ValuesetHttpVerb,
  ValuesetIcd10Procedures,
  ValuesetIcd10,
  ValuesetIdentifierType,
  ValuesetIdentifierUse,
  ValuesetIdentityAssurancelevel,
  ValuesetImagingstudyStatus,
  ValuesetImmunizationEvaluationDoseStatusReason,
  ValuesetImmunizationEvaluationDoseStatus,
  ValuesetImmunizationEvaluationStatus,
  ValuesetImmunizationEvaluationTargetDisease,
  ValuesetImmunizationFunction,
  ValuesetImmunizationFundingSource,
  ValuesetImmunizationOrigin,
  ValuesetImmunizationProgramEligibility,
  ValuesetImmunizationReason,
  ValuesetImmunizationRecommendationDateCriterion,
  ValuesetImmunizationRecommendationReason,
  ValuesetImmunizationRecommendationStatus,
  ValuesetImmunizationRecommendationTargetDisease,
  ValuesetImmunizationRoute,
  ValuesetImmunizationSite,
  ValuesetImmunizationStatusReason,
  ValuesetImmunizationStatus,
  ValuesetImmunizationSubpotentReason,
  ValuesetImmunizationTargetDisease,
  ValuesetImplantstatus,
  ValuesetInstanceAvailability,
  ValuesetInsuranceplanApplicability,
  ValuesetInsuranceplanType,
  ValuesetIntervention,
  ValuesetInvestigationSets,
  ValuesetInvoicePricecomponenttype,
  ValuesetInvoiceStatus,
  ValuesetIso316612,
  ValuesetIso316613,
  ValuesetIso31661N,
  ValuesetIssueSeverity,
  ValuesetIssueType,
  ValuesetItemType,
  ValuesetJurisdiction,
  ValuesetKnowledgeResourceTypes,
  ValuesetLanguagePreferenceType,
  ValuesetLdlcholesterolCodes,
  ValuesetLibraryType,
  ValuesetLinkType,
  ValuesetLinkageType,
  ValuesetListEmptyReason,
  ValuesetListExampleCodes,
  ValuesetListItemFlag,
  ValuesetListMode,
  ValuesetListOrder,
  ValuesetListStatus,
  ValuesetLocationMode,
  ValuesetLocationPhysicalType,
  ValuesetLocationStatus,
  ValuesetManifestationOrSymptom,
  ValuesetMapContextType,
  ValuesetMapGroupTypeMode,
  ValuesetMapInputMode,
  ValuesetMapModelMode,
  ValuesetMapSourceListMode,
  ValuesetMapTargetListMode,
  ValuesetMapTransform,
  ValuesetMaritalStatus,
  ValuesetMatchGrade,
  ValuesetMeasureDataUsage,
  ValuesetMeasureImprovementNotation,
  ValuesetMeasurePopulation,
  ValuesetMeasureReportStatus,
  ValuesetMeasureReportType,
  ValuesetMeasureScoring,
  ValuesetMeasureType,
  ValuesetMedAdminPerformFunction,
  ValuesetMediaModality,
  ValuesetMediaType,
  ValuesetMediaView,
  ValuesetMedicationAdminCategory,
  ValuesetMedicationAdminStatus,
  ValuesetMedicationAsNeededReason,
  ValuesetMedicationCodes,
  ValuesetMedicationFormCodes,
  ValuesetMedicationStatementCategory,
  ValuesetMedicationStatementStatus,
  ValuesetMedicationStatus,
  ValuesetMedicationdispenseCategory,
  ValuesetMedicationdispensePerformerFunction,
  ValuesetMedicationdispenseStatusReason,
  ValuesetMedicationdispenseStatus,
  ValuesetMedicationknowledgeCharacteristic,
  ValuesetMedicationknowledgePackageType,
  ValuesetMedicationknowledgeStatus,
  ValuesetMedicationrequestCategory,
  ValuesetMedicationrequestCourseOfTherapy,
  ValuesetMedicationrequestIntent,
  ValuesetMedicationrequestStatusReason,
  ValuesetMedicationrequestStatus,
  ValuesetMessageEvents,
  ValuesetMessageReasonEncounter,
  ValuesetMessageSignificanceCategory,
  ValuesetMessageTransport,
  ValuesetMessageheaderResponseRequest,
  ValuesetMetricCalibrationState,
  ValuesetMetricCalibrationType,
  ValuesetMetricCategory,
  ValuesetMetricColor,
  ValuesetMetricOperationalStatus,
  ValuesetMimetypes,
  ValuesetMissingToothReason,
  ValuesetModifiedFoodtype,
  ValuesetNameAssemblyOrder,
  ValuesetNamePartQualifier,
  ValuesetNameUse,
  ValuesetNameV3Representation,
  ValuesetNamingsystemIdentifierType,
  ValuesetNamingsystemType,
  ValuesetNarrativeStatus,
  ValuesetNetworkType,
  ValuesetNhinPurposeofuse,
  ValuesetNoteType,
  ValuesetNutrientCode,
  ValuesetObjectLifecycleEvents,
  ValuesetObjectRole,
  ValuesetObservationCategory,
  ValuesetObservationCodes,
  ValuesetObservationInterpretation,
  ValuesetObservationMethods,
  ValuesetObservationRangeCategory,
  ValuesetObservationStatistics,
  ValuesetObservationStatus,
  ValuesetObservationVitalsignresult,
  ValuesetOperationKind,
  ValuesetOperationOutcome,
  ValuesetOperationParameterUse,
  ValuesetOralProsthodonticMaterial,
  ValuesetOrganizationRole,
  ValuesetOrganizationType,
  ValuesetOrientationType,
  ValuesetParameterGroup,
  ValuesetParentRelationshipCodes,
  ValuesetParticipantRole,
  ValuesetParticipantrequired,
  ValuesetParticipationRoleType,
  ValuesetParticipationstatus,
  ValuesetPatientContactrelationship,
  ValuesetPayeetype,
  ValuesetPaymentAdjustmentReason,
  ValuesetPaymentStatus,
  ValuesetPaymentType,
  ValuesetPerformerFunction,
  ValuesetPerformerRole,
  ValuesetPermittedDataType,
  ValuesetPlanDefinitionType,
  ValuesetPostalAddressUse,
  ValuesetPractitionerRole,
  ValuesetPractitionerSpecialty,
  ValuesetPrecisionEstimateType,
  ValuesetPreparePatientPriorSpecimenCollection,
  ValuesetProbabilityDistributionType,
  ValuesetProcedureCategory,
  ValuesetProcedureCode,
  ValuesetProcedureFollowup,
  ValuesetProcedureNotPerformedReason,
  ValuesetProcedureOutcome,
  ValuesetProcedureProgressStatusCodes,
  ValuesetProcedureReason,
  ValuesetProcessPriority,
  ValuesetProductCategory,
  ValuesetProductStatus,
  ValuesetProductStorageScale,
  ValuesetProgram,
  ValuesetPropertyRepresentation,
  ValuesetProvenanceActivityType,
  ValuesetProvenanceAgentRole,
  ValuesetProvenanceAgentType,
  ValuesetProvenanceEntityRole,
  ValuesetProvenanceHistoryAgentType,
  ValuesetProvenanceHistoryRecordActivity,
  ValuesetProviderQualification,
  ValuesetProviderTaxonomy,
  ValuesetPublicationStatus,
  ValuesetQualityType,
  ValuesetQuantityComparator,
  ValuesetQuestionMaxOccurs,
  ValuesetQuestionnaireAnswersStatus,
  ValuesetQuestionnaireAnswers,
  ValuesetQuestionnaireCategory,
  ValuesetQuestionnaireDisplayCategory,
  ValuesetQuestionnaireEnableBehavior,
  ValuesetQuestionnaireEnableOperator,
  ValuesetQuestionnaireItemControl,
  ValuesetQuestionnaireQuestions,
  ValuesetQuestionnaireUsageMode,
  ValuesetQuestionnaireresponseMode,
  ValuesetReactionEventCertainty,
  ValuesetReactionEventSeverity,
  ValuesetReasonMedicationGivenCodes,
  ValuesetReasonMedicationNotGivenCodes,
  ValuesetReasonMedicationStatusCodes,
  ValuesetRecommendationStrength,
  ValuesetRefSequences,
  ValuesetReferenceHandlingPolicy,
  ValuesetReferenceVersionRules,
  ValuesetReferencerangeAppliesto,
  ValuesetReferencerangeMeaning,
  ValuesetRejectionCriteria,
  ValuesetRelatedArtifactType,
  ValuesetRelatedClaimRelationship,
  ValuesetRelatedpersonRelationshiptype,
  ValuesetRelationType,
  ValuesetRelationship,
  ValuesetRemittanceOutcome,
  ValuesetReportActionResultCodes,
  ValuesetReportCodes,
  ValuesetReportParticipantType,
  ValuesetReportResultCodes,
  ValuesetReportStatusCodes,
  ValuesetRepositoryType,
  ValuesetRequestIntent,
  ValuesetRequestPriority,
  ValuesetRequestResourceTypes,
  ValuesetRequestStatus,
  ValuesetResearchElementType,
  ValuesetResearchStudyObjectiveType,
  ValuesetResearchStudyPhase,
  ValuesetResearchStudyPrimPurpType,
  ValuesetResearchStudyReasonStopped,
  ValuesetResearchStudyStatus,
  ValuesetResearchSubjectStatus,
  ValuesetResourceAggregationMode,
  ValuesetResourceSecurityCategory,
  ValuesetResourceSlicingRules,
  ValuesetResourceStatus,
  ValuesetResourceTypeLink,
  ValuesetResourceTypes,
  ValuesetResourceValidationMode,
  ValuesetResponseCode,
  ValuesetRestfulCapabilityMode,
  ValuesetRestfulSecurityService,
  ValuesetRiskEstimateType,
  ValuesetRiskProbability,
  ValuesetRouteCodes,
  ValuesetSearchComparator,
  ValuesetSearchEntryMode,
  ValuesetSearchModifierCode,
  ValuesetSearchParamType,
  ValuesetSearchXpathUsage,
  ValuesetSecondaryFinding,
  ValuesetSecurityLabels,
  ValuesetSecurityRoleType,
  ValuesetSequenceQualityMethod,
  ValuesetSequenceQualityStandardsequence,
  ValuesetSequenceReferenceseq,
  ValuesetSequenceSpecies,
  ValuesetSequenceType,
  ValuesetSequenceontology,
  ValuesetSeriesPerformerFunction,
  ValuesetServiceCategory,
  ValuesetServiceModifiers,
  ValuesetServicePharmacy,
  ValuesetServicePlace,
  ValuesetServiceProduct,
  ValuesetServiceProvisionConditions,
  ValuesetServiceReferralMethod,
  ValuesetServiceType,
  ValuesetServiceUscls,
  ValuesetServicerequestCategory,
  ValuesetServicerequestOrderdetail,
  ValuesetSiblingRelationshipCodes,
  ValuesetSignatureType,
  ValuesetSlotstatus,
  ValuesetSmartCapabilities,
  ValuesetSortDirection,
  ValuesetSpdxLicense,
  ValuesetSpecialValues,
  ValuesetSpecimenCollectionMethod,
  ValuesetSpecimenCollectionPriority,
  ValuesetSpecimenCollection,
  ValuesetSpecimenContainedPreference,
  ValuesetSpecimenContainerType,
  ValuesetSpecimenProcessingProcedure,
  ValuesetSpecimenStatus,
  ValuesetStandardsStatus,
  ValuesetStrandType,
  ValuesetStructureDefinitionKind,
  ValuesetStudyType,
  ValuesetSubjectType,
  ValuesetSubscriberRelationship,
  ValuesetSubscriptionChannelType,
  ValuesetSubscriptionStatus,
  ValuesetSubscriptionTag,
  ValuesetSubstanceCategory,
  ValuesetSubstanceCode,
  ValuesetSubstanceStatus,
  ValuesetSupplementType,
  ValuesetSupplyItem,
  ValuesetSupplydeliveryStatus,
  ValuesetSupplydeliveryType,
  ValuesetSupplyrequestKind,
  ValuesetSupplyrequestReason,
  ValuesetSupplyrequestStatus,
  ValuesetSurface,
  ValuesetSynthesisType,
  ValuesetSystemRestfulInteraction,
  ValuesetTaskCode,
  ValuesetTaskIntent,
  ValuesetTaskStatus,
  ValuesetTeeth,
  ValuesetTemplateStatusCode,
  ValuesetTestscriptOperationCodes,
  ValuesetTestscriptProfileDestinationTypes,
  ValuesetTestscriptProfileOriginTypes,
  ValuesetTextureCode,
  ValuesetTimezones,
  ValuesetTimingAbbreviation,
  ValuesetTooth,
  ValuesetTransactionMode,
  ValuesetTriggerType,
  ValuesetTypeDerivationRule,
  ValuesetTypeRestfulInteraction,
  ValuesetUcumBodylength,
  ValuesetUcumBodytemp,
  ValuesetUcumBodyweight,
  ValuesetUcumUnits,
  ValuesetUcumVitalsCommon,
  ValuesetUdiEntryType,
  ValuesetUdi,
  ValuesetUnitsOfTime,
  ValuesetUnknownContentCode,
  ValuesetUsageContextType,
  ValuesetUseContext,
  ValuesetVaccineCode,
  ValuesetVariableType,
  ValuesetVariantState,
  ValuesetVariants,
  ValuesetVerificationresultCanPushUpdates,
  ValuesetVerificationresultCommunicationMethod,
  ValuesetVerificationresultFailureAction,
  ValuesetVerificationresultNeed,
  ValuesetVerificationresultPrimarySourceType,
  ValuesetVerificationresultPushTypeAvailable,
  ValuesetVerificationresultStatus,
  ValuesetVerificationresultValidationProcess,
  ValuesetVerificationresultValidationStatus,
  ValuesetVerificationresultValidationType,
  ValuesetVersioningPolicy,
  ValuesetVisionBaseCodes,
  ValuesetVisionEyeCodes,
  ValuesetVisionProduct,
  ValuesetWrittenLanguage,
} from "./fixture";
import { z } from "zod/v4";

describe("Valueset Group Schema Validation", () => {
  it("should validate ValuesetFhirVersion fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFhirVersion);
    if (!result.success) {
      console.error("Validation failed for ValuesetFhirVersion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFhirVersion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAbstractTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAbstractTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetAbstractTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAbstractTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAccountStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAccountStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetAccountStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAccountStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAccountType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAccountType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAccountType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAccountType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionCardinalityBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionCardinalityBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionCardinalityBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionCardinalityBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionConditionKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionConditionKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionConditionKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionConditionKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionGroupingBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionGroupingBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionGroupingBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionGroupingBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionParticipantRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionParticipantRole,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionParticipantRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionParticipantRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionParticipantType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionPrecheckBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionPrecheckBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionPrecheckBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionPrecheckBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionRelationshipType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionRequiredBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionRequiredBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionRequiredBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionRequiredBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionSelectionBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionSelectionBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionSelectionBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionSelectionBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetActionType);
    if (!result.success) {
      console.error("Validation failed for ValuesetActionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActivityDefinitionCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActivityDefinitionCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetActivityDefinitionCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActivityDefinitionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdditionalInstructionCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdditionalInstructionCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdditionalInstructionCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdditionalInstructionCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdditionalmaterials fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdditionalmaterials,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdditionalmaterials:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdditionalmaterials: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAddressType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAddressType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAddressType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAddressType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAddressUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAddressUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetAddressUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAddressUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudicationError fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudicationError);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudicationError:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudicationError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudicationReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudicationReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudicationReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudicationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudication fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudication);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudication:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudication: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdministrationMethodCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdministrationMethodCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdministrationMethodCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdministrationMethodCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdministrativeGender fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdministrativeGender,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdministrativeGender:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdministrativeGender: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventActuality fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventActuality,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventActuality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventActuality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCausalityAssess fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCausalityAssess,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdverseEventCausalityAssess:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCausalityAssess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCausalityMethod fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCausalityMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdverseEventCausalityMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCausalityMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventSeriousness fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventSeriousness,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventSeriousness:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventSeriousness: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdverseEventType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAgeUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAgeUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetAgeUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAgeUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllDistanceUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllDistanceUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllDistanceUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllDistanceUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllLanguages fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllLanguages);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllLanguages:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllLanguages: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllTimeUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllTimeUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllTimeUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllTimeUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllelename fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllelename);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllelename:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllelename: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergIntolSubstanceExpRisk fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergIntolSubstanceExpRisk,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAllergIntolSubstanceExpRisk:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergIntolSubstanceExpRisk: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyIntoleranceCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyIntoleranceCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAllergyIntoleranceCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyIntoleranceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyIntoleranceCriticality fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyIntoleranceCriticality,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAllergyIntoleranceCriticality:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyIntoleranceCriticality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyIntoleranceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyIntoleranceType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAllergyIntoleranceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyIntoleranceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyintoleranceClinical fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyintoleranceClinical,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAllergyintoleranceClinical:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyintoleranceClinical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyintoleranceCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyintoleranceCode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAllergyintoleranceCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyintoleranceCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllergyintoleranceVerification fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAllergyintoleranceVerification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAllergyintoleranceVerification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllergyintoleranceVerification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAnimalGenderstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAnimalGenderstatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetAnimalGenderstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAnimalGenderstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAnimalSpecies fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAnimalSpecies);
    if (!result.success) {
      console.error("Validation failed for ValuesetAnimalSpecies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAnimalSpecies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAppointmentCancellationReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAppointmentCancellationReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAppointmentCancellationReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAppointmentCancellationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAppointmentstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAppointmentstatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetAppointmentstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAppointmentstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetApproachSiteCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetApproachSiteCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetApproachSiteCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetApproachSiteCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAssertDirectionCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAssertDirectionCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAssertDirectionCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAssertDirectionCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAssertOperatorCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAssertOperatorCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAssertOperatorCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAssertOperatorCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAssertResponseCodeTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAssertResponseCodeTypes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAssertResponseCodeTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAssertResponseCodeTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAssetAvailability fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAssetAvailability);
    if (!result.success) {
      console.error("Validation failed for ValuesetAssetAvailability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAssetAvailability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditEntityType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditEntityType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditEntityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditEntityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditEventAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditEventAction);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditEventAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditEventAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditEventOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditEventOutcome);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditEventOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditEventOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditEventSubType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditEventSubType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditEventSubType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditEventSubType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditEventType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditEventType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditEventType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditEventType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAuditSourceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetAuditSourceType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAuditSourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAuditSourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBasicResourceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBasicResourceType);
    if (!result.success) {
      console.error("Validation failed for ValuesetBasicResourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBasicResourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBenefitNetwork fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBenefitNetwork);
    if (!result.success) {
      console.error("Validation failed for ValuesetBenefitNetwork:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBenefitNetwork: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBenefitTerm fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBenefitTerm);
    if (!result.success) {
      console.error("Validation failed for ValuesetBenefitTerm:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBenefitTerm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBenefitType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBenefitType);
    if (!result.success) {
      console.error("Validation failed for ValuesetBenefitType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBenefitType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBenefitUnit fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBenefitUnit);
    if (!result.success) {
      console.error("Validation failed for ValuesetBenefitUnit:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBenefitUnit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBindingStrength fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBindingStrength);
    if (!result.success) {
      console.error("Validation failed for ValuesetBindingStrength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBindingStrength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBodySite fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBodySite);
    if (!result.success) {
      console.error("Validation failed for ValuesetBodySite:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBodySite: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBodysiteLaterality fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBodysiteLaterality);
    if (!result.success) {
      console.error("Validation failed for ValuesetBodysiteLaterality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBodysiteLaterality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBodystructureCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBodystructureCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetBodystructureCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBodystructureCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBodystructureRelativeLocation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetBodystructureRelativeLocation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetBodystructureRelativeLocation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBodystructureRelativeLocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetBundleType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetBundleType);
    if (!result.success) {
      console.error("Validation failed for ValuesetBundleType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetBundleType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetC80Facilitycodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetC80Facilitycodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetC80Facilitycodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetC80Facilitycodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetC80PracticeCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetC80PracticeCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetC80PracticeCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetC80PracticeCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCapabilityStatementKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCapabilityStatementKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCapabilityStatementKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCapabilityStatementKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCarePlanActivityKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCarePlanActivityKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCarePlanActivityKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCarePlanActivityKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCarePlanActivityOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCarePlanActivityOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCarePlanActivityOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCarePlanActivityOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCarePlanActivityStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCarePlanActivityStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCarePlanActivityStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCarePlanActivityStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCarePlanCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCarePlanCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetCarePlanCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCarePlanCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCarePlanIntent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCarePlanIntent);
    if (!result.success) {
      console.error("Validation failed for ValuesetCarePlanIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCarePlanIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCareTeamCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCareTeamCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetCareTeamCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCareTeamCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCareTeamStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCareTeamStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetCareTeamStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCareTeamStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCatalogtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCatalogtype);
    if (!result.success) {
      console.error("Validation failed for ValuesetCatalogtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCatalogtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCdshooksIndicator fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCdshooksIndicator);
    if (!result.success) {
      console.error("Validation failed for ValuesetCdshooksIndicator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCdshooksIndicator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCertaintySubcomponentRating fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCertaintySubcomponentRating,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCertaintySubcomponentRating:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCertaintySubcomponentRating: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCertaintySubcomponentType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCertaintySubcomponentType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCertaintySubcomponentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCertaintySubcomponentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetChargeitemBillingcodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetChargeitemBillingcodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetChargeitemBillingcodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetChargeitemBillingcodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetChargeitemStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetChargeitemStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetChargeitemStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetChargeitemStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetChoiceListOrientation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetChoiceListOrientation,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetChoiceListOrientation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetChoiceListOrientation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetChromosomeHuman fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetChromosomeHuman);
    if (!result.success) {
      console.error("Validation failed for ValuesetChromosomeHuman:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetChromosomeHuman: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimCareteamrole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimCareteamrole);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimCareteamrole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimCareteamrole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimException fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimException);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimException:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimException: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimInformationcategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetClaimInformationcategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimInformationcategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimInformationcategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimModifiers fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimModifiers);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimModifiers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimModifiers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimSubtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimSubtype);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimType);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClaimUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClaimUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetClaimUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClaimUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClinicalFindings fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClinicalFindings);
    if (!result.success) {
      console.error("Validation failed for ValuesetClinicalFindings:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClinicalFindings: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClinicalimpressionPrognosis fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetClinicalimpressionPrognosis,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetClinicalimpressionPrognosis:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClinicalimpressionPrognosis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClinicalimpressionStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetClinicalimpressionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetClinicalimpressionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClinicalimpressionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetClinvar fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetClinvar);
    if (!result.success) {
      console.error("Validation failed for ValuesetClinvar:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetClinvar: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCodeSearchSupport fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCodeSearchSupport);
    if (!result.success) {
      console.error("Validation failed for ValuesetCodeSearchSupport:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCodeSearchSupport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCodesystemAltcodeKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCodesystemAltcodeKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCodesystemAltcodeKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCodesystemAltcodeKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCodesystemContentMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCodesystemContentMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCodesystemContentMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCodesystemContentMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCodesystemHierarchyMeaning fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCodesystemHierarchyMeaning,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCodesystemHierarchyMeaning:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCodesystemHierarchyMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCommonTags fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCommonTags);
    if (!result.success) {
      console.error("Validation failed for ValuesetCommonTags:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCommonTags: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCommunicationCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCommunicationCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCommunicationCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCommunicationCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCommunicationNotDoneReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCommunicationNotDoneReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCommunicationNotDoneReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCommunicationNotDoneReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCommunicationTopic fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCommunicationTopic);
    if (!result.success) {
      console.error("Validation failed for ValuesetCommunicationTopic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCommunicationTopic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCompartmentType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCompartmentType);
    if (!result.success) {
      console.error("Validation failed for ValuesetCompartmentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCompartmentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCompositeMeasureScoring fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCompositeMeasureScoring,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCompositeMeasureScoring:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCompositeMeasureScoring: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCompositionAltcodeKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCompositionAltcodeKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetCompositionAltcodeKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCompositionAltcodeKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCompositionAttestationMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCompositionAttestationMode,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCompositionAttestationMode:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCompositionAttestationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCompositionStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCompositionStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetCompositionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCompositionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConceptMapEquivalence fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConceptMapEquivalence,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConceptMapEquivalence:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConceptMapEquivalence: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConceptPropertyType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConceptPropertyType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConceptPropertyType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConceptPropertyType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConceptSubsumptionOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConceptSubsumptionOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConceptSubsumptionOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConceptSubsumptionOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConceptmapUnmappedMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConceptmapUnmappedMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConceptmapUnmappedMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConceptmapUnmappedMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionCause fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionCause);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionCause:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionCause: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionClinical fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionClinical);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionClinical:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionClinical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionOutcome);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionPredecessor fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConditionPredecessor,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionPredecessor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionPredecessor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionSeverity);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionStageType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionStageType);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionStageType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionStageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionStage fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionStage);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionStage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionStage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionState fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionState);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionVerStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConditionVerStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionVerStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionVerStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionalDeleteStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConditionalDeleteStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionalDeleteStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionalDeleteStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConditionalReadStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConditionalReadStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConditionalReadStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConditionalReadStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConformanceExpectation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConformanceExpectation,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConformanceExpectation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConformanceExpectation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentAction);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentContentClass fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConsentContentClass,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentContentClass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentContentClass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentContentCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentContentCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentContentCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentContentCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentDataMeaning fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentDataMeaning);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentDataMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentDataMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentPerformer fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentPerformer);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentPerformer:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentPerformer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentPolicy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentPolicy);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentProvisionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetConsentProvisionType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentProvisionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentProvisionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentScope fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentScope);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentScope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentScope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsentStateCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsentStateCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsentStateCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsentStateCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConsistencyType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConsistencyType);
    if (!result.success) {
      console.error("Validation failed for ValuesetConsistencyType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConsistencyType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetConstraintSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetConstraintSeverity);
    if (!result.success) {
      console.error("Validation failed for ValuesetConstraintSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetConstraintSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContactPointSystem fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContactPointSystem);
    if (!result.success) {
      console.error("Validation failed for ValuesetContactPointSystem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContactPointSystem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContactPointUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContactPointUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetContactPointUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContactPointUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContactentityType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContactentityType);
    if (!result.success) {
      console.error("Validation failed for ValuesetContactentityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContactentityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContainerCap fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContainerCap);
    if (!result.success) {
      console.error("Validation failed for ValuesetContainerCap:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContainerCap: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContainerMaterial fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContainerMaterial);
    if (!result.success) {
      console.error("Validation failed for ValuesetContainerMaterial:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContainerMaterial: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractAction);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractActionstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractActionstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractActionstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractActionstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractActorrole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractActorrole);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractActorrole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractActorrole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractAssetcontext fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractAssetcontext,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractAssetcontext:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractAssetcontext: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractAssetscope fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractAssetscope);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractAssetscope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractAssetscope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractAssetsubtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractAssetsubtype,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractAssetsubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractAssetsubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractAssettype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractAssettype);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractAssettype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractAssettype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractContentDerivative fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractContentDerivative,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractContentDerivative:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractContentDerivative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractDataMeaning fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractDataMeaning,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractDataMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractDataMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractDecisionMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractDecisionMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractDecisionMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractDecisionMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractDefinitionSubtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractDefinitionSubtype,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractDefinitionSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractDefinitionSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractDefinitionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractDefinitionType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractDefinitionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractDefinitionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractExpirationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractExpirationType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractExpirationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractExpirationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractLegalstate fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractLegalstate);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractLegalstate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractLegalstate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractPartyRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractPartyRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractPartyRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractPartyRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractPublicationstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractPublicationstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractPublicationstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractPublicationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractScope fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractScope);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractScope:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractScope: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractSecurityCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractSecurityCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractSecurityCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractSecurityCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractSecurityClassification fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractSecurityClassification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetContractSecurityClassification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractSecurityClassification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractSecurityControl fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractSecurityControl,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractSecurityControl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractSecurityControl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractSignerType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractSignerType);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractSignerType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractSignerType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractSubtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractSubtype);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractTermSubtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetContractTermSubtype,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetContractTermSubtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractTermSubtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractTermType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractTermType);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractTermType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractTermType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContractType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContractType);
    if (!result.success) {
      console.error("Validation failed for ValuesetContractType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContractType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetContributorType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetContributorType);
    if (!result.success) {
      console.error("Validation failed for ValuesetContributorType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetContributorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCopyNumberEvent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCopyNumberEvent);
    if (!result.success) {
      console.error("Validation failed for ValuesetCopyNumberEvent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCopyNumberEvent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCosmic fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCosmic);
    if (!result.success) {
      console.error("Validation failed for ValuesetCosmic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCosmic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageClass fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCoverageClass);
    if (!result.success) {
      console.error("Validation failed for ValuesetCoverageClass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageClass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageCopayType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCoverageCopayType);
    if (!result.success) {
      console.error("Validation failed for ValuesetCoverageCopayType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageCopayType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageFinancialException fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCoverageFinancialException,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCoverageFinancialException:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageFinancialException: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageSelfpay fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCoverageSelfpay);
    if (!result.success) {
      console.error("Validation failed for ValuesetCoverageSelfpay:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageSelfpay: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCoverageType);
    if (!result.success) {
      console.error("Validation failed for ValuesetCoverageType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCoverageeligibilityresponseExAuthSupport fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetCoverageeligibilityresponseExAuthSupport,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetCoverageeligibilityresponseExAuthSupport:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCoverageeligibilityresponseExAuthSupport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCptAll fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCptAll);
    if (!result.success) {
      console.error("Validation failed for ValuesetCptAll:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCptAll: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetCurrencies fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetCurrencies);
    if (!result.success) {
      console.error("Validation failed for ValuesetCurrencies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetCurrencies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDataAbsentReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDataAbsentReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetDataAbsentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDataAbsentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDataTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDataTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetDataTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDataTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDataelementSdcobjectclass fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDataelementSdcobjectclass,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDataelementSdcobjectclass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDataelementSdcobjectclass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDataelementSdcobjectclassproperty fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDataelementSdcobjectclassproperty,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetDataelementSdcobjectclassproperty:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDataelementSdcobjectclassproperty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDaysOfWeek fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDaysOfWeek);
    if (!result.success) {
      console.error("Validation failed for ValuesetDaysOfWeek:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDaysOfWeek: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDbsnp fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDbsnp);
    if (!result.success) {
      console.error("Validation failed for ValuesetDbsnp:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDbsnp: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDefinedTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDefinedTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetDefinedTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDefinedTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDefinitionResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDefinitionResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDefinitionResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDefinitionResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDefinitionStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDefinitionStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetDefinitionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDefinitionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDefinitionTopic fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDefinitionTopic);
    if (!result.success) {
      console.error("Validation failed for ValuesetDefinitionTopic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDefinitionTopic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDefinitionUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDefinitionUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetDefinitionUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDefinitionUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDesignationUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDesignationUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetDesignationUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDesignationUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDetectedissueCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDetectedissueCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDetectedissueCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDetectedissueCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDetectedissueMitigationAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDetectedissueMitigationAction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetDetectedissueMitigationAction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDetectedissueMitigationAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDetectedissueSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDetectedissueSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDetectedissueSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDetectedissueSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceAction);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceAction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceComponentProperty fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDeviceComponentProperty,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceComponentProperty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceComponentProperty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceDefinitionStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDeviceDefinitionStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceDefinitionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceDefinitionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceKind);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceNametype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceNametype);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceNametype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceNametype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceSafety fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceSafety);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceSafety:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceSafety: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceStatementStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDeviceStatementStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceStatementStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceStatusReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceStatusReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDeviceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDeviceType);
    if (!result.success) {
      console.error("Validation failed for ValuesetDeviceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDeviceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDevicemetricType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDevicemetricType);
    if (!result.success) {
      console.error("Validation failed for ValuesetDevicemetricType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDevicemetricType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDiagnosisRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDiagnosisRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetDiagnosisRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDiagnosisRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDiagnosticBasedOnSnomed fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDiagnosticBasedOnSnomed,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDiagnosticBasedOnSnomed:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDiagnosticBasedOnSnomed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDiagnosticReportStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDiagnosticReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDiagnosticReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDiagnosticReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDiagnosticServiceSections fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDiagnosticServiceSections,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDiagnosticServiceSections:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDiagnosticServiceSections: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDicm405Mediatype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDicm405Mediatype);
    if (!result.success) {
      console.error("Validation failed for ValuesetDicm405Mediatype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDicm405Mediatype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDietType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDietType);
    if (!result.success) {
      console.error("Validation failed for ValuesetDietType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDietType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDiscriminatorType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDiscriminatorType);
    if (!result.success) {
      console.error("Validation failed for ValuesetDiscriminatorType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDiscriminatorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDistanceUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDistanceUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetDistanceUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDistanceUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocSectionCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDocSectionCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetDocSectionCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocSectionCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocTypecodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDocTypecodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetDocTypecodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocTypecodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocumentClasscodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDocumentClasscodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetDocumentClasscodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocumentClasscodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocumentMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDocumentMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetDocumentMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocumentMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocumentReferenceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDocumentReferenceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDocumentReferenceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocumentReferenceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDocumentRelationshipType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetDocumentRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetDocumentRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDocumentRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDoseRateType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDoseRateType);
    if (!result.success) {
      console.error("Validation failed for ValuesetDoseRateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDoseRateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetDurationUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetDurationUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetDurationUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetDurationUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEffectEstimateType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEffectEstimateType);
    if (!result.success) {
      console.error("Validation failed for ValuesetEffectEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEffectEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEligibilityrequestPurpose fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEligibilityrequestPurpose,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEligibilityrequestPurpose:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEligibilityrequestPurpose: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEligibilityresponsePurpose fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEligibilityresponsePurpose,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetEligibilityresponsePurpose:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEligibilityresponsePurpose: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterAdmitSource fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterAdmitSource,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterAdmitSource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterAdmitSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterDiet fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEncounterDiet);
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterDiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterDiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterDischargeDisposition fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterDischargeDisposition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetEncounterDischargeDisposition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterDischargeDisposition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterLocationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterLocationStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterParticipantType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEncounterReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterSpecialArrangements fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterSpecialArrangements,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetEncounterSpecialArrangements:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterSpecialArrangements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterSpecialCourtesy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEncounterSpecialCourtesy,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterSpecialCourtesy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterSpecialCourtesy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEncounterStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEncounterType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEncounterType);
    if (!result.success) {
      console.error("Validation failed for ValuesetEncounterType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEncounterType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEndpointConnectionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEndpointConnectionType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEndpointConnectionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEndpointConnectionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEndpointPayloadType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEndpointPayloadType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEndpointPayloadType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEndpointPayloadType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEndpointStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEndpointStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetEndpointStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEndpointStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEnsembl fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEnsembl);
    if (!result.success) {
      console.error("Validation failed for ValuesetEnsembl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEnsembl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEnteralRoute fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEnteralRoute);
    if (!result.success) {
      console.error("Validation failed for ValuesetEnteralRoute:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEnteralRoute: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEntformulaAdditive fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEntformulaAdditive);
    if (!result.success) {
      console.error("Validation failed for ValuesetEntformulaAdditive:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEntformulaAdditive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEntformulaType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEntformulaType);
    if (!result.success) {
      console.error("Validation failed for ValuesetEntformulaType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEntformulaType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEpisodeOfCareStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEpisodeOfCareStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEpisodeOfCareStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEpisodeOfCareStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEpisodeofcareType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEpisodeofcareType);
    if (!result.success) {
      console.error("Validation failed for ValuesetEpisodeofcareType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEpisodeofcareType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEventCapabilityMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEventCapabilityMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEventCapabilityMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEventCapabilityMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEventOrRequestResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEventOrRequestResourceTypes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetEventOrRequestResourceTypes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEventOrRequestResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEventResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEventResourceTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetEventResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEventResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEventStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEventStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetEventStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEventStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEventTiming fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEventTiming);
    if (!result.success) {
      console.error("Validation failed for ValuesetEventTiming:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEventTiming: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEvidenceQuality fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetEvidenceQuality);
    if (!result.success) {
      console.error("Validation failed for ValuesetEvidenceQuality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEvidenceQuality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetEvidenceVariantState fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetEvidenceVariantState,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetEvidenceVariantState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetEvidenceVariantState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExBenefitcategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExBenefitcategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetExBenefitcategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExBenefitcategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExDiagnosisOnAdmission fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExDiagnosisOnAdmission,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExDiagnosisOnAdmission:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExDiagnosisOnAdmission: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExDiagnosisrelatedgroup fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExDiagnosisrelatedgroup,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExDiagnosisrelatedgroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExDiagnosisrelatedgroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExDiagnosistype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExDiagnosistype);
    if (!result.success) {
      console.error("Validation failed for ValuesetExDiagnosistype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExDiagnosistype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExOnsettype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExOnsettype);
    if (!result.success) {
      console.error("Validation failed for ValuesetExOnsettype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExOnsettype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExPayeeResourceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExPayeeResourceType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExPayeeResourceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExPayeeResourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExPaymenttype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExPaymenttype);
    if (!result.success) {
      console.error("Validation failed for ValuesetExPaymenttype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExPaymenttype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExProcedureType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExProcedureType);
    if (!result.success) {
      console.error("Validation failed for ValuesetExProcedureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExProcedureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExProgramCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExProgramCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetExProgramCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExProgramCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExRevenueCenter fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExRevenueCenter);
    if (!result.success) {
      console.error("Validation failed for ValuesetExRevenueCenter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExRevenueCenter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleExpansion fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExampleExpansion);
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleExpansion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleExpansion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleFilter fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExampleFilter);
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleFilter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleFilter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleHierarchical fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExampleHierarchical,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleHierarchical:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleHierarchical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleInactive fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExampleInactive);
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleInactive:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleInactive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleIntensional fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExampleIntensional);
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleIntensional:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleIntensional: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExampleYesnodontknow fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExampleYesnodontknow,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExampleYesnodontknow:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExampleYesnodontknow: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExample fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExample);
    if (!result.success) {
      console.error("Validation failed for ValuesetExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExamplescenarioActorType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExamplescenarioActorType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExamplescenarioActorType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExamplescenarioActorType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExpansionParameterSource fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExpansionParameterSource,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExpansionParameterSource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExpansionParameterSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExpansionProcessingRule fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExpansionProcessingRule,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExpansionProcessingRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExpansionProcessingRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExplanationofbenefitStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExplanationofbenefitStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetExplanationofbenefitStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExplanationofbenefitStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExposureState fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExposureState);
    if (!result.success) {
      console.error("Validation failed for ValuesetExposureState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExposureState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExpressionLanguage fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetExpressionLanguage);
    if (!result.success) {
      console.error("Validation failed for ValuesetExpressionLanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExpressionLanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetExtensionContextType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetExtensionContextType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetExtensionContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetExtensionContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFeedingDevice fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFeedingDevice);
    if (!result.success) {
      console.error("Validation failed for ValuesetFeedingDevice:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFeedingDevice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFilterOperator fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFilterOperator);
    if (!result.success) {
      console.error("Validation failed for ValuesetFilterOperator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFilterOperator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFinancialTaskcode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFinancialTaskcode);
    if (!result.success) {
      console.error("Validation failed for ValuesetFinancialTaskcode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFinancialTaskcode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFinancialTaskinputtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetFinancialTaskinputtype,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetFinancialTaskinputtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFinancialTaskinputtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFlagCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFlagCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetFlagCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFlagCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFlagCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFlagCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetFlagCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFlagCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFlagPriority fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFlagPriority);
    if (!result.success) {
      console.error("Validation failed for ValuesetFlagPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFlagPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFlagStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFlagStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetFlagStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFlagStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFmConditions fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFmConditions);
    if (!result.success) {
      console.error("Validation failed for ValuesetFmConditions:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFmConditions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFmItemtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFmItemtype);
    if (!result.success) {
      console.error("Validation failed for ValuesetFmItemtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFmItemtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFmStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFmStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetFmStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFmStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFocalSubject fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFocalSubject);
    if (!result.success) {
      console.error("Validation failed for ValuesetFocalSubject:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFocalSubject: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFoodType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFoodType);
    if (!result.success) {
      console.error("Validation failed for ValuesetFoodType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFoodType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFormatcodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFormatcodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetFormatcodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFormatcodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetForms fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetForms);
    if (!result.success) {
      console.error("Validation failed for ValuesetForms:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetForms: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetFundsreserve fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetFundsreserve);
    if (!result.success) {
      console.error("Validation failed for ValuesetFundsreserve:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFundsreserve: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGenderIdentity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGenderIdentity);
    if (!result.success) {
      console.error("Validation failed for ValuesetGenderIdentity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGenderIdentity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGenenames fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGenenames);
    if (!result.success) {
      console.error("Validation failed for ValuesetGenenames:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGenenames: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalAcceptanceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGoalAcceptanceStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalAcceptanceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalAcceptanceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalAchievement fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalAchievement);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalAchievement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalAchievement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalPriority fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalPriority);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalRelationshipType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGoalRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalStartEvent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalStartEvent);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalStartEvent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalStartEvent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalStatusReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalStatusReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGoalStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGoalStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetGoalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGoalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGraphCompartmentRule fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGraphCompartmentRule,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGraphCompartmentRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGraphCompartmentRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGraphCompartmentUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGraphCompartmentUse,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGraphCompartmentUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGraphCompartmentUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGroupMeasure fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGroupMeasure);
    if (!result.success) {
      console.error("Validation failed for ValuesetGroupMeasure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGroupMeasure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGroupType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGroupType);
    if (!result.success) {
      console.error("Validation failed for ValuesetGroupType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGroupType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGuidanceResponseStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGuidanceResponseStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGuidanceResponseStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGuidanceResponseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGuidePageGeneration fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetGuidePageGeneration,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetGuidePageGeneration:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGuidePageGeneration: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetGuideParameterCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetGuideParameterCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetGuideParameterCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetGuideParameterCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHandlingCondition fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetHandlingCondition);
    if (!result.success) {
      console.error("Validation failed for ValuesetHandlingCondition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHandlingCondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHistoryAbsentReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetHistoryAbsentReason,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetHistoryAbsentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHistoryAbsentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHistoryStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetHistoryStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetHistoryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHistoryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHl7WorkGroup fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetHl7WorkGroup);
    if (!result.success) {
      console.error("Validation failed for ValuesetHl7WorkGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHl7WorkGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHttpOperations fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetHttpOperations);
    if (!result.success) {
      console.error("Validation failed for ValuesetHttpOperations:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHttpOperations: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetHttpVerb fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetHttpVerb);
    if (!result.success) {
      console.error("Validation failed for ValuesetHttpVerb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetHttpVerb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIcd10Procedures fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIcd10Procedures);
    if (!result.success) {
      console.error("Validation failed for ValuesetIcd10Procedures:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIcd10Procedures: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIcd10 fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIcd10);
    if (!result.success) {
      console.error("Validation failed for ValuesetIcd10:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIcd10: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIdentifierType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIdentifierType);
    if (!result.success) {
      console.error("Validation failed for ValuesetIdentifierType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIdentifierType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIdentifierUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIdentifierUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetIdentifierUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIdentifierUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIdentityAssurancelevel fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetIdentityAssurancelevel,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetIdentityAssurancelevel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIdentityAssurancelevel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImagingstudyStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImagingstudyStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetImagingstudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImagingstudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationEvaluationDoseStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationEvaluationDoseStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationEvaluationDoseStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationEvaluationDoseStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationEvaluationDoseStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationEvaluationDoseStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationEvaluationDoseStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationEvaluationDoseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationEvaluationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationEvaluationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationEvaluationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationEvaluationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationEvaluationTargetDisease fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationEvaluationTargetDisease,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationEvaluationTargetDisease:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationEvaluationTargetDisease: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationFunction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationFunction,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationFunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationFundingSource fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationFundingSource,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationFundingSource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationFundingSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationOrigin fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImmunizationOrigin);
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationOrigin:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationOrigin: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationProgramEligibility fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationProgramEligibility,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationProgramEligibility:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationProgramEligibility: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImmunizationReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationRecommendationDateCriterion fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationRecommendationDateCriterion,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationRecommendationDateCriterion:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationRecommendationDateCriterion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationRecommendationReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationRecommendationReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationRecommendationReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationRecommendationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationRecommendationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationRecommendationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationRecommendationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationRecommendationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationRecommendationTargetDisease fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationRecommendationTargetDisease,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationRecommendationTargetDisease:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationRecommendationTargetDisease: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationRoute fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImmunizationRoute);
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationRoute:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationRoute: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationSite fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImmunizationSite);
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationSite:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationSite: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationStatusReason,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationStatusReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImmunizationStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationSubpotentReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationSubpotentReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetImmunizationSubpotentReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationSubpotentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImmunizationTargetDisease fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetImmunizationTargetDisease,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetImmunizationTargetDisease:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImmunizationTargetDisease: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetImplantstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetImplantstatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetImplantstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetImplantstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInstanceAvailability fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetInstanceAvailability,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetInstanceAvailability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInstanceAvailability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInsuranceplanApplicability fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetInsuranceplanApplicability,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetInsuranceplanApplicability:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInsuranceplanApplicability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInsuranceplanType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetInsuranceplanType);
    if (!result.success) {
      console.error("Validation failed for ValuesetInsuranceplanType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInsuranceplanType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIntervention fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIntervention);
    if (!result.success) {
      console.error("Validation failed for ValuesetIntervention:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIntervention: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInvestigationSets fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetInvestigationSets);
    if (!result.success) {
      console.error("Validation failed for ValuesetInvestigationSets:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInvestigationSets: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInvoicePricecomponenttype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetInvoicePricecomponenttype,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetInvoicePricecomponenttype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInvoicePricecomponenttype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetInvoiceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetInvoiceStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetInvoiceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetInvoiceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIso316612 fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIso316612);
    if (!result.success) {
      console.error("Validation failed for ValuesetIso316612:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIso316612: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIso316613 fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIso316613);
    if (!result.success) {
      console.error("Validation failed for ValuesetIso316613:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIso316613: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIso31661N fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIso31661N);
    if (!result.success) {
      console.error("Validation failed for ValuesetIso31661N:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIso31661N: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIssueSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIssueSeverity);
    if (!result.success) {
      console.error("Validation failed for ValuesetIssueSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIssueSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetIssueType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetIssueType);
    if (!result.success) {
      console.error("Validation failed for ValuesetIssueType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetIssueType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetItemType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetItemType);
    if (!result.success) {
      console.error("Validation failed for ValuesetItemType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetItemType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetJurisdiction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetJurisdiction);
    if (!result.success) {
      console.error("Validation failed for ValuesetJurisdiction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetJurisdiction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetKnowledgeResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetKnowledgeResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetKnowledgeResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetKnowledgeResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLanguagePreferenceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetLanguagePreferenceType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetLanguagePreferenceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLanguagePreferenceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLdlcholesterolCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetLdlcholesterolCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetLdlcholesterolCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLdlcholesterolCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLibraryType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetLibraryType);
    if (!result.success) {
      console.error("Validation failed for ValuesetLibraryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLibraryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLinkType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetLinkType);
    if (!result.success) {
      console.error("Validation failed for ValuesetLinkType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLinkType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLinkageType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetLinkageType);
    if (!result.success) {
      console.error("Validation failed for ValuesetLinkageType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLinkageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListEmptyReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListEmptyReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetListEmptyReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListEmptyReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListExampleCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListExampleCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetListExampleCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListExampleCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListItemFlag fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListItemFlag);
    if (!result.success) {
      console.error("Validation failed for ValuesetListItemFlag:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListItemFlag: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListOrder fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListOrder);
    if (!result.success) {
      console.error("Validation failed for ValuesetListOrder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetListStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetListStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetListStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetListStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLocationMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetLocationMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetLocationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLocationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLocationPhysicalType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetLocationPhysicalType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetLocationPhysicalType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLocationPhysicalType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetLocationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetLocationStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetLocationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetLocationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetManifestationOrSymptom fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetManifestationOrSymptom,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetManifestationOrSymptom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetManifestationOrSymptom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapContextType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapContextType);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapGroupTypeMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapGroupTypeMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapGroupTypeMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapGroupTypeMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapInputMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapInputMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapInputMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapInputMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapModelMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapModelMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapModelMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapModelMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapSourceListMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapSourceListMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapSourceListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapSourceListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapTargetListMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapTargetListMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapTargetListMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapTargetListMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMapTransform fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMapTransform);
    if (!result.success) {
      console.error("Validation failed for ValuesetMapTransform:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMapTransform: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMaritalStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMaritalStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetMaritalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMaritalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMatchGrade fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMatchGrade);
    if (!result.success) {
      console.error("Validation failed for ValuesetMatchGrade:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMatchGrade: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureDataUsage fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMeasureDataUsage);
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasureDataUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureDataUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureImprovementNotation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMeasureImprovementNotation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMeasureImprovementNotation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureImprovementNotation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasurePopulation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMeasurePopulation);
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasurePopulation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasurePopulation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureReportStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMeasureReportStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasureReportStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureReportStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureReportType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMeasureReportType);
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasureReportType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureReportType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureScoring fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMeasureScoring);
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasureScoring:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureScoring: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMeasureType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMeasureType);
    if (!result.success) {
      console.error("Validation failed for ValuesetMeasureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMeasureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedAdminPerformFunction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedAdminPerformFunction,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedAdminPerformFunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedAdminPerformFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMediaModality fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMediaModality);
    if (!result.success) {
      console.error("Validation failed for ValuesetMediaModality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMediaModality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMediaType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMediaType);
    if (!result.success) {
      console.error("Validation failed for ValuesetMediaType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMediaType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMediaView fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMediaView);
    if (!result.success) {
      console.error("Validation failed for ValuesetMediaView:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMediaView: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationAdminCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationAdminCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationAdminCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationAdminCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationAdminStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationAdminStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationAdminStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationAdminStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationAsNeededReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationAsNeededReason,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationAsNeededReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationAsNeededReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMedicationCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationFormCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationFormCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationFormCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationFormCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationStatementCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationStatementCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationStatementCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationStatementCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationStatementStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationStatementStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationStatementStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationStatementStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMedicationStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationdispenseCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationdispenseCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationdispenseCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationdispenseCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationdispensePerformerFunction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationdispensePerformerFunction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationdispensePerformerFunction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationdispensePerformerFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationdispenseStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationdispenseStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationdispenseStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationdispenseStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationdispenseStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationdispenseStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationdispenseStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationdispenseStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationknowledgeCharacteristic fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationknowledgeCharacteristic,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationknowledgeCharacteristic:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationknowledgeCharacteristic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationknowledgePackageType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationknowledgePackageType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationknowledgePackageType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationknowledgePackageType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationknowledgeStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationknowledgeStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationknowledgeStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationknowledgeStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationrequestCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationrequestCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationrequestCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationrequestCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationrequestCourseOfTherapy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationrequestCourseOfTherapy,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationrequestCourseOfTherapy:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationrequestCourseOfTherapy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationrequestIntent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationrequestIntent,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationrequestIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationrequestIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationrequestStatusReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationrequestStatusReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMedicationrequestStatusReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationrequestStatusReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMedicationrequestStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMedicationrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMedicationrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMedicationrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMessageEvents fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMessageEvents);
    if (!result.success) {
      console.error("Validation failed for ValuesetMessageEvents:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMessageEvents: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMessageReasonEncounter fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMessageReasonEncounter,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMessageReasonEncounter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMessageReasonEncounter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMessageSignificanceCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMessageSignificanceCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMessageSignificanceCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMessageSignificanceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMessageTransport fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMessageTransport);
    if (!result.success) {
      console.error("Validation failed for ValuesetMessageTransport:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMessageTransport: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMessageheaderResponseRequest fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMessageheaderResponseRequest,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetMessageheaderResponseRequest:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMessageheaderResponseRequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMetricCalibrationState fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMetricCalibrationState,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMetricCalibrationState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMetricCalibrationState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMetricCalibrationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMetricCalibrationType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMetricCalibrationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMetricCalibrationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMetricCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMetricCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetMetricCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMetricCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMetricColor fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMetricColor);
    if (!result.success) {
      console.error("Validation failed for ValuesetMetricColor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMetricColor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMetricOperationalStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetMetricOperationalStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetMetricOperationalStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMetricOperationalStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMimetypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMimetypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetMimetypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMimetypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetMissingToothReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetMissingToothReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetMissingToothReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetMissingToothReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetModifiedFoodtype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetModifiedFoodtype);
    if (!result.success) {
      console.error("Validation failed for ValuesetModifiedFoodtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetModifiedFoodtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNameAssemblyOrder fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNameAssemblyOrder);
    if (!result.success) {
      console.error("Validation failed for ValuesetNameAssemblyOrder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNameAssemblyOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNamePartQualifier fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNamePartQualifier);
    if (!result.success) {
      console.error("Validation failed for ValuesetNamePartQualifier:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNamePartQualifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNameUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNameUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetNameUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNameUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNameV3Representation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetNameV3Representation,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetNameV3Representation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNameV3Representation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNamingsystemIdentifierType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetNamingsystemIdentifierType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetNamingsystemIdentifierType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNamingsystemIdentifierType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNamingsystemType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNamingsystemType);
    if (!result.success) {
      console.error("Validation failed for ValuesetNamingsystemType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNamingsystemType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNarrativeStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNarrativeStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetNarrativeStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNarrativeStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNetworkType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNetworkType);
    if (!result.success) {
      console.error("Validation failed for ValuesetNetworkType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNetworkType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNhinPurposeofuse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNhinPurposeofuse);
    if (!result.success) {
      console.error("Validation failed for ValuesetNhinPurposeofuse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNhinPurposeofuse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNoteType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNoteType);
    if (!result.success) {
      console.error("Validation failed for ValuesetNoteType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNoteType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetNutrientCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetNutrientCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetNutrientCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetNutrientCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObjectLifecycleEvents fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObjectLifecycleEvents,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetObjectLifecycleEvents:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObjectLifecycleEvents: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObjectRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetObjectRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetObjectRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObjectRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObservationCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetObservationCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationInterpretation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObservationInterpretation,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationInterpretation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationInterpretation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationMethods fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetObservationMethods);
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationMethods:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationMethods: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationRangeCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObservationRangeCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationRangeCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationRangeCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationStatistics fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObservationStatistics,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationStatistics:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationStatistics: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetObservationStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetObservationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetObservationVitalsignresult fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetObservationVitalsignresult,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetObservationVitalsignresult:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetObservationVitalsignresult: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOperationKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetOperationKind);
    if (!result.success) {
      console.error("Validation failed for ValuesetOperationKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOperationKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOperationOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetOperationOutcome);
    if (!result.success) {
      console.error("Validation failed for ValuesetOperationOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOperationOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOperationParameterUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetOperationParameterUse,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetOperationParameterUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOperationParameterUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOralProsthodonticMaterial fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetOralProsthodonticMaterial,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetOralProsthodonticMaterial:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOralProsthodonticMaterial: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOrganizationRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetOrganizationRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetOrganizationRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOrganizationRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOrganizationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetOrganizationType);
    if (!result.success) {
      console.error("Validation failed for ValuesetOrganizationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOrganizationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetOrientationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetOrientationType);
    if (!result.success) {
      console.error("Validation failed for ValuesetOrientationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetOrientationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParameterGroup fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetParameterGroup);
    if (!result.success) {
      console.error("Validation failed for ValuesetParameterGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParameterGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParentRelationshipCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetParentRelationshipCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetParentRelationshipCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParentRelationshipCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParticipantRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetParticipantRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetParticipantRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParticipantRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParticipantrequired fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetParticipantrequired,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetParticipantrequired:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParticipantrequired: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParticipationRoleType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetParticipationRoleType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetParticipationRoleType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParticipationRoleType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetParticipationstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetParticipationstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetParticipationstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetParticipationstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPatientContactrelationship fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPatientContactrelationship,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetPatientContactrelationship:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPatientContactrelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPayeetype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPayeetype);
    if (!result.success) {
      console.error("Validation failed for ValuesetPayeetype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPayeetype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPaymentAdjustmentReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPaymentAdjustmentReason,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetPaymentAdjustmentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPaymentAdjustmentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPaymentStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPaymentStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetPaymentStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPaymentStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPaymentType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPaymentType);
    if (!result.success) {
      console.error("Validation failed for ValuesetPaymentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPaymentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPerformerFunction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPerformerFunction);
    if (!result.success) {
      console.error("Validation failed for ValuesetPerformerFunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPerformerFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPerformerRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPerformerRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetPerformerRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPerformerRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPermittedDataType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPermittedDataType);
    if (!result.success) {
      console.error("Validation failed for ValuesetPermittedDataType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPermittedDataType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPlanDefinitionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPlanDefinitionType);
    if (!result.success) {
      console.error("Validation failed for ValuesetPlanDefinitionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPlanDefinitionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPostalAddressUse fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPostalAddressUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetPostalAddressUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPostalAddressUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPractitionerRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPractitionerRole);
    if (!result.success) {
      console.error("Validation failed for ValuesetPractitionerRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPractitionerRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPractitionerSpecialty fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPractitionerSpecialty,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetPractitionerSpecialty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPractitionerSpecialty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPrecisionEstimateType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPrecisionEstimateType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetPrecisionEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPrecisionEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPreparePatientPriorSpecimenCollection fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPreparePatientPriorSpecimenCollection,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetPreparePatientPriorSpecimenCollection:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPreparePatientPriorSpecimenCollection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProbabilityDistributionType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProbabilityDistributionType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetProbabilityDistributionType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProbabilityDistributionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcedureCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcedureCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcedureCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcedureCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureFollowup fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcedureFollowup);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcedureFollowup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureFollowup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureNotPerformedReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProcedureNotPerformedReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetProcedureNotPerformedReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureNotPerformedReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcedureOutcome);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcedureOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureProgressStatusCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProcedureProgressStatusCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetProcedureProgressStatusCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureProgressStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcedureReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcedureReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcedureReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcedureReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProcessPriority fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProcessPriority);
    if (!result.success) {
      console.error("Validation failed for ValuesetProcessPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProcessPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProductCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProductCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetProductCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProductCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProductStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProductStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetProductStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProductStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProductStorageScale fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProductStorageScale,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProductStorageScale:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProductStorageScale: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProgram fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProgram);
    if (!result.success) {
      console.error("Validation failed for ValuesetProgram:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProgram: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPropertyRepresentation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetPropertyRepresentation,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetPropertyRepresentation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPropertyRepresentation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceActivityType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceActivityType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProvenanceActivityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceActivityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceAgentRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceAgentRole,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProvenanceAgentRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceAgentRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceAgentType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceAgentType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProvenanceAgentType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceAgentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceEntityRole fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceEntityRole,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProvenanceEntityRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceEntityRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceHistoryAgentType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceHistoryAgentType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetProvenanceHistoryAgentType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceHistoryAgentType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProvenanceHistoryRecordActivity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProvenanceHistoryRecordActivity,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetProvenanceHistoryRecordActivity:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProvenanceHistoryRecordActivity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProviderQualification fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetProviderQualification,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetProviderQualification:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProviderQualification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetProviderTaxonomy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetProviderTaxonomy);
    if (!result.success) {
      console.error("Validation failed for ValuesetProviderTaxonomy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetProviderTaxonomy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetPublicationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetPublicationStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetPublicationStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetPublicationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQualityType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetQualityType);
    if (!result.success) {
      console.error("Validation failed for ValuesetQualityType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQualityType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuantityComparator fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetQuantityComparator);
    if (!result.success) {
      console.error("Validation failed for ValuesetQuantityComparator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuantityComparator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionMaxOccurs fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetQuestionMaxOccurs);
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionMaxOccurs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionMaxOccurs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireAnswersStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireAnswersStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetQuestionnaireAnswersStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireAnswersStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireAnswers fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireAnswers,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireAnswers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireAnswers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireDisplayCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireDisplayCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetQuestionnaireDisplayCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireDisplayCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireEnableBehavior fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireEnableBehavior,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetQuestionnaireEnableBehavior:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireEnableBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireEnableOperator fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireEnableOperator,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetQuestionnaireEnableOperator:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireEnableOperator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireItemControl fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireItemControl,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireItemControl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireItemControl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireQuestions fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireQuestions,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireQuestions:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireQuestions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireUsageMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireUsageMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireUsageMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireUsageMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetQuestionnaireresponseMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetQuestionnaireresponseMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetQuestionnaireresponseMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetQuestionnaireresponseMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReactionEventCertainty fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReactionEventCertainty,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReactionEventCertainty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReactionEventCertainty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReactionEventSeverity fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReactionEventSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReactionEventSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReactionEventSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReasonMedicationGivenCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReasonMedicationGivenCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetReasonMedicationGivenCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReasonMedicationGivenCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReasonMedicationNotGivenCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReasonMedicationNotGivenCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetReasonMedicationNotGivenCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReasonMedicationNotGivenCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReasonMedicationStatusCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReasonMedicationStatusCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetReasonMedicationStatusCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReasonMedicationStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRecommendationStrength fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRecommendationStrength,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRecommendationStrength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRecommendationStrength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRefSequences fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRefSequences);
    if (!result.success) {
      console.error("Validation failed for ValuesetRefSequences:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRefSequences: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReferenceHandlingPolicy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReferenceHandlingPolicy,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReferenceHandlingPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReferenceHandlingPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReferenceVersionRules fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReferenceVersionRules,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReferenceVersionRules:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReferenceVersionRules: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReferencerangeAppliesto fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReferencerangeAppliesto,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReferencerangeAppliesto:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReferencerangeAppliesto: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReferencerangeMeaning fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReferencerangeMeaning,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReferencerangeMeaning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReferencerangeMeaning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRejectionCriteria fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRejectionCriteria);
    if (!result.success) {
      console.error("Validation failed for ValuesetRejectionCriteria:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRejectionCriteria: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRelatedArtifactType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRelatedArtifactType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRelatedArtifactType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRelatedArtifactType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRelatedClaimRelationship fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRelatedClaimRelationship,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRelatedClaimRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRelatedClaimRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRelatedpersonRelationshiptype fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRelatedpersonRelationshiptype,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetRelatedpersonRelationshiptype:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRelatedpersonRelationshiptype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRelationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRelationType);
    if (!result.success) {
      console.error("Validation failed for ValuesetRelationType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRelationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRelationship fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRelationship);
    if (!result.success) {
      console.error("Validation failed for ValuesetRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRemittanceOutcome fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRemittanceOutcome);
    if (!result.success) {
      console.error("Validation failed for ValuesetRemittanceOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRemittanceOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReportActionResultCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReportActionResultCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReportActionResultCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReportActionResultCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReportCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetReportCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetReportCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReportCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReportParticipantType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetReportParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetReportParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReportParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReportResultCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetReportResultCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetReportResultCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReportResultCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetReportStatusCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetReportStatusCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetReportStatusCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetReportStatusCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRepositoryType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRepositoryType);
    if (!result.success) {
      console.error("Validation failed for ValuesetRepositoryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRepositoryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRequestIntent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRequestIntent);
    if (!result.success) {
      console.error("Validation failed for ValuesetRequestIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRequestIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRequestPriority fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRequestPriority);
    if (!result.success) {
      console.error("Validation failed for ValuesetRequestPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRequestPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRequestResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRequestResourceTypes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRequestResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRequestResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRequestStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRequestStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetRequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchElementType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchElementType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResearchElementType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchElementType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchStudyObjectiveType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchStudyObjectiveType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetResearchStudyObjectiveType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchStudyObjectiveType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchStudyPhase fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetResearchStudyPhase);
    if (!result.success) {
      console.error("Validation failed for ValuesetResearchStudyPhase:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchStudyPhase: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchStudyPrimPurpType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchStudyPrimPurpType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResearchStudyPrimPurpType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchStudyPrimPurpType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchStudyReasonStopped fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchStudyReasonStopped,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetResearchStudyReasonStopped:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchStudyReasonStopped: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchStudyStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchStudyStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResearchStudyStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchStudyStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResearchSubjectStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResearchSubjectStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResearchSubjectStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResearchSubjectStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceAggregationMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResourceAggregationMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceAggregationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceAggregationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceSecurityCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResourceSecurityCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceSecurityCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceSecurityCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceSlicingRules fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResourceSlicingRules,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceSlicingRules:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceSlicingRules: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetResourceStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceTypeLink fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetResourceTypeLink);
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceTypeLink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceTypeLink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetResourceTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResourceValidationMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetResourceValidationMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetResourceValidationMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResourceValidationMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetResponseCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetResponseCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetResponseCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetResponseCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRestfulCapabilityMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRestfulCapabilityMode,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRestfulCapabilityMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRestfulCapabilityMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRestfulSecurityService fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetRestfulSecurityService,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetRestfulSecurityService:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRestfulSecurityService: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRiskEstimateType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRiskEstimateType);
    if (!result.success) {
      console.error("Validation failed for ValuesetRiskEstimateType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRiskEstimateType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRiskProbability fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRiskProbability);
    if (!result.success) {
      console.error("Validation failed for ValuesetRiskProbability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRiskProbability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetRouteCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetRouteCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetRouteCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetRouteCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSearchComparator fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSearchComparator);
    if (!result.success) {
      console.error("Validation failed for ValuesetSearchComparator:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSearchComparator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSearchEntryMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSearchEntryMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetSearchEntryMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSearchEntryMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSearchModifierCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSearchModifierCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetSearchModifierCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSearchModifierCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSearchParamType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSearchParamType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSearchParamType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSearchParamType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSearchXpathUsage fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSearchXpathUsage);
    if (!result.success) {
      console.error("Validation failed for ValuesetSearchXpathUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSearchXpathUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSecondaryFinding fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSecondaryFinding);
    if (!result.success) {
      console.error("Validation failed for ValuesetSecondaryFinding:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSecondaryFinding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSecurityLabels fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSecurityLabels);
    if (!result.success) {
      console.error("Validation failed for ValuesetSecurityLabels:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSecurityLabels: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSecurityRoleType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSecurityRoleType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSecurityRoleType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSecurityRoleType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceQualityMethod fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSequenceQualityMethod,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSequenceQualityMethod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceQualityMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceQualityStandardsequence fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSequenceQualityStandardsequence,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetSequenceQualityStandardsequence:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceQualityStandardsequence: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceReferenceseq fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSequenceReferenceseq,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSequenceReferenceseq:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceReferenceseq: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceSpecies fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSequenceSpecies);
    if (!result.success) {
      console.error("Validation failed for ValuesetSequenceSpecies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceSpecies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSequenceType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSequenceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSequenceontology fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSequenceontology);
    if (!result.success) {
      console.error("Validation failed for ValuesetSequenceontology:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSequenceontology: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSeriesPerformerFunction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSeriesPerformerFunction,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSeriesPerformerFunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSeriesPerformerFunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServiceCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceModifiers fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServiceModifiers);
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceModifiers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceModifiers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServicePharmacy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServicePharmacy);
    if (!result.success) {
      console.error("Validation failed for ValuesetServicePharmacy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServicePharmacy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServicePlace fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServicePlace);
    if (!result.success) {
      console.error("Validation failed for ValuesetServicePlace:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServicePlace: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceProduct fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServiceProduct);
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceProduct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceProduct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceProvisionConditions fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetServiceProvisionConditions,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetServiceProvisionConditions:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceProvisionConditions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceReferralMethod fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetServiceReferralMethod,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceReferralMethod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceReferralMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServiceType);
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServiceUscls fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetServiceUscls);
    if (!result.success) {
      console.error("Validation failed for ValuesetServiceUscls:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServiceUscls: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServicerequestCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetServicerequestCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetServicerequestCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServicerequestCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetServicerequestOrderdetail fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetServicerequestOrderdetail,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetServicerequestOrderdetail:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetServicerequestOrderdetail: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSiblingRelationshipCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSiblingRelationshipCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSiblingRelationshipCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSiblingRelationshipCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSignatureType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSignatureType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSignatureType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSignatureType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSlotstatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSlotstatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetSlotstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSlotstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSmartCapabilities fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSmartCapabilities);
    if (!result.success) {
      console.error("Validation failed for ValuesetSmartCapabilities:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSmartCapabilities: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSortDirection fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSortDirection);
    if (!result.success) {
      console.error("Validation failed for ValuesetSortDirection:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSortDirection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpdxLicense fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSpdxLicense);
    if (!result.success) {
      console.error("Validation failed for ValuesetSpdxLicense:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpdxLicense: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecialValues fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSpecialValues);
    if (!result.success) {
      console.error("Validation failed for ValuesetSpecialValues:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecialValues: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenCollectionMethod fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSpecimenCollectionMethod,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSpecimenCollectionMethod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenCollectionMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenCollectionPriority fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSpecimenCollectionPriority,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetSpecimenCollectionPriority:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenCollectionPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenCollection fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSpecimenCollection);
    if (!result.success) {
      console.error("Validation failed for ValuesetSpecimenCollection:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenCollection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenContainedPreference fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSpecimenContainedPreference,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetSpecimenContainedPreference:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenContainedPreference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenContainerType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSpecimenContainerType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSpecimenContainerType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenContainerType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenProcessingProcedure fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSpecimenProcessingProcedure,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetSpecimenProcessingProcedure:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenProcessingProcedure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSpecimenStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSpecimenStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetSpecimenStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSpecimenStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetStandardsStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetStandardsStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetStandardsStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetStandardsStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetStrandType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetStrandType);
    if (!result.success) {
      console.error("Validation failed for ValuesetStrandType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetStrandType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetStructureDefinitionKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetStructureDefinitionKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetStructureDefinitionKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetStructureDefinitionKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetStudyType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetStudyType);
    if (!result.success) {
      console.error("Validation failed for ValuesetStudyType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetStudyType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubjectType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubjectType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubjectType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubjectType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubscriberRelationship fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSubscriberRelationship,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSubscriberRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubscriberRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubscriptionChannelType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSubscriptionChannelType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSubscriptionChannelType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubscriptionChannelType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubscriptionStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubscriptionStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubscriptionStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubscriptionStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubscriptionTag fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubscriptionTag);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubscriptionTag:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubscriptionTag: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubstanceCategory fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubstanceCategory);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubstanceCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubstanceCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubstanceCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubstanceCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubstanceCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubstanceCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSubstanceStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSubstanceStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetSubstanceStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSubstanceStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplementType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSupplementType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplementType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplementType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplyItem fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSupplyItem);
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplyItem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplyItem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplydeliveryStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSupplydeliveryStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplydeliveryStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplydeliveryStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplydeliveryType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSupplydeliveryType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplydeliveryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplydeliveryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplyrequestKind fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSupplyrequestKind);
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplyrequestKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplyrequestKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplyrequestReason fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSupplyrequestReason,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplyrequestReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplyrequestReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSupplyrequestStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSupplyrequestStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSupplyrequestStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSupplyrequestStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSurface fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSurface);
    if (!result.success) {
      console.error("Validation failed for ValuesetSurface:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSurface: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSynthesisType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetSynthesisType);
    if (!result.success) {
      console.error("Validation failed for ValuesetSynthesisType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSynthesisType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetSystemRestfulInteraction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetSystemRestfulInteraction,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetSystemRestfulInteraction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetSystemRestfulInteraction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTaskCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTaskCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetTaskCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTaskCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTaskIntent fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTaskIntent);
    if (!result.success) {
      console.error("Validation failed for ValuesetTaskIntent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTaskIntent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTaskStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTaskStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetTaskStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTaskStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTeeth fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTeeth);
    if (!result.success) {
      console.error("Validation failed for ValuesetTeeth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTeeth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTemplateStatusCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTemplateStatusCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetTemplateStatusCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTemplateStatusCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTestscriptOperationCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetTestscriptOperationCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetTestscriptOperationCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTestscriptOperationCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTestscriptProfileDestinationTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetTestscriptProfileDestinationTypes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetTestscriptProfileDestinationTypes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTestscriptProfileDestinationTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTestscriptProfileOriginTypes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetTestscriptProfileOriginTypes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetTestscriptProfileOriginTypes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTestscriptProfileOriginTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTextureCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTextureCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetTextureCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTextureCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTimezones fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTimezones);
    if (!result.success) {
      console.error("Validation failed for ValuesetTimezones:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTimezones: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTimingAbbreviation fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTimingAbbreviation);
    if (!result.success) {
      console.error("Validation failed for ValuesetTimingAbbreviation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTimingAbbreviation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTooth fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTooth);
    if (!result.success) {
      console.error("Validation failed for ValuesetTooth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTooth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTransactionMode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTransactionMode);
    if (!result.success) {
      console.error("Validation failed for ValuesetTransactionMode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTransactionMode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTriggerType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTriggerType);
    if (!result.success) {
      console.error("Validation failed for ValuesetTriggerType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTriggerType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTypeDerivationRule fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetTypeDerivationRule);
    if (!result.success) {
      console.error("Validation failed for ValuesetTypeDerivationRule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTypeDerivationRule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetTypeRestfulInteraction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetTypeRestfulInteraction,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetTypeRestfulInteraction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetTypeRestfulInteraction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUcumBodylength fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUcumBodylength);
    if (!result.success) {
      console.error("Validation failed for ValuesetUcumBodylength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUcumBodylength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUcumBodytemp fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUcumBodytemp);
    if (!result.success) {
      console.error("Validation failed for ValuesetUcumBodytemp:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUcumBodytemp: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUcumBodyweight fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUcumBodyweight);
    if (!result.success) {
      console.error("Validation failed for ValuesetUcumBodyweight:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUcumBodyweight: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUcumUnits fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUcumUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetUcumUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUcumUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUcumVitalsCommon fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUcumVitalsCommon);
    if (!result.success) {
      console.error("Validation failed for ValuesetUcumVitalsCommon:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUcumVitalsCommon: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUdiEntryType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUdiEntryType);
    if (!result.success) {
      console.error("Validation failed for ValuesetUdiEntryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUdiEntryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUdi fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUdi);
    if (!result.success) {
      console.error("Validation failed for ValuesetUdi:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUdi: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUnitsOfTime fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUnitsOfTime);
    if (!result.success) {
      console.error("Validation failed for ValuesetUnitsOfTime:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUnitsOfTime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUnknownContentCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUnknownContentCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetUnknownContentCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUnknownContentCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUsageContextType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUsageContextType);
    if (!result.success) {
      console.error("Validation failed for ValuesetUsageContextType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUsageContextType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetUseContext fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetUseContext);
    if (!result.success) {
      console.error("Validation failed for ValuesetUseContext:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetUseContext: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVaccineCode fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVaccineCode);
    if (!result.success) {
      console.error("Validation failed for ValuesetVaccineCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVaccineCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVariableType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVariableType);
    if (!result.success) {
      console.error("Validation failed for ValuesetVariableType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVariableType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVariantState fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVariantState);
    if (!result.success) {
      console.error("Validation failed for ValuesetVariantState:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVariantState: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVariants fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVariants);
    if (!result.success) {
      console.error("Validation failed for ValuesetVariants:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVariants: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultCanPushUpdates fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultCanPushUpdates,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultCanPushUpdates:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultCanPushUpdates: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultCommunicationMethod fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultCommunicationMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultCommunicationMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultCommunicationMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultFailureAction fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultFailureAction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultFailureAction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultFailureAction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultNeed fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultNeed,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetVerificationresultNeed:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultNeed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultPrimarySourceType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultPrimarySourceType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultPrimarySourceType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultPrimarySourceType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultPushTypeAvailable fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultPushTypeAvailable,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultPushTypeAvailable:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultPushTypeAvailable: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetVerificationresultStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultValidationProcess fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultValidationProcess,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultValidationProcess:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultValidationProcess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultValidationStatus fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultValidationStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultValidationStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultValidationStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVerificationresultValidationType fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetVerificationresultValidationType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetVerificationresultValidationType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVerificationresultValidationType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVersioningPolicy fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVersioningPolicy);
    if (!result.success) {
      console.error("Validation failed for ValuesetVersioningPolicy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVersioningPolicy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVisionBaseCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVisionBaseCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetVisionBaseCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVisionBaseCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVisionEyeCodes fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVisionEyeCodes);
    if (!result.success) {
      console.error("Validation failed for ValuesetVisionEyeCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVisionEyeCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetVisionProduct fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetVisionProduct);
    if (!result.success) {
      console.error("Validation failed for ValuesetVisionProduct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetVisionProduct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetWrittenLanguage fixture (ValueSet)", () => {
    const result = createValueSetSchema().safeParse(ValuesetWrittenLanguage);
    if (!result.success) {
      console.error("Validation failed for ValuesetWrittenLanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetWrittenLanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
