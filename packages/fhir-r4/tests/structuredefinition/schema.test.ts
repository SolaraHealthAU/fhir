import { createStructureDefinitionSchema } from "../../src";
import {
  ActualgroupProfile,
  AddressProfile,
  AgeProfile,
  AnnotationProfile,
  AppointmentresponseProfile,
  AttachmentProfile,
  BackboneelementProfile,
  Base64binaryProfile,
  BasicProfile,
  BinaryProfile,
  BodystructureProfile,
  BooleanProfile,
  CanonicalProfile,
  CdshooksguidanceresponseProfile,
  CdshooksrequestgroupProfile,
  CodeProfile,
  CodeableconceptProfile,
  CodingProfile,
  ContactdetailProfile,
  ContactpointProfile,
  ContributorProfile,
  CountProfile,
  CqllibraryProfile,
  DateProfile,
  DatetimeProfile,
  DecimalProfile,
  Definition,
  DiagnosticreportGeneticsProfile,
  DistanceProfile,
  DomainresourceProfile,
  DurationProfile,
  ElementProfile,
  EndpointProfile,
  EnrollmentrequestProfile,
  EnrollmentresponseProfile,
  Event,
  ExpressionProfile,
  Extension11179Objectclass,
  Extension11179Objectclassproperty,
  Extension11179PermittedValueConceptmap,
  Extension11179PermittedValueValueset,
  ExtensionAllergyintoleranceAsserteddate,
  ExtensionAllergyintoleranceCertainty,
  ExtensionAllergyintoleranceDuration,
  ExtensionAllergyintoleranceReasonrefuted,
  ExtensionAllergyintoleranceResolutionage,
  ExtensionAllergyintoleranceSubstanceexposurerisk,
  ExtensionAuditeventAccession,
  ExtensionAuditeventAnonymized,
  ExtensionAuditeventEncrypted,
  ExtensionAuditeventInstance,
  ExtensionAuditeventMpps,
  ExtensionAuditeventNumberofinstances,
  ExtensionAuditeventParticipantobjectcontainsstudy,
  ExtensionAuditeventSopclass,
  ExtensionBodysite,
  ExtensionCapabilities,
  ExtensionCapabilitystatementExpectation,
  ExtensionCapabilitystatementProhibited,
  ExtensionCapabilitystatementSearchParameterCombination,
  ExtensionCapabilitystatementSupportedSystem,
  ExtensionCapabilitystatementWebsocket,
  ExtensionCareplanActivityTitle,
  ExtensionCodesystemAlternate,
  ExtensionCodesystemAuthor,
  ExtensionCodesystemConceptComments,
  ExtensionCodesystemConceptorder,
  ExtensionCodesystemEffectivedate,
  ExtensionCodesystemExpirationdate,
  ExtensionCodesystemHistory,
  ExtensionCodesystemKeyword,
  ExtensionCodesystemLabel,
  ExtensionCodesystemMap,
  ExtensionCodesystemOthername,
  ExtensionCodesystemReplacedby,
  ExtensionCodesystemSourcereference,
  ExtensionCodesystemTrustedExpansion,
  ExtensionCodesystemUsage,
  ExtensionCodesystemWarning,
  ExtensionCodesystemWorkflowstatus,
  ExtensionCodingSctdescid,
  ExtensionCommunicationMedia,
  ExtensionCommunicationrequestInitiatinglocation,
  ExtensionCompositionClinicaldocumentOtherconfidentiality,
  ExtensionCompositionClinicaldocumentVersionnumber,
  ExtensionCompositionSectionSubject,
  ExtensionConceptBidirectional,
  ExtensionConditionAsserteddate,
  ExtensionConditionDueto,
  ExtensionConditionOccurredfollowing,
  ExtensionConditionOutcome,
  ExtensionConditionRelated,
  ExtensionConditionRuledout,
  ExtensionConsentLocation,
  ExtensionConsentNotificationendpoint,
  ExtensionConsentTranscriber,
  ExtensionConsentWitness,
  ExtensionContactpointArea,
  ExtensionContactpointCountry,
  ExtensionContactpointExtension,
  ExtensionContactpointLocal,
  ExtensionCqfCalculatedvalue,
  ExtensionCqfCdshooksendpoint,
  ExtensionCqfCitation,
  ExtensionCqfEncounterclass,
  ExtensionCqfEncountertype,
  ExtensionCqfExpression,
  ExtensionCqfInitialvalue,
  ExtensionCqfInitiatingorganization,
  ExtensionCqfInitiatingperson,
  ExtensionCqfLibrary,
  ExtensionCqfMeasureinfo,
  ExtensionCqfQualityofevidence,
  ExtensionCqfReceivingorganization,
  ExtensionCqfReceivingperson,
  ExtensionCqfRecipientlanguage,
  ExtensionCqfRecipienttype,
  ExtensionCqfRelativedatetime,
  ExtensionCqfStrengthofrecommendation,
  ExtensionCqfSystemuserlanguage,
  ExtensionCqfSystemusertaskcontext,
  ExtensionCqfSystemusertype,
  ExtensionCqmValidityperiod,
  ExtensionDataAbsentReason,
  ExtensionDesignnote,
  ExtensionDeviceImplantstatus,
  ExtensionDevicerequestPatientinstruction,
  ExtensionDiagnosticreportAddendumof,
  ExtensionDiagnosticreportExtends,
  ExtensionDiagnosticreportGeneticsanalysis,
  ExtensionDiagnosticreportGeneticsassessedcondition,
  ExtensionDiagnosticreportGeneticsfamilymemberhistory,
  ExtensionDiagnosticreportGeneticsreferences,
  ExtensionDiagnosticreportLocationperformed,
  ExtensionDiagnosticreportReplaces,
  ExtensionDiagnosticreportRisk,
  ExtensionDiagnosticreportSummaryof,
  ExtensionDisplay,
  ExtensionElementdefinitionAllowedunits,
  ExtensionElementdefinitionBestpracticeExplanation,
  ExtensionElementdefinitionBestpractice,
  ExtensionElementdefinitionBindingname,
  ExtensionElementdefinitionEquivalence,
  ExtensionElementdefinitionIdentifier,
  ExtensionElementdefinitionInheritedextensiblevalueset,
  ExtensionElementdefinitionIscommonbinding,
  ExtensionElementdefinitionMaxvalueset,
  ExtensionElementdefinitionMinvalueset,
  ExtensionElementdefinitionNamespace,
  ExtensionElementdefinitionProfileElement,
  ExtensionElementdefinitionQuestion,
  ExtensionElementdefinitionSelector,
  ExtensionElementdefinitionTranslatable,
  ExtensionEncounterAssociatedencounter,
  ExtensionEncounterModeofarrival,
  ExtensionEncounterReasoncancelled,
  ExtensionEntryformat,
  ExtensionEventBasedon,
  ExtensionEventEventhistory,
  ExtensionEventLocation,
  ExtensionEventPartof,
  ExtensionEventPerformerfunction,
  ExtensionEventStatusreason,
  ExtensionFamilyMemberHistoryGeneticsObservation,
  ExtensionFamilyMemberHistoryGeneticsParent,
  ExtensionFamilyMemberHistoryGeneticsSibling,
  ExtensionFamilymemberhistoryAbatement,
  ExtensionFamilymemberhistoryPatientRecord,
  ExtensionFamilymemberhistorySeverity,
  ExtensionFamilymemberhistoryType,
  ExtensionFlagDetail,
  ExtensionFlagPriority,
  ExtensionGeolocation,
  ExtensionGoalAcceptance,
  ExtensionGoalReasonrejected,
  ExtensionGoalRelationship,
  ExtensionHlaGenotypingResultsAlleleDatabase,
  ExtensionHlaGenotypingResultsGlstring,
  ExtensionHlaGenotypingResultsHaploid,
  ExtensionHlaGenotypingResultsMethod,
  ExtensionHttpResponseHeader,
  ExtensionHumannameAssemblyOrder,
  ExtensionHumannameFathersFamily,
  ExtensionHumannameMothersFamily,
  ExtensionHumannameOwnName,
  ExtensionHumannameOwnPrefix,
  ExtensionHumannamePartnerName,
  ExtensionHumannamePartnerPrefix,
  ExtensionIdentifierValiddate,
  ExtensionIso21090AdUse,
  ExtensionIso21090AdxpAdditionallocator,
  ExtensionIso21090AdxpBuildingnumbersuffix,
  ExtensionIso21090AdxpCareof,
  ExtensionIso21090AdxpCensustract,
  ExtensionIso21090AdxpDelimiter,
  ExtensionIso21090AdxpDeliveryaddressline,
  ExtensionIso21090AdxpDeliveryinstallationarea,
  ExtensionIso21090AdxpDeliveryinstallationqualifier,
  ExtensionIso21090AdxpDeliveryinstallationtype,
  ExtensionIso21090AdxpDeliverymode,
  ExtensionIso21090AdxpDeliverymodeidentifier,
  ExtensionIso21090AdxpDirection,
  ExtensionIso21090AdxpHousenumber,
  ExtensionIso21090AdxpHousenumbernumeric,
  ExtensionIso21090AdxpPostbox,
  ExtensionIso21090AdxpPrecinct,
  ExtensionIso21090AdxpStreetaddressline,
  ExtensionIso21090AdxpStreetname,
  ExtensionIso21090AdxpStreetnamebase,
  ExtensionIso21090AdxpStreetnametype,
  ExtensionIso21090AdxpUnitid,
  ExtensionIso21090AdxpUnittype,
  ExtensionIso21090EnQualifier,
  ExtensionIso21090EnRepresentation,
  ExtensionIso21090EnUse,
  ExtensionIso21090Nullflavor,
  ExtensionIso21090PqTranslation,
  ExtensionIso21090Preferred,
  ExtensionIso21090ScCoding,
  ExtensionIso21090TelAddress,
  ExtensionIso21090Uncertainty,
  ExtensionIso21090Uncertaintytype,
  ExtensionLanguage,
  ExtensionListChangebase,
  ExtensionLocationBoundaryGeojson,
  ExtensionLocationDistance,
  ExtensionMatchGrade,
  ExtensionMaxdecimalplaces,
  ExtensionMaxsize,
  ExtensionMaxvalue,
  ExtensionMessageheaderResponseRequest,
  ExtensionMimetype,
  ExtensionMinlength,
  ExtensionMinvalue,
  ExtensionNarrativelink,
  ExtensionNutritionorderAdaptivefeedingdevice,
  ExtensionOauthUris,
  ExtensionObservationBodyposition,
  ExtensionObservationDelta,
  ExtensionObservationDevicecode,
  ExtensionObservationFocuscode,
  ExtensionObservationGatewaydevice,
  ExtensionObservationGeneticsallele,
  ExtensionObservationGeneticsaminoacidchange,
  ExtensionObservationGeneticsancestry,
  ExtensionObservationGeneticscopynumberevent,
  ExtensionObservationGeneticsdnaregionname,
  ExtensionObservationGeneticsgene,
  ExtensionObservationGeneticsgenomicsourceclass,
  ExtensionObservationGeneticsinterpretation,
  ExtensionObservationGeneticsphaseset,
  ExtensionObservationGeneticsvariant,
  ExtensionObservationPrecondition,
  ExtensionObservationReagent,
  ExtensionObservationReplaces,
  ExtensionObservationSecondaryfinding,
  ExtensionObservationSequelto,
  ExtensionObservationSpecimencode,
  ExtensionObservationTimeoffset,
  ExtensionOpenehrAdministration,
  ExtensionOpenehrCareplan,
  ExtensionOpenehrExposuredate,
  ExtensionOpenehrExposuredescription,
  ExtensionOpenehrExposureduration,
  ExtensionOpenehrLocation,
  ExtensionOpenehrManagement,
  ExtensionOpenehrTest,
  ExtensionOperationdefinitionAllowedType,
  ExtensionOperationdefinitionProfile,
  ExtensionOperationoutcomeAuthority,
  ExtensionOperationoutcomeDetectedissue,
  ExtensionOperationoutcomeIssueSource,
  ExtensionOrdinalvalue,
  ExtensionOrganizationPeriod,
  ExtensionOrganizationPreferredcontact,
  ExtensionOrganizationaffiliationPrimaryind,
  ExtensionOriginaltext,
  ExtensionParametersFullurl,
  ExtensionPatientAdoptioninfo,
  ExtensionPatientAnimal,
  ExtensionPatientBirthplace,
  ExtensionPatientBirthtime,
  ExtensionPatientCadavericdonor,
  ExtensionPatientCitizenship,
  ExtensionPatientCongregation,
  ExtensionPatientDisability,
  ExtensionPatientGenderidentity,
  ExtensionPatientImportance,
  ExtensionPatientInterpreterrequired,
  ExtensionPatientMothersmaidenname,
  ExtensionPatientNationality,
  ExtensionPatientPreferencetype,
  ExtensionPatientProficiency,
  ExtensionPatientRelatedperson,
  ExtensionPatientReligion,
  ExtensionPractitionerAnimalspecies,
  ExtensionPractitionerrolePrimaryind,
  ExtensionProcedureApproachbodystructure,
  ExtensionProcedureCausedby,
  ExtensionProcedureDirectedby,
  ExtensionProcedureIncisiondatetime,
  ExtensionProcedureMethod,
  ExtensionProcedureProgressstatus,
  ExtensionProcedureSchedule,
  ExtensionProcedureTargetbodystructure,
  ExtensionQuantityPrecision,
  ExtensionQuestionnaireBasetype,
  ExtensionQuestionnaireChoiceorientation,
  ExtensionQuestionnaireConstraint,
  ExtensionQuestionnaireDisplaycategory,
  ExtensionQuestionnaireFhirtype,
  ExtensionQuestionnaireHidden,
  ExtensionQuestionnaireItemcontrol,
  ExtensionQuestionnaireMaxoccurs,
  ExtensionQuestionnaireMinoccurs,
  ExtensionQuestionnaireOptionexclusive,
  ExtensionQuestionnaireOptionprefix,
  ExtensionQuestionnaireReferencefilter,
  ExtensionQuestionnaireReferenceprofile,
  ExtensionQuestionnaireReferenceresource,
  ExtensionQuestionnaireSignaturerequired,
  ExtensionQuestionnaireSliderstepvalue,
  ExtensionQuestionnaireSupportlink,
  ExtensionQuestionnaireUnit,
  ExtensionQuestionnaireUnitoption,
  ExtensionQuestionnaireUnitvalueset,
  ExtensionQuestionnaireUsagemode,
  ExtensionQuestionnaireresponseAuthor,
  ExtensionQuestionnaireresponseCompletionmode,
  ExtensionQuestionnaireresponseReason,
  ExtensionQuestionnaireresponseReviewer,
  ExtensionQuestionnaireresponseSignature,
  ExtensionRegex,
  ExtensionRelativeDate,
  ExtensionRenderedValue,
  ExtensionRenderingMarkdown,
  ExtensionRenderingStyle,
  ExtensionRenderingStylesensitive,
  ExtensionRenderingXhtml,
  ExtensionReplaces,
  ExtensionRequestDonotperform,
  ExtensionRequestInsurance,
  ExtensionRequestPerformerorder,
  ExtensionRequestRelevanthistory,
  ExtensionRequestReplaces,
  ExtensionRequestStatusreason,
  ExtensionResourceApprovaldate,
  ExtensionResourceEffectiveperiod,
  ExtensionResourceLastreviewdate,
  ExtensionResourcePertainstogoal,
  ExtensionServicerequestGeneticsitem,
  ExtensionServicerequestPrecondition,
  ExtensionServicerequestQuestionnairerequest,
  ExtensionSpecimenCollectionpriority,
  ExtensionSpecimenIsdryweight,
  ExtensionSpecimenProcessingtime,
  ExtensionSpecimenSequencenumber,
  ExtensionSpecimenSpecialhandling,
  ExtensionStructuredefinitionAncestor,
  ExtensionStructuredefinitionApplicableVersion,
  ExtensionStructuredefinitionCategory,
  ExtensionStructuredefinitionCodegenSuper,
  ExtensionStructuredefinitionDependencies,
  ExtensionStructuredefinitionDisplayHint,
  ExtensionStructuredefinitionExplicitTypeName,
  ExtensionStructuredefinitionFhirType,
  ExtensionStructuredefinitionFmmNoWarnings,
  ExtensionStructuredefinitionFmm,
  ExtensionStructuredefinitionHierarchy,
  ExtensionStructuredefinitionNormativeVersion,
  ExtensionStructuredefinitionSecurityCategory,
  ExtensionStructuredefinitionStandardsStatus,
  ExtensionStructuredefinitionSummary,
  ExtensionStructuredefinitionTableName,
  ExtensionStructuredefinitionTemplateStatus,
  ExtensionStructuredefinitionWg,
  ExtensionStructuredefinitionXmlNoOrder,
  ExtensionTaskCandidatelist,
  ExtensionTaskReplaces,
  ExtensionTimingDayofmonth,
  ExtensionTimingDaysofcycle,
  ExtensionTimingExact,
  ExtensionTranslation,
  ExtensionTzCode,
  ExtensionTzOffset,
  ExtensionUsagecontextGroup,
  ExtensionValuesetActivitystatusdate,
  ExtensionValuesetAuthor,
  ExtensionValuesetAuthoritativesource,
  ExtensionValuesetCasesensitive,
  ExtensionValuesetConceptComments,
  ExtensionValuesetConceptDefinition,
  ExtensionValuesetConceptorder,
  ExtensionValuesetDeprecated,
  ExtensionValuesetEffectivedate,
  ExtensionValuesetExpandGroup,
  ExtensionValuesetExpandRules,
  ExtensionValuesetExpansionsource,
  ExtensionValuesetExpirationdate,
  ExtensionValuesetExpression,
  ExtensionValuesetExtensible,
  ExtensionValuesetKeyword,
  ExtensionValuesetLabel,
  ExtensionValuesetMap,
  ExtensionValuesetOthername,
  ExtensionValuesetParametersource,
  ExtensionValuesetReference,
  ExtensionValuesetRulesText,
  ExtensionValuesetSourcereference,
  ExtensionValuesetSpecialStatus,
  ExtensionValuesetSteward,
  ExtensionValuesetSupplement,
  ExtensionValuesetSystem,
  ExtensionValuesetSystemname,
  ExtensionValuesetSystemref,
  ExtensionValuesetToocostly,
  ExtensionValuesetTrustedExpansion,
  ExtensionValuesetUnclosed,
  ExtensionValuesetUsage,
  ExtensionValuesetWarning,
  ExtensionValuesetWorkflowstatus,
  ExtensionVariable,
  ExtensionWorkflowEpisodeofcare,
  ExtensionWorkflowInstantiatescanonical,
  ExtensionWorkflowInstantiatesuri,
  ExtensionWorkflowReasoncode,
  ExtensionWorkflowReasonreference,
  ExtensionWorkflowRelatedartifact,
  ExtensionWorkflowResearchstudy,
  ExtensionWorkflowSupportinginfo,
  ExtensionProfile,
  FamilymemberhistoryGeneticProfile,
  Fivews,
  FlagProfile,
  GroupdefinitionProfile,
  HlaresultProfile,
  HumannameProfile,
  IdProfile,
  IdentifierProfile,
  InstantProfile,
  IntegerProfile,
  LinkageProfile,
  LipidprofileProfile,
  MarkdownProfile,
  MarketingstatusProfile,
  MedicinalproductcontraindicationProfile,
  MedicinalproductinteractionProfile,
  MedicinalproductmanufacturedProfile,
  MedicinalproductundesirableeffectProfile,
  MetaProfile,
  MoneyProfile,
  MoneyquantityProfile,
  NarrativeProfile,
  OidProfile,
  OperationoutcomeProfile,
  OrganizationaffiliationProfile,
  ParameterdefinitionProfile,
  ParametersProfile,
  PaymentnoticeProfile,
  PeriodProfile,
  PicoelementProfile,
  PopulationProfile,
  PositiveintProfile,
  ProdcharacteristicProfile,
  ProductshelflifeProfile,
  ProvenanceRelevantHistoryProfile,
  QuantityProfile,
  RangeProfile,
  RatioProfile,
  ReferenceProfile,
  RelatedartifactProfile,
  Request,
  ResearchsubjectProfile,
  ResourceProfile,
  SampleddataProfile,
  ScheduleProfile,
  ServicerequestGeneticsProfile,
  ShareablelibraryProfile,
  SignatureProfile,
  SimplequantityProfile,
  SlotProfile,
  StringProfile,
  StructuredefinitionExampleComposition,
  StructuredefinitionExampleSectionLibrary,
  SubscriptionProfile,
  SubstanceamountProfile,
  SynthesisProfile,
  TimeProfile,
  TriggerdefinitionProfile,
  UnsignedintProfile,
  UriProfile,
  UrlProfile,
  UsagecontextProfile,
  UuidProfile,
} from "./fixture";
import { z } from "zod/v4";

describe("StructureDefinition Schema Validation", () => {
  it("should validate ActualgroupProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ActualgroupProfile);
    if (!result.success) {
      console.error("Validation failed for ActualgroupProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActualgroupProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AddressProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(AddressProfile);
    if (!result.success) {
      console.error("Validation failed for AddressProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AddressProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AgeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(AgeProfile);
    if (!result.success) {
      console.error("Validation failed for AgeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AgeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AnnotationProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(AnnotationProfile);
    if (!result.success) {
      console.error("Validation failed for AnnotationProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AnnotationProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentresponseProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      AppointmentresponseProfile,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentresponseProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentresponseProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AttachmentProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(AttachmentProfile);
    if (!result.success) {
      console.error("Validation failed for AttachmentProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AttachmentProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BackboneelementProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      BackboneelementProfile,
    );
    if (!result.success) {
      console.error("Validation failed for BackboneelementProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BackboneelementProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Base64binaryProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(Base64binaryProfile);
    if (!result.success) {
      console.error("Validation failed for Base64binaryProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Base64binaryProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BasicProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(BasicProfile);
    if (!result.success) {
      console.error("Validation failed for BasicProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BasicProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BinaryProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(BinaryProfile);
    if (!result.success) {
      console.error("Validation failed for BinaryProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BinaryProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BodystructureProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(BodystructureProfile);
    if (!result.success) {
      console.error("Validation failed for BodystructureProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BodystructureProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BooleanProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(BooleanProfile);
    if (!result.success) {
      console.error("Validation failed for BooleanProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BooleanProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CanonicalProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(CanonicalProfile);
    if (!result.success) {
      console.error("Validation failed for CanonicalProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CanonicalProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CdshooksguidanceresponseProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      CdshooksguidanceresponseProfile,
    );
    if (!result.success) {
      console.error("Validation failed for CdshooksguidanceresponseProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CdshooksguidanceresponseProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CdshooksrequestgroupProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      CdshooksrequestgroupProfile,
    );
    if (!result.success) {
      console.error("Validation failed for CdshooksrequestgroupProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CdshooksrequestgroupProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(CodeProfile);
    if (!result.success) {
      console.error("Validation failed for CodeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodeableconceptProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      CodeableconceptProfile,
    );
    if (!result.success) {
      console.error("Validation failed for CodeableconceptProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodeableconceptProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CodingProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(CodingProfile);
    if (!result.success) {
      console.error("Validation failed for CodingProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CodingProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ContactdetailProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ContactdetailProfile);
    if (!result.success) {
      console.error("Validation failed for ContactdetailProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContactdetailProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ContactpointProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ContactpointProfile);
    if (!result.success) {
      console.error("Validation failed for ContactpointProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContactpointProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ContributorProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ContributorProfile);
    if (!result.success) {
      console.error("Validation failed for ContributorProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ContributorProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CountProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(CountProfile);
    if (!result.success) {
      console.error("Validation failed for CountProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CountProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CqllibraryProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(CqllibraryProfile);
    if (!result.success) {
      console.error("Validation failed for CqllibraryProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CqllibraryProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DateProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(DateProfile);
    if (!result.success) {
      console.error("Validation failed for DateProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DateProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DatetimeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(DatetimeProfile);
    if (!result.success) {
      console.error("Validation failed for DatetimeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DatetimeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DecimalProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(DecimalProfile);
    if (!result.success) {
      console.error("Validation failed for DecimalProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DecimalProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Definition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(Definition);
    if (!result.success) {
      console.error("Validation failed for Definition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Definition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportGeneticsProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      DiagnosticreportGeneticsProfile,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportGeneticsProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportGeneticsProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DistanceProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(DistanceProfile);
    if (!result.success) {
      console.error("Validation failed for DistanceProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DistanceProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DomainresourceProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      DomainresourceProfile,
    );
    if (!result.success) {
      console.error("Validation failed for DomainresourceProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DomainresourceProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DurationProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(DurationProfile);
    if (!result.success) {
      console.error("Validation failed for DurationProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DurationProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ElementProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(ElementProfile);
    if (!result.success) {
      console.error("Validation failed for ElementProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ElementProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(EndpointProfile);
    if (!result.success) {
      console.error("Validation failed for EndpointProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EnrollmentrequestProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      EnrollmentrequestProfile,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentrequestProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentrequestProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EnrollmentresponseProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      EnrollmentresponseProfile,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentresponseProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentresponseProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Event fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(Event);
    if (!result.success) {
      console.error("Validation failed for Event:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Event: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExpressionProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExpressionProfile);
    if (!result.success) {
      console.error("Validation failed for ExpressionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExpressionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Extension11179Objectclass fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      Extension11179Objectclass,
    );
    if (!result.success) {
      console.error("Validation failed for Extension11179Objectclass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Extension11179Objectclass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Extension11179Objectclassproperty fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      Extension11179Objectclassproperty,
    );
    if (!result.success) {
      console.error("Validation failed for Extension11179Objectclassproperty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Extension11179Objectclassproperty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Extension11179PermittedValueConceptmap fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      Extension11179PermittedValueConceptmap,
    );
    if (!result.success) {
      console.error(
        "Validation failed for Extension11179PermittedValueConceptmap:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Extension11179PermittedValueConceptmap: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Extension11179PermittedValueValueset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      Extension11179PermittedValueValueset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for Extension11179PermittedValueValueset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Extension11179PermittedValueValueset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceAsserteddate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceAsserteddate,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceAsserteddate:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceAsserteddate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceCertainty fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceCertainty,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceCertainty:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceCertainty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceDuration fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceDuration,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceDuration:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceDuration: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceReasonrefuted fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceReasonrefuted,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceReasonrefuted:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceReasonrefuted: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceResolutionage fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceResolutionage,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceResolutionage:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceResolutionage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAllergyintoleranceSubstanceexposurerisk fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAllergyintoleranceSubstanceexposurerisk,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAllergyintoleranceSubstanceexposurerisk:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAllergyintoleranceSubstanceexposurerisk: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventAccession fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventAccession,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventAccession:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventAccession: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventAnonymized fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventAnonymized,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventAnonymized:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventAnonymized: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventEncrypted fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventEncrypted,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventEncrypted:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventEncrypted: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventInstance fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventInstance,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventInstance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventInstance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventMpps fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventMpps,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventMpps:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventMpps: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventNumberofinstances fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventNumberofinstances,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAuditeventNumberofinstances:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventNumberofinstances: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventParticipantobjectcontainsstudy fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventParticipantobjectcontainsstudy,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionAuditeventParticipantobjectcontainsstudy:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventParticipantobjectcontainsstudy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionAuditeventSopclass fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionAuditeventSopclass,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionAuditeventSopclass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionAuditeventSopclass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionBodysite fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionBodysite);
    if (!result.success) {
      console.error("Validation failed for ExtensionBodysite:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionBodysite: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilities fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilities,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCapabilities:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilities: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilitystatementExpectation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilitystatementExpectation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCapabilitystatementExpectation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilitystatementExpectation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilitystatementProhibited fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilitystatementProhibited,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCapabilitystatementProhibited:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilitystatementProhibited: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilitystatementSearchParameterCombination fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilitystatementSearchParameterCombination,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCapabilitystatementSearchParameterCombination:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilitystatementSearchParameterCombination: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilitystatementSupportedSystem fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilitystatementSupportedSystem,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCapabilitystatementSupportedSystem:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilitystatementSupportedSystem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCapabilitystatementWebsocket fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCapabilitystatementWebsocket,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCapabilitystatementWebsocket:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCapabilitystatementWebsocket: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCareplanActivityTitle fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCareplanActivityTitle,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCareplanActivityTitle:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCareplanActivityTitle: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemAlternate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemAlternate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemAlternate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemAlternate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemAuthor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemAuthor,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemAuthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemConceptComments fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemConceptComments,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCodesystemConceptComments:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemConceptComments: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemConceptorder fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemConceptorder,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemConceptorder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemConceptorder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemEffectivedate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemEffectivedate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemEffectivedate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemEffectivedate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemExpirationdate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemExpirationdate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemExpirationdate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemExpirationdate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemHistory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemHistory,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemHistory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemHistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemKeyword fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemKeyword,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemKeyword:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemKeyword: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemLabel fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemLabel,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemLabel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemLabel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemMap fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemMap,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemMap:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemMap: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemOthername fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemOthername,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemOthername:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemOthername: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemReplacedby fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemReplacedby,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemReplacedby:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemReplacedby: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemSourcereference fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemSourcereference,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCodesystemSourcereference:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemSourcereference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemTrustedExpansion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemTrustedExpansion,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCodesystemTrustedExpansion:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemTrustedExpansion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemUsage fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemUsage,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemWarning fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemWarning,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemWarning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemWarning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodesystemWorkflowstatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodesystemWorkflowstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodesystemWorkflowstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodesystemWorkflowstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCodingSctdescid fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCodingSctdescid,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCodingSctdescid:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCodingSctdescid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCommunicationMedia fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCommunicationMedia,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCommunicationMedia:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCommunicationMedia: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCommunicationrequestInitiatinglocation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCommunicationrequestInitiatinglocation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCommunicationrequestInitiatinglocation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCommunicationrequestInitiatinglocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCompositionClinicaldocumentOtherconfidentiality fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCompositionClinicaldocumentOtherconfidentiality,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCompositionClinicaldocumentOtherconfidentiality:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCompositionClinicaldocumentOtherconfidentiality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCompositionClinicaldocumentVersionnumber fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCompositionClinicaldocumentVersionnumber,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCompositionClinicaldocumentVersionnumber:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCompositionClinicaldocumentVersionnumber: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCompositionSectionSubject fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCompositionSectionSubject,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCompositionSectionSubject:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCompositionSectionSubject: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConceptBidirectional fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConceptBidirectional,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConceptBidirectional:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConceptBidirectional: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionAsserteddate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionAsserteddate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConditionAsserteddate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionAsserteddate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionDueto fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionDueto,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConditionDueto:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionDueto: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionOccurredfollowing fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionOccurredfollowing,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionConditionOccurredfollowing:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionOccurredfollowing: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionOutcome fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConditionOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionRelated fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionRelated,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConditionRelated:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionRelated: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConditionRuledout fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConditionRuledout,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConditionRuledout:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConditionRuledout: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConsentLocation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConsentLocation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConsentLocation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConsentLocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConsentNotificationendpoint fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConsentNotificationendpoint,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionConsentNotificationendpoint:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConsentNotificationendpoint: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConsentTranscriber fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConsentTranscriber,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConsentTranscriber:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConsentTranscriber: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionConsentWitness fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionConsentWitness,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionConsentWitness:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionConsentWitness: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionContactpointArea fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionContactpointArea,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionContactpointArea:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionContactpointArea: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionContactpointCountry fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionContactpointCountry,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionContactpointCountry:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionContactpointCountry: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionContactpointExtension fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionContactpointExtension,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionContactpointExtension:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionContactpointExtension: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionContactpointLocal fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionContactpointLocal,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionContactpointLocal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionContactpointLocal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfCalculatedvalue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfCalculatedvalue,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfCalculatedvalue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfCalculatedvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfCdshooksendpoint fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfCdshooksendpoint,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfCdshooksendpoint:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfCdshooksendpoint: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfCitation fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionCqfCitation);
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfCitation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfCitation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfEncounterclass fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfEncounterclass,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfEncounterclass:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfEncounterclass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfEncountertype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfEncountertype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfEncountertype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfEncountertype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfExpression fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfExpression,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfExpression:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfExpression: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfInitialvalue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfInitialvalue,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfInitialvalue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfInitialvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfInitiatingorganization fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfInitiatingorganization,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCqfInitiatingorganization:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfInitiatingorganization: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfInitiatingperson fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfInitiatingperson,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfInitiatingperson:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfInitiatingperson: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfLibrary fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionCqfLibrary);
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfLibrary:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfLibrary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfMeasureinfo fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfMeasureinfo,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfMeasureinfo:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfMeasureinfo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfQualityofevidence fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfQualityofevidence,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfQualityofevidence:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfQualityofevidence: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfReceivingorganization fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfReceivingorganization,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfReceivingorganization:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfReceivingorganization: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfReceivingperson fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfReceivingperson,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfReceivingperson:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfReceivingperson: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfRecipientlanguage fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfRecipientlanguage,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfRecipientlanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfRecipientlanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfRecipienttype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfRecipienttype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfRecipienttype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfRecipienttype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfRelativedatetime fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfRelativedatetime,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfRelativedatetime:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfRelativedatetime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfStrengthofrecommendation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfStrengthofrecommendation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionCqfStrengthofrecommendation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfStrengthofrecommendation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfSystemuserlanguage fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfSystemuserlanguage,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfSystemuserlanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfSystemuserlanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfSystemusertaskcontext fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfSystemusertaskcontext,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfSystemusertaskcontext:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfSystemusertaskcontext: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqfSystemusertype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqfSystemusertype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqfSystemusertype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqfSystemusertype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionCqmValidityperiod fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionCqmValidityperiod,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionCqmValidityperiod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionCqmValidityperiod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDataAbsentReason fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDataAbsentReason,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionDataAbsentReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDataAbsentReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDesignnote fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionDesignnote);
    if (!result.success) {
      console.error("Validation failed for ExtensionDesignnote:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDesignnote: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDeviceImplantstatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDeviceImplantstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionDeviceImplantstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDeviceImplantstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDevicerequestPatientinstruction fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDevicerequestPatientinstruction,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDevicerequestPatientinstruction:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDevicerequestPatientinstruction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportAddendumof fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportAddendumof,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportAddendumof:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportAddendumof: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportExtends fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportExtends,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionDiagnosticreportExtends:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportExtends: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportGeneticsanalysis fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportGeneticsanalysis,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportGeneticsanalysis:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportGeneticsanalysis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportGeneticsassessedcondition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportGeneticsassessedcondition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportGeneticsassessedcondition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportGeneticsassessedcondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportGeneticsfamilymemberhistory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportGeneticsfamilymemberhistory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportGeneticsfamilymemberhistory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportGeneticsfamilymemberhistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportGeneticsreferences fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportGeneticsreferences,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportGeneticsreferences:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportGeneticsreferences: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportLocationperformed fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportLocationperformed,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportLocationperformed:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportLocationperformed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportReplaces fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportReplaces,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionDiagnosticreportReplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportReplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportRisk fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportRisk,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionDiagnosticreportRisk:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportRisk: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDiagnosticreportSummaryof fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionDiagnosticreportSummaryof,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionDiagnosticreportSummaryof:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDiagnosticreportSummaryof: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionDisplay fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionDisplay);
    if (!result.success) {
      console.error("Validation failed for ExtensionDisplay:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionDisplay: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionAllowedunits fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionAllowedunits,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionAllowedunits:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionAllowedunits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionBestpracticeExplanation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionBestpracticeExplanation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionBestpracticeExplanation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionBestpracticeExplanation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionBestpractice fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionBestpractice,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionBestpractice:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionBestpractice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionBindingname fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionBindingname,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionBindingname:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionBindingname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionEquivalence fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionEquivalence,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionEquivalence:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionEquivalence: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionIdentifier fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionIdentifier,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionIdentifier:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionIdentifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionInheritedextensiblevalueset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionInheritedextensiblevalueset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionInheritedextensiblevalueset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionInheritedextensiblevalueset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionIscommonbinding fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionIscommonbinding,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionIscommonbinding:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionIscommonbinding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionMaxvalueset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionMaxvalueset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionMaxvalueset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionMaxvalueset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionMinvalueset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionMinvalueset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionMinvalueset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionMinvalueset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionNamespace fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionNamespace,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionNamespace:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionNamespace: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionProfileElement fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionProfileElement,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionProfileElement:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionProfileElement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionQuestion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionQuestion,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionQuestion:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionQuestion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionSelector fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionSelector,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionSelector:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionSelector: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionElementdefinitionTranslatable fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionElementdefinitionTranslatable,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionElementdefinitionTranslatable:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionElementdefinitionTranslatable: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEncounterAssociatedencounter fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEncounterAssociatedencounter,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionEncounterAssociatedencounter:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEncounterAssociatedencounter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEncounterModeofarrival fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEncounterModeofarrival,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEncounterModeofarrival:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEncounterModeofarrival: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEncounterReasoncancelled fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEncounterReasoncancelled,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEncounterReasoncancelled:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEncounterReasoncancelled: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEntryformat fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionEntryformat);
    if (!result.success) {
      console.error("Validation failed for ExtensionEntryformat:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEntryformat: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventBasedon fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEventBasedon,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEventBasedon:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventBasedon: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventEventhistory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEventEventhistory,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEventEventhistory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventEventhistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventLocation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEventLocation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEventLocation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventLocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventPartof fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionEventPartof);
    if (!result.success) {
      console.error("Validation failed for ExtensionEventPartof:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventPartof: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventPerformerfunction fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEventPerformerfunction,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEventPerformerfunction:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventPerformerfunction: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionEventStatusreason fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionEventStatusreason,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionEventStatusreason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionEventStatusreason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilyMemberHistoryGeneticsObservation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilyMemberHistoryGeneticsObservation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilyMemberHistoryGeneticsObservation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilyMemberHistoryGeneticsObservation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilyMemberHistoryGeneticsParent fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilyMemberHistoryGeneticsParent,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilyMemberHistoryGeneticsParent:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilyMemberHistoryGeneticsParent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilyMemberHistoryGeneticsSibling fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilyMemberHistoryGeneticsSibling,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilyMemberHistoryGeneticsSibling:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilyMemberHistoryGeneticsSibling: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilymemberhistoryAbatement fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilymemberhistoryAbatement,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilymemberhistoryAbatement:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilymemberhistoryAbatement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilymemberhistoryPatientRecord fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilymemberhistoryPatientRecord,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilymemberhistoryPatientRecord:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilymemberhistoryPatientRecord: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilymemberhistorySeverity fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilymemberhistorySeverity,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionFamilymemberhistorySeverity:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilymemberhistorySeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFamilymemberhistoryType fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFamilymemberhistoryType,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionFamilymemberhistoryType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFamilymemberhistoryType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFlagDetail fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionFlagDetail);
    if (!result.success) {
      console.error("Validation failed for ExtensionFlagDetail:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFlagDetail: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionFlagPriority fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionFlagPriority,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionFlagPriority:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionFlagPriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionGeolocation fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionGeolocation);
    if (!result.success) {
      console.error("Validation failed for ExtensionGeolocation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionGeolocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionGoalAcceptance fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionGoalAcceptance,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionGoalAcceptance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionGoalAcceptance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionGoalReasonrejected fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionGoalReasonrejected,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionGoalReasonrejected:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionGoalReasonrejected: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionGoalRelationship fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionGoalRelationship,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionGoalRelationship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionGoalRelationship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHlaGenotypingResultsAlleleDatabase fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHlaGenotypingResultsAlleleDatabase,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionHlaGenotypingResultsAlleleDatabase:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHlaGenotypingResultsAlleleDatabase: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHlaGenotypingResultsGlstring fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHlaGenotypingResultsGlstring,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionHlaGenotypingResultsGlstring:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHlaGenotypingResultsGlstring: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHlaGenotypingResultsHaploid fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHlaGenotypingResultsHaploid,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionHlaGenotypingResultsHaploid:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHlaGenotypingResultsHaploid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHlaGenotypingResultsMethod fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHlaGenotypingResultsMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionHlaGenotypingResultsMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHlaGenotypingResultsMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHttpResponseHeader fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHttpResponseHeader,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHttpResponseHeader:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHttpResponseHeader: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannameAssemblyOrder fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannameAssemblyOrder,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannameAssemblyOrder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannameAssemblyOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannameFathersFamily fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannameFathersFamily,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannameFathersFamily:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannameFathersFamily: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannameMothersFamily fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannameMothersFamily,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannameMothersFamily:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannameMothersFamily: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannameOwnName fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannameOwnName,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannameOwnName:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannameOwnName: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannameOwnPrefix fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannameOwnPrefix,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannameOwnPrefix:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannameOwnPrefix: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannamePartnerName fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannamePartnerName,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannamePartnerName:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannamePartnerName: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionHumannamePartnerPrefix fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionHumannamePartnerPrefix,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionHumannamePartnerPrefix:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionHumannamePartnerPrefix: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIdentifierValiddate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIdentifierValiddate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIdentifierValiddate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIdentifierValiddate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdUse fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdUse,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpAdditionallocator fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpAdditionallocator,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpAdditionallocator:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpAdditionallocator: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpBuildingnumbersuffix fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpBuildingnumbersuffix,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpBuildingnumbersuffix:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpBuildingnumbersuffix: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpCareof fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpCareof,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpCareof:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpCareof: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpCensustract fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpCensustract,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpCensustract:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpCensustract: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDelimiter fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDelimiter,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpDelimiter:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDelimiter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliveryaddressline fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliveryaddressline,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpDeliveryaddressline:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliveryaddressline: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliveryinstallationarea fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliveryinstallationarea,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpDeliveryinstallationarea:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliveryinstallationarea: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliveryinstallationqualifier fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliveryinstallationqualifier,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpDeliveryinstallationqualifier:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliveryinstallationqualifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliveryinstallationtype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliveryinstallationtype,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpDeliveryinstallationtype:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliveryinstallationtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliverymode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliverymode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpDeliverymode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliverymode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDeliverymodeidentifier fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDeliverymodeidentifier,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpDeliverymodeidentifier:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDeliverymodeidentifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpDirection fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpDirection,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpDirection:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpDirection: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpHousenumber fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpHousenumber,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpHousenumber:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpHousenumber: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpHousenumbernumeric fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpHousenumbernumeric,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpHousenumbernumeric:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpHousenumbernumeric: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpPostbox fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpPostbox,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpPostbox:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpPostbox: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpPrecinct fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpPrecinct,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpPrecinct:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpPrecinct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpStreetaddressline fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpStreetaddressline,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpStreetaddressline:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpStreetaddressline: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpStreetname fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpStreetname,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpStreetname:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpStreetname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpStreetnamebase fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpStreetnamebase,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpStreetnamebase:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpStreetnamebase: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpStreetnametype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpStreetnametype,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionIso21090AdxpStreetnametype:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpStreetnametype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpUnitid fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpUnitid,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpUnitid:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpUnitid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090AdxpUnittype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090AdxpUnittype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090AdxpUnittype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090AdxpUnittype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090EnQualifier fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090EnQualifier,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090EnQualifier:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090EnQualifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090EnRepresentation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090EnRepresentation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090EnRepresentation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090EnRepresentation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090EnUse fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090EnUse,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090EnUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090EnUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090Nullflavor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090Nullflavor,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090Nullflavor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090Nullflavor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090PqTranslation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090PqTranslation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090PqTranslation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090PqTranslation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090Preferred fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090Preferred,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090Preferred:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090Preferred: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090ScCoding fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090ScCoding,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090ScCoding:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090ScCoding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090TelAddress fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090TelAddress,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090TelAddress:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090TelAddress: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090Uncertainty fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090Uncertainty,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090Uncertainty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090Uncertainty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionIso21090Uncertaintytype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionIso21090Uncertaintytype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionIso21090Uncertaintytype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionIso21090Uncertaintytype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionLanguage fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionLanguage);
    if (!result.success) {
      console.error("Validation failed for ExtensionLanguage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionLanguage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionListChangebase fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionListChangebase,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionListChangebase:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionListChangebase: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionLocationBoundaryGeojson fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionLocationBoundaryGeojson,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionLocationBoundaryGeojson:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionLocationBoundaryGeojson: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionLocationDistance fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionLocationDistance,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionLocationDistance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionLocationDistance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMatchGrade fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMatchGrade);
    if (!result.success) {
      console.error("Validation failed for ExtensionMatchGrade:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMatchGrade: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMaxdecimalplaces fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionMaxdecimalplaces,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionMaxdecimalplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMaxdecimalplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMaxsize fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMaxsize);
    if (!result.success) {
      console.error("Validation failed for ExtensionMaxsize:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMaxsize: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMaxvalue fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMaxvalue);
    if (!result.success) {
      console.error("Validation failed for ExtensionMaxvalue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMaxvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMessageheaderResponseRequest fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionMessageheaderResponseRequest,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionMessageheaderResponseRequest:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMessageheaderResponseRequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMimetype fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMimetype);
    if (!result.success) {
      console.error("Validation failed for ExtensionMimetype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMimetype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMinlength fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMinlength);
    if (!result.success) {
      console.error("Validation failed for ExtensionMinlength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMinlength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionMinvalue fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionMinvalue);
    if (!result.success) {
      console.error("Validation failed for ExtensionMinvalue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionMinvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionNarrativelink fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionNarrativelink,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionNarrativelink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionNarrativelink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionNutritionorderAdaptivefeedingdevice fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionNutritionorderAdaptivefeedingdevice,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionNutritionorderAdaptivefeedingdevice:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionNutritionorderAdaptivefeedingdevice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOauthUris fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionOauthUris);
    if (!result.success) {
      console.error("Validation failed for ExtensionOauthUris:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOauthUris: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationBodyposition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationBodyposition,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationBodyposition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationBodyposition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationDelta fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationDelta,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationDelta:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationDelta: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationDevicecode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationDevicecode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationDevicecode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationDevicecode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationFocuscode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationFocuscode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationFocuscode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationFocuscode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGatewaydevice fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGatewaydevice,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationGatewaydevice:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGatewaydevice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsallele fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsallele,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsallele:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsallele: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsaminoacidchange fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsaminoacidchange,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsaminoacidchange:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsaminoacidchange: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsancestry fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsancestry,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsancestry:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsancestry: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticscopynumberevent fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticscopynumberevent,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticscopynumberevent:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticscopynumberevent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsdnaregionname fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsdnaregionname,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsdnaregionname:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsdnaregionname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsgene fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsgene,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationGeneticsgene:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsgene: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsgenomicsourceclass fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsgenomicsourceclass,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsgenomicsourceclass:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsgenomicsourceclass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsinterpretation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsinterpretation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsinterpretation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsinterpretation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsphaseset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsphaseset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsphaseset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsphaseset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationGeneticsvariant fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationGeneticsvariant,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationGeneticsvariant:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationGeneticsvariant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationPrecondition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationPrecondition,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationPrecondition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationPrecondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationReagent fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationReagent,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationReagent:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationReagent: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationReplaces fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationReplaces,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationReplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationReplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationSecondaryfinding fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationSecondaryfinding,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionObservationSecondaryfinding:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationSecondaryfinding: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationSequelto fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationSequelto,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationSequelto:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationSequelto: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationSpecimencode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationSpecimencode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationSpecimencode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationSpecimencode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionObservationTimeoffset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionObservationTimeoffset,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionObservationTimeoffset:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionObservationTimeoffset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrAdministration fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrAdministration,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrAdministration:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrAdministration: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrCareplan fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrCareplan,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrCareplan:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrCareplan: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrExposuredate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrExposuredate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrExposuredate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrExposuredate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrExposuredescription fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrExposuredescription,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOpenehrExposuredescription:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrExposuredescription: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrExposureduration fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrExposureduration,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrExposureduration:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrExposureduration: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrLocation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrLocation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrLocation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrLocation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrManagement fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOpenehrManagement,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrManagement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrManagement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOpenehrTest fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionOpenehrTest);
    if (!result.success) {
      console.error("Validation failed for ExtensionOpenehrTest:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOpenehrTest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOperationdefinitionAllowedType fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOperationdefinitionAllowedType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOperationdefinitionAllowedType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOperationdefinitionAllowedType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOperationdefinitionProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOperationdefinitionProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOperationdefinitionProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOperationdefinitionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOperationoutcomeAuthority fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOperationoutcomeAuthority,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOperationoutcomeAuthority:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOperationoutcomeAuthority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOperationoutcomeDetectedissue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOperationoutcomeDetectedissue,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOperationoutcomeDetectedissue:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOperationoutcomeDetectedissue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOperationoutcomeIssueSource fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOperationoutcomeIssueSource,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOperationoutcomeIssueSource:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOperationoutcomeIssueSource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOrdinalvalue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOrdinalvalue,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOrdinalvalue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOrdinalvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOrganizationPeriod fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOrganizationPeriod,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOrganizationPeriod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOrganizationPeriod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOrganizationPreferredcontact fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOrganizationPreferredcontact,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOrganizationPreferredcontact:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOrganizationPreferredcontact: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOrganizationaffiliationPrimaryind fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOrganizationaffiliationPrimaryind,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionOrganizationaffiliationPrimaryind:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOrganizationaffiliationPrimaryind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionOriginaltext fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionOriginaltext,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionOriginaltext:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionOriginaltext: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionParametersFullurl fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionParametersFullurl,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionParametersFullurl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionParametersFullurl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientAdoptioninfo fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientAdoptioninfo,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientAdoptioninfo:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientAdoptioninfo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientAnimal fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientAnimal,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientAnimal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientAnimal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientBirthplace fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientBirthplace,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientBirthplace:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientBirthplace: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientBirthtime fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientBirthtime,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientBirthtime:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientBirthtime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientCadavericdonor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientCadavericdonor,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientCadavericdonor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientCadavericdonor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientCitizenship fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientCitizenship,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientCitizenship:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientCitizenship: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientCongregation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientCongregation,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientCongregation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientCongregation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientDisability fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientDisability,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientDisability:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientDisability: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientGenderidentity fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientGenderidentity,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientGenderidentity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientGenderidentity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientImportance fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientImportance,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientImportance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientImportance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientInterpreterrequired fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientInterpreterrequired,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionPatientInterpreterrequired:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientInterpreterrequired: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientMothersmaidenname fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientMothersmaidenname,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientMothersmaidenname:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientMothersmaidenname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientNationality fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientNationality,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientNationality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientNationality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientPreferencetype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientPreferencetype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientPreferencetype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientPreferencetype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientProficiency fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientProficiency,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientProficiency:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientProficiency: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientRelatedperson fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientRelatedperson,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientRelatedperson:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientRelatedperson: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPatientReligion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPatientReligion,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionPatientReligion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPatientReligion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPractitionerAnimalspecies fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPractitionerAnimalspecies,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionPractitionerAnimalspecies:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPractitionerAnimalspecies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionPractitionerrolePrimaryind fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionPractitionerrolePrimaryind,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionPractitionerrolePrimaryind:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionPractitionerrolePrimaryind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureApproachbodystructure fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureApproachbodystructure,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionProcedureApproachbodystructure:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureApproachbodystructure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureCausedby fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureCausedby,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionProcedureCausedby:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureCausedby: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureDirectedby fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureDirectedby,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionProcedureDirectedby:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureDirectedby: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureIncisiondatetime fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureIncisiondatetime,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionProcedureIncisiondatetime:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureIncisiondatetime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureMethod fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureMethod,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionProcedureMethod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureProgressstatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureProgressstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionProcedureProgressstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureProgressstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureSchedule fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureSchedule,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionProcedureSchedule:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureSchedule: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProcedureTargetbodystructure fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionProcedureTargetbodystructure,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionProcedureTargetbodystructure:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProcedureTargetbodystructure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuantityPrecision fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuantityPrecision,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuantityPrecision:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuantityPrecision: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireBasetype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireBasetype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireBasetype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireBasetype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireChoiceorientation fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireChoiceorientation,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireChoiceorientation:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireChoiceorientation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireConstraint fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireConstraint,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireConstraint:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireConstraint: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireDisplaycategory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireDisplaycategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireDisplaycategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireDisplaycategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireFhirtype fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireFhirtype,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireFhirtype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireFhirtype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireHidden fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireHidden,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireHidden:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireHidden: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireItemcontrol fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireItemcontrol,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireItemcontrol:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireItemcontrol: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireMaxoccurs fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireMaxoccurs,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireMaxoccurs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireMaxoccurs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireMinoccurs fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireMinoccurs,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireMinoccurs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireMinoccurs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireOptionexclusive fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireOptionexclusive,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireOptionexclusive:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireOptionexclusive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireOptionprefix fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireOptionprefix,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireOptionprefix:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireOptionprefix: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireReferencefilter fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireReferencefilter,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireReferencefilter:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireReferencefilter: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireReferenceprofile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireReferenceprofile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireReferenceprofile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireReferenceprofile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireReferenceresource fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireReferenceresource,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireReferenceresource:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireReferenceresource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireSignaturerequired fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireSignaturerequired,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireSignaturerequired:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireSignaturerequired: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireSliderstepvalue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireSliderstepvalue,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireSliderstepvalue:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireSliderstepvalue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireSupportlink fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireSupportlink,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireSupportlink:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireSupportlink: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireUnit fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireUnit,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireUnit:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireUnit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireUnitoption fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireUnitoption,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireUnitoption:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireUnitoption: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireUnitvalueset fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireUnitvalueset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireUnitvalueset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireUnitvalueset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireUsagemode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireUsagemode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionQuestionnaireUsagemode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireUsagemode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireresponseAuthor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireresponseAuthor,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireresponseAuthor:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireresponseAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireresponseCompletionmode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireresponseCompletionmode,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireresponseCompletionmode:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireresponseCompletionmode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireresponseReason fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireresponseReason,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireresponseReason:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireresponseReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireresponseReviewer fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireresponseReviewer,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireresponseReviewer:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireresponseReviewer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionQuestionnaireresponseSignature fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionQuestionnaireresponseSignature,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionQuestionnaireresponseSignature:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionQuestionnaireresponseSignature: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRegex fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(ExtensionRegex);
    if (!result.success) {
      console.error("Validation failed for ExtensionRegex:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRegex: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRelativeDate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRelativeDate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRelativeDate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRelativeDate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRenderedValue fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRenderedValue,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRenderedValue:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRenderedValue: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRenderingMarkdown fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRenderingMarkdown,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRenderingMarkdown:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRenderingMarkdown: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRenderingStyle fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRenderingStyle,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRenderingStyle:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRenderingStyle: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRenderingStylesensitive fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRenderingStylesensitive,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRenderingStylesensitive:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRenderingStylesensitive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRenderingXhtml fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRenderingXhtml,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRenderingXhtml:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRenderingXhtml: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionReplaces fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionReplaces);
    if (!result.success) {
      console.error("Validation failed for ExtensionReplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionReplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestDonotperform fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestDonotperform,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestDonotperform:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestDonotperform: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestInsurance fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestInsurance,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestInsurance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestInsurance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestPerformerorder fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestPerformerorder,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestPerformerorder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestPerformerorder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestRelevanthistory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestRelevanthistory,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestRelevanthistory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestRelevanthistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestReplaces fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestReplaces,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestReplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestReplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionRequestStatusreason fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionRequestStatusreason,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionRequestStatusreason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionRequestStatusreason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionResourceApprovaldate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionResourceApprovaldate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionResourceApprovaldate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionResourceApprovaldate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionResourceEffectiveperiod fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionResourceEffectiveperiod,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionResourceEffectiveperiod:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionResourceEffectiveperiod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionResourceLastreviewdate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionResourceLastreviewdate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionResourceLastreviewdate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionResourceLastreviewdate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionResourcePertainstogoal fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionResourcePertainstogoal,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionResourcePertainstogoal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionResourcePertainstogoal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionServicerequestGeneticsitem fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionServicerequestGeneticsitem,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionServicerequestGeneticsitem:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionServicerequestGeneticsitem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionServicerequestPrecondition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionServicerequestPrecondition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionServicerequestPrecondition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionServicerequestPrecondition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionServicerequestQuestionnairerequest fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionServicerequestQuestionnairerequest,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionServicerequestQuestionnairerequest:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionServicerequestQuestionnairerequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionSpecimenCollectionpriority fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionSpecimenCollectionpriority,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionSpecimenCollectionpriority:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionSpecimenCollectionpriority: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionSpecimenIsdryweight fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionSpecimenIsdryweight,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionSpecimenIsdryweight:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionSpecimenIsdryweight: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionSpecimenProcessingtime fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionSpecimenProcessingtime,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionSpecimenProcessingtime:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionSpecimenProcessingtime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionSpecimenSequencenumber fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionSpecimenSequencenumber,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionSpecimenSequencenumber:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionSpecimenSequencenumber: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionSpecimenSpecialhandling fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionSpecimenSpecialhandling,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionSpecimenSpecialhandling:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionSpecimenSpecialhandling: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionAncestor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionAncestor,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionAncestor:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionAncestor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionApplicableVersion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionApplicableVersion,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionApplicableVersion:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionApplicableVersion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionCategory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionCodegenSuper fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionCodegenSuper,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionCodegenSuper:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionCodegenSuper: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionDependencies fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionDependencies,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionDependencies:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionDependencies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionDisplayHint fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionDisplayHint,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionDisplayHint:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionDisplayHint: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionExplicitTypeName fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionExplicitTypeName,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionExplicitTypeName:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionExplicitTypeName: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionFhirType fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionFhirType,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionFhirType:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionFhirType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionFmmNoWarnings fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionFmmNoWarnings,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionFmmNoWarnings:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionFmmNoWarnings: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionFmm fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionFmm,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionStructuredefinitionFmm:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionFmm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionHierarchy fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionHierarchy,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionHierarchy:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionHierarchy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionNormativeVersion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionNormativeVersion,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionNormativeVersion:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionNormativeVersion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionSecurityCategory fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionSecurityCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionSecurityCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionSecurityCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionStandardsStatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionStandardsStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionStandardsStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionStandardsStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionSummary fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionSummary,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionSummary:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionSummary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionTableName fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionTableName,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionTableName:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionTableName: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionTemplateStatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionTemplateStatus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionTemplateStatus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionTemplateStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionWg fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionWg,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionStructuredefinitionWg:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionWg: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionStructuredefinitionXmlNoOrder fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionStructuredefinitionXmlNoOrder,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionStructuredefinitionXmlNoOrder:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionStructuredefinitionXmlNoOrder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTaskCandidatelist fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionTaskCandidatelist,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionTaskCandidatelist:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTaskCandidatelist: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTaskReplaces fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionTaskReplaces,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionTaskReplaces:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTaskReplaces: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTimingDayofmonth fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionTimingDayofmonth,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionTimingDayofmonth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTimingDayofmonth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTimingDaysofcycle fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionTimingDaysofcycle,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionTimingDaysofcycle:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTimingDaysofcycle: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTimingExact fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionTimingExact);
    if (!result.success) {
      console.error("Validation failed for ExtensionTimingExact:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTimingExact: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTranslation fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionTranslation);
    if (!result.success) {
      console.error("Validation failed for ExtensionTranslation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTranslation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTzCode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(ExtensionTzCode);
    if (!result.success) {
      console.error("Validation failed for ExtensionTzCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTzCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionTzOffset fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionTzOffset);
    if (!result.success) {
      console.error("Validation failed for ExtensionTzOffset:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionTzOffset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionUsagecontextGroup fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionUsagecontextGroup,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionUsagecontextGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionUsagecontextGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetActivitystatusdate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetActivitystatusdate,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionValuesetActivitystatusdate:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetActivitystatusdate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetAuthor fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetAuthor,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetAuthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetAuthoritativesource fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetAuthoritativesource,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionValuesetAuthoritativesource:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetAuthoritativesource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetCasesensitive fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetCasesensitive,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetCasesensitive:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetCasesensitive: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetConceptComments fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetConceptComments,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetConceptComments:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetConceptComments: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetConceptDefinition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetConceptDefinition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionValuesetConceptDefinition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetConceptDefinition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetConceptorder fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetConceptorder,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetConceptorder:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetConceptorder: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetDeprecated fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetDeprecated,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetDeprecated:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetDeprecated: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetEffectivedate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetEffectivedate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetEffectivedate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetEffectivedate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExpandGroup fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExpandGroup,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExpandGroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExpandGroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExpandRules fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExpandRules,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExpandRules:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExpandRules: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExpansionsource fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExpansionsource,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExpansionsource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExpansionsource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExpirationdate fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExpirationdate,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExpirationdate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExpirationdate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExpression fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExpression,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExpression:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExpression: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetExtensible fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetExtensible,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetExtensible:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetExtensible: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetKeyword fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetKeyword,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetKeyword:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetKeyword: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetLabel fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetLabel,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetLabel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetLabel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetMap fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionValuesetMap);
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetMap:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetMap: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetOthername fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetOthername,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetOthername:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetOthername: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetParametersource fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetParametersource,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetParametersource:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetParametersource: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetReference fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetReference,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetReference:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetReference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetRulesText fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetRulesText,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetRulesText:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetRulesText: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSourcereference fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSourcereference,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSourcereference:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSourcereference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSpecialStatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSpecialStatus,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSpecialStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSpecialStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSteward fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSteward,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSteward:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSteward: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSupplement fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSupplement,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSupplement:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSupplement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSystem fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSystem,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSystem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSystem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSystemname fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSystemname,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSystemname:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSystemname: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetSystemref fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetSystemref,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetSystemref:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetSystemref: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetToocostly fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetToocostly,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetToocostly:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetToocostly: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetTrustedExpansion fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetTrustedExpansion,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetTrustedExpansion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetTrustedExpansion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetUnclosed fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetUnclosed,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetUnclosed:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetUnclosed: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetUsage fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetUsage,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetUsage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetUsage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetWarning fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetWarning,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetWarning:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetWarning: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionValuesetWorkflowstatus fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionValuesetWorkflowstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionValuesetWorkflowstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionValuesetWorkflowstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionVariable fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionVariable);
    if (!result.success) {
      console.error("Validation failed for ExtensionVariable:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionVariable: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowEpisodeofcare fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowEpisodeofcare,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowEpisodeofcare:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowEpisodeofcare: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowInstantiatescanonical fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowInstantiatescanonical,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ExtensionWorkflowInstantiatescanonical:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowInstantiatescanonical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowInstantiatesuri fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowInstantiatesuri,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowInstantiatesuri:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowInstantiatesuri: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowReasoncode fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowReasoncode,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowReasoncode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowReasoncode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowReasonreference fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowReasonreference,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowReasonreference:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowReasonreference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowRelatedartifact fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowRelatedartifact,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowRelatedartifact:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowRelatedartifact: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowResearchstudy fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowResearchstudy,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowResearchstudy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowResearchstudy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionWorkflowSupportinginfo fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ExtensionWorkflowSupportinginfo,
    );
    if (!result.success) {
      console.error("Validation failed for ExtensionWorkflowSupportinginfo:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionWorkflowSupportinginfo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ExtensionProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ExtensionProfile);
    if (!result.success) {
      console.error("Validation failed for ExtensionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ExtensionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FamilymemberhistoryGeneticProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      FamilymemberhistoryGeneticProfile,
    );
    if (!result.success) {
      console.error("Validation failed for FamilymemberhistoryGeneticProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FamilymemberhistoryGeneticProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Fivews fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(Fivews);
    if (!result.success) {
      console.error("Validation failed for Fivews:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Fivews: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FlagProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(FlagProfile);
    if (!result.success) {
      console.error("Validation failed for FlagProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FlagProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupdefinitionProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      GroupdefinitionProfile,
    );
    if (!result.success) {
      console.error("Validation failed for GroupdefinitionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupdefinitionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate HlaresultProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(HlaresultProfile);
    if (!result.success) {
      console.error("Validation failed for HlaresultProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for HlaresultProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate HumannameProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(HumannameProfile);
    if (!result.success) {
      console.error("Validation failed for HumannameProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for HumannameProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate IdProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(IdProfile);
    if (!result.success) {
      console.error("Validation failed for IdProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for IdProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate IdentifierProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(IdentifierProfile);
    if (!result.success) {
      console.error("Validation failed for IdentifierProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for IdentifierProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate InstantProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(InstantProfile);
    if (!result.success) {
      console.error("Validation failed for InstantProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for InstantProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate IntegerProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(IntegerProfile);
    if (!result.success) {
      console.error("Validation failed for IntegerProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for IntegerProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LinkageProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(LinkageProfile);
    if (!result.success) {
      console.error("Validation failed for LinkageProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LinkageProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LipidprofileProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(LipidprofileProfile);
    if (!result.success) {
      console.error("Validation failed for LipidprofileProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LipidprofileProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MarkdownProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(MarkdownProfile);
    if (!result.success) {
      console.error("Validation failed for MarkdownProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MarkdownProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MarketingstatusProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      MarketingstatusProfile,
    );
    if (!result.success) {
      console.error("Validation failed for MarketingstatusProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MarketingstatusProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductcontraindicationProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      MedicinalproductcontraindicationProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductcontraindicationProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductcontraindicationProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductinteractionProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      MedicinalproductinteractionProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductinteractionProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductinteractionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductmanufacturedProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      MedicinalproductmanufacturedProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductmanufacturedProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductmanufacturedProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductundesirableeffectProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      MedicinalproductundesirableeffectProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductundesirableeffectProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductundesirableeffectProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MetaProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(MetaProfile);
    if (!result.success) {
      console.error("Validation failed for MetaProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MetaProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MoneyProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(MoneyProfile);
    if (!result.success) {
      console.error("Validation failed for MoneyProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MoneyProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MoneyquantityProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(MoneyquantityProfile);
    if (!result.success) {
      console.error("Validation failed for MoneyquantityProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MoneyquantityProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NarrativeProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(NarrativeProfile);
    if (!result.success) {
      console.error("Validation failed for NarrativeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NarrativeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OidProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(OidProfile);
    if (!result.success) {
      console.error("Validation failed for OidProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OidProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      OperationoutcomeProfile,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationaffiliationProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      OrganizationaffiliationProfile,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationaffiliationProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationaffiliationProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ParameterdefinitionProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ParameterdefinitionProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ParameterdefinitionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ParameterdefinitionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ParametersProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ParametersProfile);
    if (!result.success) {
      console.error("Validation failed for ParametersProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ParametersProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PaymentnoticeProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(PaymentnoticeProfile);
    if (!result.success) {
      console.error("Validation failed for PaymentnoticeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PaymentnoticeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PeriodProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(PeriodProfile);
    if (!result.success) {
      console.error("Validation failed for PeriodProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PeriodProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PicoelementProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(PicoelementProfile);
    if (!result.success) {
      console.error("Validation failed for PicoelementProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PicoelementProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PopulationProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(PopulationProfile);
    if (!result.success) {
      console.error("Validation failed for PopulationProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PopulationProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PositiveintProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(PositiveintProfile);
    if (!result.success) {
      console.error("Validation failed for PositiveintProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PositiveintProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProdcharacteristicProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ProdcharacteristicProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ProdcharacteristicProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProdcharacteristicProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProductshelflifeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ProductshelflifeProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ProductshelflifeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProductshelflifeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceRelevantHistoryProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ProvenanceRelevantHistoryProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ProvenanceRelevantHistoryProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceRelevantHistoryProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuantityProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(QuantityProfile);
    if (!result.success) {
      console.error("Validation failed for QuantityProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuantityProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RangeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(RangeProfile);
    if (!result.success) {
      console.error("Validation failed for RangeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RangeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RatioProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(RatioProfile);
    if (!result.success) {
      console.error("Validation failed for RatioProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RatioProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ReferenceProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(ReferenceProfile);
    if (!result.success) {
      console.error("Validation failed for ReferenceProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ReferenceProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedartifactProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      RelatedartifactProfile,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedartifactProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedartifactProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Request fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(Request);
    if (!result.success) {
      console.error("Validation failed for Request:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Request: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ResearchsubjectProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ResearchsubjectProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchsubjectProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchsubjectProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ResourceProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(ResourceProfile);
    if (!result.success) {
      console.error("Validation failed for ResourceProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResourceProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SampleddataProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(SampleddataProfile);
    if (!result.success) {
      console.error("Validation failed for SampleddataProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SampleddataProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScheduleProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(ScheduleProfile);
    if (!result.success) {
      console.error("Validation failed for ScheduleProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScheduleProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestGeneticsProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ServicerequestGeneticsProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestGeneticsProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestGeneticsProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ShareablelibraryProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      ShareablelibraryProfile,
    );
    if (!result.success) {
      console.error("Validation failed for ShareablelibraryProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ShareablelibraryProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SignatureProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(SignatureProfile);
    if (!result.success) {
      console.error("Validation failed for SignatureProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SignatureProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SimplequantityProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      SimplequantityProfile,
    );
    if (!result.success) {
      console.error("Validation failed for SimplequantityProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SimplequantityProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SlotProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(SlotProfile);
    if (!result.success) {
      console.error("Validation failed for SlotProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate StringProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(StringProfile);
    if (!result.success) {
      console.error("Validation failed for StringProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StringProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate StructuredefinitionExampleComposition fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      StructuredefinitionExampleComposition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for StructuredefinitionExampleComposition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StructuredefinitionExampleComposition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate StructuredefinitionExampleSectionLibrary fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      StructuredefinitionExampleSectionLibrary,
    );
    if (!result.success) {
      console.error(
        "Validation failed for StructuredefinitionExampleSectionLibrary:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StructuredefinitionExampleSectionLibrary: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubscriptionProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(SubscriptionProfile);
    if (!result.success) {
      console.error("Validation failed for SubscriptionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubscriptionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceamountProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      SubstanceamountProfile,
    );
    if (!result.success) {
      console.error("Validation failed for SubstanceamountProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceamountProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SynthesisProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(SynthesisProfile);
    if (!result.success) {
      console.error("Validation failed for SynthesisProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SynthesisProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TimeProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(TimeProfile);
    if (!result.success) {
      console.error("Validation failed for TimeProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TimeProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TriggerdefinitionProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(
      TriggerdefinitionProfile,
    );
    if (!result.success) {
      console.error("Validation failed for TriggerdefinitionProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TriggerdefinitionProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate UnsignedintProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(UnsignedintProfile);
    if (!result.success) {
      console.error("Validation failed for UnsignedintProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for UnsignedintProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate UriProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(UriProfile);
    if (!result.success) {
      console.error("Validation failed for UriProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for UriProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate UrlProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(UrlProfile);
    if (!result.success) {
      console.error("Validation failed for UrlProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for UrlProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate UsagecontextProfile fixture", () => {
    const result =
      createStructureDefinitionSchema().safeParse(UsagecontextProfile);
    if (!result.success) {
      console.error("Validation failed for UsagecontextProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for UsagecontextProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate UuidProfile fixture", () => {
    const result = createStructureDefinitionSchema().safeParse(UuidProfile);
    if (!result.success) {
      console.error("Validation failed for UuidProfile:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for UuidProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
