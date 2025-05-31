import { createQuestionnaireSchema } from "../../src";
import {
  AccountQuestionnaire,
  ActualgroupQuestionnaire,
  AdverseeventQuestionnaire,
  AllergyintoleranceQuestionnaire,
  AppointmentQuestionnaire,
  AppointmentresponseQuestionnaire,
  BasicQuestionnaire,
  BinaryQuestionnaire,
  BiologicallyderivedproductQuestionnaire,
  BodystructureQuestionnaire,
  BundleQuestionnaire,
  CareteamQuestionnaire,
  CatalogentryQuestionnaire,
  CdshooksguidanceresponseQuestionnaire,
  ChargeitemQuestionnaire,
  ChargeitemdefinitionQuestionnaire,
  ClinicalimpressionQuestionnaire,
  CommunicationQuestionnaire,
  CommunicationrequestQuestionnaire,
  CompartmentdefinitionQuestionnaire,
  ConditionQuestionnaire,
  CoverageQuestionnaire,
  CoverageeligibilityrequestQuestionnaire,
  CqllibraryQuestionnaire,
  DetectedissueQuestionnaire,
  DevicemetricQuestionnaire,
  DevicerequestQuestionnaire,
  DeviceusestatementQuestionnaire,
  DiagnosticreportGeneticsQuestionnaire,
  DiagnosticreportQuestionnaire,
  DocumentmanifestQuestionnaire,
  DocumentreferenceQuestionnaire,
  EndpointQuestionnaire,
  EnrollmentrequestQuestionnaire,
  EnrollmentresponseQuestionnaire,
  EpisodeofcareQuestionnaire,
  EventdefinitionQuestionnaire,
  EvidenceQuestionnaire,
  FamilymemberhistoryGeneticQuestionnaire,
  FamilymemberhistoryQuestionnaire,
  FlagQuestionnaire,
  GoalQuestionnaire,
  GraphdefinitionQuestionnaire,
  GroupQuestionnaire,
  GroupdefinitionQuestionnaire,
  GuidanceresponseQuestionnaire,
  HealthcareserviceQuestionnaire,
  HlaresultQuestionnaire,
  ImagingstudyQuestionnaire,
  ImmunizationevaluationQuestionnaire,
  ImmunizationrecommendationQuestionnaire,
  InvoiceQuestionnaire,
  LibraryQuestionnaire,
  LinkageQuestionnaire,
  LipidprofileQuestionnaire,
  ListQuestionnaire,
  LocationQuestionnaire,
  MediaQuestionnaire,
  MedicationQuestionnaire,
  MedicationadministrationQuestionnaire,
  MedicationdispenseQuestionnaire,
  MedicationstatementQuestionnaire,
  MedicinalproductauthorizationQuestionnaire,
  MedicinalproductcontraindicationQuestionnaire,
  MedicinalproductindicationQuestionnaire,
  MedicinalproductingredientQuestionnaire,
  MedicinalproductinteractionQuestionnaire,
  MedicinalproductmanufacturedQuestionnaire,
  MedicinalproductpackagedQuestionnaire,
  MedicinalproductpharmaceuticalQuestionnaire,
  MedicinalproductundesirableeffectQuestionnaire,
  MessagedefinitionQuestionnaire,
  MessageheaderQuestionnaire,
  NamingsystemQuestionnaire,
  ObservationdefinitionQuestionnaire,
  OperationoutcomeQuestionnaire,
  OrganizationQuestionnaire,
  OrganizationaffiliationQuestionnaire,
  PatientQuestionnaire,
  PaymentnoticeQuestionnaire,
  PaymentreconciliationQuestionnaire,
  PersonQuestionnaire,
  PractitionerQuestionnaire,
  PractitionerroleQuestionnaire,
  ProcedureQuestionnaire,
  ProvenanceQuestionnaire,
  ProvenanceRelevantHistoryQuestionnaire,
  QuestionnaireCqfExample,
  QuestionnaireExampleBluebook,
  QuestionnaireExampleF201Lifelines,
  QuestionnaireExampleGcs,
  QuestionnaireExample,
  QuestionnaireZikaVirusExposureAssessment,
  QuestionnaireresponseQuestionnaire,
  RelatedpersonQuestionnaire,
  ResearchdefinitionQuestionnaire,
  ResearchstudyQuestionnaire,
  ResearchsubjectQuestionnaire,
  RiskassessmentQuestionnaire,
  ScheduleQuestionnaire,
  SearchparameterQuestionnaire,
  ServicerequestGeneticsQuestionnaire,
  ServicerequestQuestionnaire,
  ShareablelibraryQuestionnaire,
  SlotQuestionnaire,
  SpecimenQuestionnaire,
  SpecimendefinitionQuestionnaire,
  StructuredefinitionQuestionnaire,
  SubscriptionQuestionnaire,
  SubstanceQuestionnaire,
  SubstancenucleicacidQuestionnaire,
  SubstancepolymerQuestionnaire,
  SubstanceproteinQuestionnaire,
  SubstancereferenceinformationQuestionnaire,
  SupplydeliveryQuestionnaire,
  SupplyrequestQuestionnaire,
  SynthesisQuestionnaire,
} from "./fixture";
import { z } from "zod/v4";

describe("Questionnaire Schema Validation", () => {
  it("should validate AccountQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(AccountQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for AccountQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AccountQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActualgroupQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ActualgroupQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ActualgroupQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActualgroupQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AdverseeventQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      AdverseeventQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for AdverseeventQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AdverseeventQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AllergyintoleranceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      AllergyintoleranceQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for AllergyintoleranceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AllergyintoleranceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      AppointmentQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentresponseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      AppointmentresponseQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentresponseQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentresponseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BasicQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(BasicQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for BasicQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BasicQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BinaryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(BinaryQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for BinaryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BinaryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BiologicallyderivedproductQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      BiologicallyderivedproductQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for BiologicallyderivedproductQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BiologicallyderivedproductQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BodystructureQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      BodystructureQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for BodystructureQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BodystructureQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BundleQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(BundleQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for BundleQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BundleQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CareteamQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(CareteamQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for CareteamQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareteamQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CatalogentryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CatalogentryQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for CatalogentryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CatalogentryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CdshooksguidanceresponseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CdshooksguidanceresponseQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CdshooksguidanceresponseQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CdshooksguidanceresponseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ChargeitemQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ChargeitemQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ChargeitemQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ChargeitemQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ChargeitemdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ChargeitemdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ChargeitemdefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ChargeitemdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClinicalimpressionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ClinicalimpressionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ClinicalimpressionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClinicalimpressionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CommunicationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CommunicationQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for CommunicationQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CommunicationrequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CommunicationrequestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for CommunicationrequestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationrequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CompartmentdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CompartmentdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CompartmentdefinitionQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CompartmentdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConditionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ConditionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ConditionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConditionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(CoverageQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for CoverageQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CoverageeligibilityrequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CoverageeligibilityrequestQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CoverageeligibilityrequestQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CoverageeligibilityrequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CqllibraryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      CqllibraryQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for CqllibraryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CqllibraryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DetectedissueQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DetectedissueQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DetectedissueQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DetectedissueQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DevicemetricQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DevicemetricQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DevicemetricQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicemetricQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DevicerequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DevicerequestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DevicerequestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DevicerequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DeviceusestatementQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DeviceusestatementQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DeviceusestatementQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DeviceusestatementQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportGeneticsQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DiagnosticreportGeneticsQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportGeneticsQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportGeneticsQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DiagnosticreportQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DocumentmanifestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DocumentmanifestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentmanifestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentmanifestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DocumentreferenceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      DocumentreferenceQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for DocumentreferenceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DocumentreferenceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(EndpointQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for EndpointQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EnrollmentrequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      EnrollmentrequestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentrequestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentrequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EnrollmentresponseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      EnrollmentresponseQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for EnrollmentresponseQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EnrollmentresponseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EpisodeofcareQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      EpisodeofcareQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for EpisodeofcareQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EpisodeofcareQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EventdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      EventdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for EventdefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EventdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EvidenceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(EvidenceQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for EvidenceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EvidenceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FamilymemberhistoryGeneticQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      FamilymemberhistoryGeneticQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for FamilymemberhistoryGeneticQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FamilymemberhistoryGeneticQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FamilymemberhistoryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      FamilymemberhistoryQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for FamilymemberhistoryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FamilymemberhistoryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate FlagQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(FlagQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for FlagQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for FlagQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GoalQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(GoalQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for GoalQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GoalQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GraphdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      GraphdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for GraphdefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GraphdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(GroupQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for GroupQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      GroupdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for GroupdefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GuidanceresponseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      GuidanceresponseQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for GuidanceresponseQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GuidanceresponseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate HealthcareserviceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      HealthcareserviceQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for HealthcareserviceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for HealthcareserviceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate HlaresultQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      HlaresultQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for HlaresultQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for HlaresultQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImagingstudyQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ImagingstudyQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ImagingstudyQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImagingstudyQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationevaluationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ImmunizationevaluationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ImmunizationevaluationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationevaluationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ImmunizationrecommendationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ImmunizationrecommendationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ImmunizationrecommendationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ImmunizationrecommendationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate InvoiceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(InvoiceQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for InvoiceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for InvoiceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(LibraryQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for LibraryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LinkageQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(LinkageQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for LinkageQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LinkageQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LipidprofileQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      LipidprofileQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for LipidprofileQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LipidprofileQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(ListQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for ListQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(LocationQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for LocationQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MediaQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(MediaQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for MediaQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MediaQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicationQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for MedicationQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicationadministrationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicationadministrationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicationadministrationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicationadministrationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicationdispenseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicationdispenseQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for MedicationdispenseQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicationdispenseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicationstatementQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicationstatementQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for MedicationstatementQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicationstatementQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductauthorizationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductauthorizationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductauthorizationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductauthorizationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductcontraindicationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductcontraindicationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductcontraindicationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductcontraindicationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductindicationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductindicationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductindicationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductindicationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductingredientQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductingredientQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductingredientQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductingredientQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductinteractionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductinteractionQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductinteractionQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductinteractionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductmanufacturedQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductmanufacturedQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductmanufacturedQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductmanufacturedQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductpackagedQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductpackagedQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductpackagedQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductpackagedQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductpharmaceuticalQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductpharmaceuticalQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductpharmaceuticalQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductpharmaceuticalQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MedicinalproductundesirableeffectQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MedicinalproductundesirableeffectQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MedicinalproductundesirableeffectQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicinalproductundesirableeffectQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessagedefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MessagedefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for MessagedefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessagedefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessageheaderQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      MessageheaderQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for MessageheaderQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessageheaderQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NamingsystemQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      NamingsystemQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for NamingsystemQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NamingsystemQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ObservationdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationdefinitionQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      OperationoutcomeQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      OrganizationQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationaffiliationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      OrganizationaffiliationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OrganizationaffiliationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationaffiliationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PatientQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(PatientQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for PatientQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PatientQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PaymentnoticeQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      PaymentnoticeQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for PaymentnoticeQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PaymentnoticeQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PaymentreconciliationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      PaymentreconciliationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PaymentreconciliationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PaymentreconciliationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PersonQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(PersonQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for PersonQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      PractitionerQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerroleQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      PractitionerroleQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerroleQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerroleQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ProcedureQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ProvenanceQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ProvenanceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceRelevantHistoryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ProvenanceRelevantHistoryQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ProvenanceRelevantHistoryQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceRelevantHistoryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireCqfExample fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireCqfExample,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireCqfExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireCqfExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireExampleBluebook fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireExampleBluebook,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireExampleBluebook:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireExampleBluebook: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireExampleF201Lifelines fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireExampleF201Lifelines,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireExampleF201Lifelines:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireExampleF201Lifelines: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireExampleGcs fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireExampleGcs,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireExampleGcs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireExampleGcs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireExample fixture", () => {
    const result = createQuestionnaireSchema().safeParse(QuestionnaireExample);
    if (!result.success) {
      console.error("Validation failed for QuestionnaireExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireZikaVirusExposureAssessment fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireZikaVirusExposureAssessment,
    );
    if (!result.success) {
      console.error(
        "Validation failed for QuestionnaireZikaVirusExposureAssessment:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireZikaVirusExposureAssessment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireresponseQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      QuestionnaireresponseQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for QuestionnaireresponseQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RelatedpersonQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      RelatedpersonQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for RelatedpersonQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RelatedpersonQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ResearchdefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ResearchdefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchdefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchdefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ResearchstudyQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ResearchstudyQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchstudyQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchstudyQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ResearchsubjectQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ResearchsubjectQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ResearchsubjectQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ResearchsubjectQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RiskassessmentQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      RiskassessmentQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for RiskassessmentQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RiskassessmentQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScheduleQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(ScheduleQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for ScheduleQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScheduleQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SearchparameterQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SearchparameterQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SearchparameterQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SearchparameterQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestGeneticsQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ServicerequestGeneticsQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ServicerequestGeneticsQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestGeneticsQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ServicerequestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ShareablelibraryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      ShareablelibraryQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for ShareablelibraryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ShareablelibraryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SlotQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(SlotQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for SlotQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimenQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(SpecimenQuestionnaire);
    if (!result.success) {
      console.error("Validation failed for SpecimenQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimenQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SpecimendefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SpecimendefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SpecimendefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimendefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate StructuredefinitionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      StructuredefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for StructuredefinitionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for StructuredefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubscriptionQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubscriptionQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SubscriptionQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubscriptionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubstanceQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SubstanceQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancenucleicacidQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubstancenucleicacidQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancenucleicacidQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancenucleicacidQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancepolymerQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubstancepolymerQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SubstancepolymerQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancepolymerQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstanceproteinQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubstanceproteinQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SubstanceproteinQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstanceproteinQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SubstancereferenceinformationQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SubstancereferenceinformationQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SubstancereferenceinformationQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SubstancereferenceinformationQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SupplydeliveryQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SupplydeliveryQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SupplydeliveryQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SupplydeliveryQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SupplyrequestQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SupplyrequestQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SupplyrequestQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SupplyrequestQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SynthesisQuestionnaire fixture", () => {
    const result = createQuestionnaireSchema().safeParse(
      SynthesisQuestionnaire,
    );
    if (!result.success) {
      console.error("Validation failed for SynthesisQuestionnaire:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SynthesisQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
