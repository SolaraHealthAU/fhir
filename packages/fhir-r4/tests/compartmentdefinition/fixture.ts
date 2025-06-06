import type { CompartmentDefinition } from "../../src/v4.0.1/compartmentdefinition/types";

export const CompartmentdefinitionDevice: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "device",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>\r\nThe following resources may be in this compartment:\r\n</p>\r\n<table class="grid">\r\n <tr><td><b>Resource</b></td><td><b>Inclusion Criteria</b></td></tr>\r\n <tr><td><a href="account.html">Account</a></td><td>subject</td></tr>\r\n <tr><td><a href="appointment.html">Appointment</a></td><td>actor</td></tr>\r\n <tr><td><a href="appointmentresponse.html">AppointmentResponse</a></td><td>actor</td></tr>\r\n <tr><td><a href="auditevent.html">AuditEvent</a></td><td>agent</td></tr>\r\n <tr><td><a href="chargeitem.html">ChargeItem</a></td><td>enterer, performer-actor</td></tr>\r\n <tr><td><a href="claim.html">Claim</a></td><td>procedure-udi, item-udi, detail-udi, subdetail-udi</td></tr>\r\n <tr><td><a href="communication.html">Communication</a></td><td>sender, recipient</td></tr>\r\n <tr><td><a href="communicationrequest.html">CommunicationRequest</a></td><td>sender, recipient</td></tr>\r\n <tr><td><a href="composition.html">Composition</a></td><td>author</td></tr>\r\n <tr><td><a href="detectedissue.html">DetectedIssue</a></td><td>author</td></tr>\r\n <tr><td><a href="devicerequest.html">DeviceRequest</a></td><td>device, subject, requester, performer</td></tr>\r\n <tr><td><a href="deviceusestatement.html">DeviceUseStatement</a></td><td>device</td></tr>\r\n <tr><td><a href="diagnosticreport.html">DiagnosticReport</a></td><td>subject</td></tr>\r\n <tr><td><a href="documentmanifest.html">DocumentManifest</a></td><td>subject, author</td></tr>\r\n <tr><td><a href="documentreference.html">DocumentReference</a></td><td>subject, author</td></tr>\r\n <tr><td><a href="explanationofbenefit.html">ExplanationOfBenefit</a></td><td>procedure-udi, item-udi, detail-udi, subdetail-udi</td></tr>\r\n <tr><td><a href="flag.html">Flag</a></td><td>author</td></tr>\r\n <tr><td><a href="group.html">Group</a></td><td>member</td></tr>\r\n <tr><td><a href="invoice.html">Invoice</a></td><td>participant</td></tr>\r\n <tr><td><a href="list.html">List</a></td><td>subject, source</td></tr>\r\n <tr><td><a href="media.html">Media</a></td><td>subject</td></tr>\r\n <tr><td><a href="medicationadministration.html">MedicationAdministration</a></td><td>device</td></tr>\r\n <tr><td><a href="messageheader.html">MessageHeader</a></td><td>target</td></tr>\r\n <tr><td><a href="observation.html">Observation</a></td><td>subject, device</td></tr>\r\n <tr><td><a href="provenance.html">Provenance</a></td><td>agent</td></tr>\r\n <tr><td><a href="questionnaireresponse.html">QuestionnaireResponse</a></td><td>author</td></tr>\r\n <tr><td><a href="requestgroup.html">RequestGroup</a></td><td>author</td></tr>\r\n <tr><td><a href="riskassessment.html">RiskAssessment</a></td><td>performer</td></tr>\r\n <tr><td><a href="schedule.html">Schedule</a></td><td>actor</td></tr>\r\n <tr><td><a href="servicerequest.html">ServiceRequest</a></td><td>performer, requester</td></tr>\r\n <tr><td><a href="specimen.html">Specimen</a></td><td>subject</td></tr>\r\n <tr><td><a href="supplyrequest.html">SupplyRequest</a></td><td>requester</td></tr>\r\n</table>\r\n<p>\r\nA resource is in this compartment if the nominated search parameter (or chain) refers to the patient resource that defines the compartment.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<p>\r\nThe following resources are never in this compartment:\r\n</p>\r\n<ul>\r\n <li><a href="activitydefinition.html">ActivityDefinition</a></li>\r\n <li><a href="adverseevent.html">AdverseEvent</a></li>\r\n <li><a href="allergyintolerance.html">AllergyIntolerance</a></li>\r\n <li><a href="basic.html">Basic</a></li>\r\n <li><a href="binary.html">Binary</a></li>\r\n <li><a href="biologicallyderivedproduct.html">BiologicallyDerivedProduct</a></li>\r\n <li><a href="bodystructure.html">BodyStructure</a></li>\r\n <li><a href="bundle.html">Bundle</a></li>\r\n <li><a href="capabilitystatement.html">CapabilityStatement</a></li>\r\n <li><a href="careplan.html">CarePlan</a></li>\r\n <li><a href="careteam.html">CareTeam</a></li>\r\n <li><a href="catalogentry.html">CatalogEntry</a></li>\r\n <li><a href="chargeitemdefinition.html">ChargeItemDefinition</a></li>\r\n <li><a href="claimresponse.html">ClaimResponse</a></li>\r\n <li><a href="clinicalimpression.html">ClinicalImpression</a></li>\r\n <li><a href="codesystem.html">CodeSystem</a></li>\r\n <li><a href="compartmentdefinition.html">CompartmentDefinition</a></li>\r\n <li><a href="conceptmap.html">ConceptMap</a></li>\r\n <li><a href="condition.html">Condition</a></li>\r\n <li><a href="consent.html">Consent</a></li>\r\n <li><a href="contract.html">Contract</a></li>\r\n <li><a href="coverage.html">Coverage</a></li>\r\n <li><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></li>\r\n <li><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></li>\r\n <li><a href="device.html">Device</a></li>\r\n <li><a href="devicedefinition.html">DeviceDefinition</a></li>\r\n <li><a href="devicemetric.html">DeviceMetric</a></li>\r\n <li><a href="effectevidencesynthesis.html">EffectEvidenceSynthesis</a></li>\r\n <li><a href="encounter.html">Encounter</a></li>\r\n <li><a href="endpoint.html">Endpoint</a></li>\r\n <li><a href="enrollmentrequest.html">EnrollmentRequest</a></li>\r\n <li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>\r\n <li><a href="episodeofcare.html">EpisodeOfCare</a></li>\r\n <li><a href="eventdefinition.html">EventDefinition</a></li>\r\n <li><a href="evidence.html">Evidence</a></li>\r\n <li><a href="evidencevariable.html">EvidenceVariable</a></li>\r\n <li><a href="examplescenario.html">ExampleScenario</a></li>\r\n <li><a href="familymemberhistory.html">FamilyMemberHistory</a></li>\r\n <li><a href="goal.html">Goal</a></li>\r\n <li><a href="graphdefinition.html">GraphDefinition</a></li>\r\n <li><a href="guidanceresponse.html">GuidanceResponse</a></li>\r\n <li><a href="healthcareservice.html">HealthcareService</a></li>\r\n <li><a href="imagingstudy.html">ImagingStudy</a></li>\r\n <li><a href="immunization.html">Immunization</a></li>\r\n <li><a href="immunizationevaluation.html">ImmunizationEvaluation</a></li>\r\n <li><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></li>\r\n <li><a href="implementationguide.html">ImplementationGuide</a></li>\r\n <li><a href="insuranceplan.html">InsurancePlan</a></li>\r\n <li><a href="library.html">Library</a></li>\r\n <li><a href="linkage.html">Linkage</a></li>\r\n <li><a href="location.html">Location</a></li>\r\n <li><a href="measure.html">Measure</a></li>\r\n <li><a href="measurereport.html">MeasureReport</a></li>\r\n <li><a href="medication.html">Medication</a></li>\r\n <li><a href="medicationdispense.html">MedicationDispense</a></li>\r\n <li><a href="medicationknowledge.html">MedicationKnowledge</a></li>\r\n <li><a href="medicationrequest.html">MedicationRequest</a></li>\r\n <li><a href="medicationstatement.html">MedicationStatement</a></li>\r\n <li><a href="medicinalproduct.html">MedicinalProduct</a></li>\r\n <li><a href="medicinalproductauthorization.html">MedicinalProductAuthorization</a></li>\r\n <li><a href="medicinalproductcontraindication.html">MedicinalProductContraindication</a></li>\r\n <li><a href="medicinalproductindication.html">MedicinalProductIndication</a></li>\r\n <li><a href="medicinalproductingredient.html">MedicinalProductIngredient</a></li>\r\n <li><a href="medicinalproductinteraction.html">MedicinalProductInteraction</a></li>\r\n <li><a href="medicinalproductmanufactured.html">MedicinalProductManufactured</a></li>\r\n <li><a href="medicinalproductpackaged.html">MedicinalProductPackaged</a></li>\r\n <li><a href="medicinalproductpharmaceutical.html">MedicinalProductPharmaceutical</a></li>\r\n <li><a href="medicinalproductundesirableeffect.html">MedicinalProductUndesirableEffect</a></li>\r\n <li><a href="messagedefinition.html">MessageDefinition</a></li>\r\n <li><a href="molecularsequence.html">MolecularSequence</a></li>\r\n <li><a href="namingsystem.html">NamingSystem</a></li>\r\n <li><a href="nutritionorder.html">NutritionOrder</a></li>\r\n <li><a href="observationdefinition.html">ObservationDefinition</a></li>\r\n <li><a href="operationdefinition.html">OperationDefinition</a></li>\r\n <li><a href="operationoutcome.html">OperationOutcome</a></li>\r\n <li><a href="organization.html">Organization</a></li>\r\n <li><a href="organizationaffiliation.html">OrganizationAffiliation</a></li>\r\n <li><a href="patient.html">Patient</a></li>\r\n <li><a href="paymentnotice.html">PaymentNotice</a></li>\r\n <li><a href="paymentreconciliation.html">PaymentReconciliation</a></li>\r\n <li><a href="person.html">Person</a></li>\r\n <li><a href="plandefinition.html">PlanDefinition</a></li>\r\n <li><a href="practitioner.html">Practitioner</a></li>\r\n <li><a href="practitionerrole.html">PractitionerRole</a></li>\r\n <li><a href="procedure.html">Procedure</a></li>\r\n <li><a href="questionnaire.html">Questionnaire</a></li>\r\n <li><a href="relatedperson.html">RelatedPerson</a></li>\r\n <li><a href="researchdefinition.html">ResearchDefinition</a></li>\r\n <li><a href="researchelementdefinition.html">ResearchElementDefinition</a></li>\r\n <li><a href="researchstudy.html">ResearchStudy</a></li>\r\n <li><a href="researchsubject.html">ResearchSubject</a></li>\r\n <li><a href="riskevidencesynthesis.html">RiskEvidenceSynthesis</a></li>\r\n <li><a href="searchparameter.html">SearchParameter</a></li>\r\n <li><a href="slot.html">Slot</a></li>\r\n <li><a href="specimendefinition.html">SpecimenDefinition</a></li>\r\n <li><a href="structuredefinition.html">StructureDefinition</a></li>\r\n <li><a href="structuremap.html">StructureMap</a></li>\r\n <li><a href="subscription.html">Subscription</a></li>\r\n <li><a href="substance.html">Substance</a></li>\r\n <li><a href="substancenucleicacid.html">SubstanceNucleicAcid</a></li>\r\n <li><a href="substancepolymer.html">SubstancePolymer</a></li>\r\n <li><a href="substanceprotein.html">SubstanceProtein</a></li>\r\n <li><a href="substancereferenceinformation.html">SubstanceReferenceInformation</a></li>\r\n <li><a href="substancesourcematerial.html">SubstanceSourceMaterial</a></li>\r\n <li><a href="substancespecification.html">SubstanceSpecification</a></li>\r\n <li><a href="supplydelivery.html">SupplyDelivery</a></li>\r\n <li><a href="task.html">Task</a></li>\r\n <li><a href="terminologycapabilities.html">TerminologyCapabilities</a></li>\r\n <li><a href="testreport.html">TestReport</a></li>\r\n <li><a href="testscript.html">TestScript</a></li>\r\n <li><a href="valueset.html">ValueSet</a></li>\r\n <li><a href="verificationresult.html">VerificationResult</a></li>\r\n <li><a href="visionprescription.html">VisionPrescription</a></li>\r\n</ul></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/device",
  version: "4.0.1",
  name: "Base FHIR compartment definition for Device",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "There is an instance of the device compartment for each Device resource, and the identity of the compartment is the same as the Device. The set of resources associated with a particular device",
  code: "Device",
  search: true,
  resource: [
    {
      code: "Account",
      param: ["subject"],
    },
    {
      code: "ActivityDefinition",
    },
    {
      code: "AdverseEvent",
    },
    {
      code: "AllergyIntolerance",
    },
    {
      code: "Appointment",
      param: ["actor"],
    },
    {
      code: "AppointmentResponse",
      param: ["actor"],
    },
    {
      code: "AuditEvent",
      param: ["agent"],
    },
    {
      code: "Basic",
    },
    {
      code: "Binary",
    },
    {
      code: "BiologicallyDerivedProduct",
    },
    {
      code: "BodyStructure",
    },
    {
      code: "Bundle",
    },
    {
      code: "CapabilityStatement",
    },
    {
      code: "CarePlan",
    },
    {
      code: "CareTeam",
    },
    {
      code: "CatalogEntry",
    },
    {
      code: "ChargeItem",
      param: ["enterer", "performer-actor"],
    },
    {
      code: "ChargeItemDefinition",
    },
    {
      code: "Claim",
      param: ["procedure-udi", "item-udi", "detail-udi", "subdetail-udi"],
    },
    {
      code: "ClaimResponse",
    },
    {
      code: "ClinicalImpression",
    },
    {
      code: "CodeSystem",
    },
    {
      code: "Communication",
      param: ["sender", "recipient"],
    },
    {
      code: "CommunicationRequest",
      param: ["sender", "recipient"],
    },
    {
      code: "CompartmentDefinition",
    },
    {
      code: "Composition",
      param: ["author"],
    },
    {
      code: "ConceptMap",
    },
    {
      code: "Condition",
    },
    {
      code: "Consent",
    },
    {
      code: "Contract",
    },
    {
      code: "Coverage",
    },
    {
      code: "CoverageEligibilityRequest",
    },
    {
      code: "CoverageEligibilityResponse",
    },
    {
      code: "DetectedIssue",
      param: ["author"],
    },
    {
      code: "Device",
    },
    {
      code: "DeviceDefinition",
    },
    {
      code: "DeviceMetric",
    },
    {
      code: "DeviceRequest",
      param: ["device", "subject", "requester", "performer"],
    },
    {
      code: "DeviceUseStatement",
      param: ["device"],
    },
    {
      code: "DiagnosticReport",
      param: ["subject"],
    },
    {
      code: "DocumentManifest",
      param: ["subject", "author"],
    },
    {
      code: "DocumentReference",
      param: ["subject", "author"],
    },
    {
      code: "EffectEvidenceSynthesis",
    },
    {
      code: "Encounter",
    },
    {
      code: "Endpoint",
    },
    {
      code: "EnrollmentRequest",
    },
    {
      code: "EnrollmentResponse",
    },
    {
      code: "EpisodeOfCare",
    },
    {
      code: "EventDefinition",
    },
    {
      code: "Evidence",
    },
    {
      code: "EvidenceVariable",
    },
    {
      code: "ExampleScenario",
    },
    {
      code: "ExplanationOfBenefit",
      param: ["procedure-udi", "item-udi", "detail-udi", "subdetail-udi"],
    },
    {
      code: "FamilyMemberHistory",
    },
    {
      code: "Flag",
      param: ["author"],
    },
    {
      code: "Goal",
    },
    {
      code: "GraphDefinition",
    },
    {
      code: "Group",
      param: ["member"],
    },
    {
      code: "GuidanceResponse",
    },
    {
      code: "HealthcareService",
    },
    {
      code: "ImagingStudy",
    },
    {
      code: "Immunization",
    },
    {
      code: "ImmunizationEvaluation",
    },
    {
      code: "ImmunizationRecommendation",
    },
    {
      code: "ImplementationGuide",
    },
    {
      code: "InsurancePlan",
    },
    {
      code: "Invoice",
      param: ["participant"],
    },
    {
      code: "Library",
    },
    {
      code: "Linkage",
    },
    {
      code: "List",
      param: ["subject", "source"],
    },
    {
      code: "Location",
    },
    {
      code: "Measure",
    },
    {
      code: "MeasureReport",
    },
    {
      code: "Media",
      param: ["subject"],
    },
    {
      code: "Medication",
    },
    {
      code: "MedicationAdministration",
      param: ["device"],
    },
    {
      code: "MedicationDispense",
    },
    {
      code: "MedicationKnowledge",
    },
    {
      code: "MedicationRequest",
    },
    {
      code: "MedicationStatement",
    },
    {
      code: "MedicinalProduct",
    },
    {
      code: "MedicinalProductAuthorization",
    },
    {
      code: "MedicinalProductContraindication",
    },
    {
      code: "MedicinalProductIndication",
    },
    {
      code: "MedicinalProductIngredient",
    },
    {
      code: "MedicinalProductInteraction",
    },
    {
      code: "MedicinalProductManufactured",
    },
    {
      code: "MedicinalProductPackaged",
    },
    {
      code: "MedicinalProductPharmaceutical",
    },
    {
      code: "MedicinalProductUndesirableEffect",
    },
    {
      code: "MessageDefinition",
    },
    {
      code: "MessageHeader",
      param: ["target"],
    },
    {
      code: "MolecularSequence",
    },
    {
      code: "NamingSystem",
    },
    {
      code: "NutritionOrder",
    },
    {
      code: "Observation",
      param: ["subject", "device"],
    },
    {
      code: "ObservationDefinition",
    },
    {
      code: "OperationDefinition",
    },
    {
      code: "OperationOutcome",
    },
    {
      code: "Organization",
    },
    {
      code: "OrganizationAffiliation",
    },
    {
      code: "Patient",
    },
    {
      code: "PaymentNotice",
    },
    {
      code: "PaymentReconciliation",
    },
    {
      code: "Person",
    },
    {
      code: "PlanDefinition",
    },
    {
      code: "Practitioner",
    },
    {
      code: "PractitionerRole",
    },
    {
      code: "Procedure",
    },
    {
      code: "Provenance",
      param: ["agent"],
    },
    {
      code: "Questionnaire",
    },
    {
      code: "QuestionnaireResponse",
      param: ["author"],
    },
    {
      code: "RelatedPerson",
    },
    {
      code: "RequestGroup",
      param: ["author"],
    },
    {
      code: "ResearchDefinition",
    },
    {
      code: "ResearchElementDefinition",
    },
    {
      code: "ResearchStudy",
    },
    {
      code: "ResearchSubject",
    },
    {
      code: "RiskAssessment",
      param: ["performer"],
    },
    {
      code: "RiskEvidenceSynthesis",
    },
    {
      code: "Schedule",
      param: ["actor"],
    },
    {
      code: "SearchParameter",
    },
    {
      code: "ServiceRequest",
      param: ["performer", "requester"],
    },
    {
      code: "Slot",
    },
    {
      code: "Specimen",
      param: ["subject"],
    },
    {
      code: "SpecimenDefinition",
    },
    {
      code: "StructureDefinition",
    },
    {
      code: "StructureMap",
    },
    {
      code: "Subscription",
    },
    {
      code: "Substance",
    },
    {
      code: "SubstanceNucleicAcid",
    },
    {
      code: "SubstancePolymer",
    },
    {
      code: "SubstanceProtein",
    },
    {
      code: "SubstanceReferenceInformation",
    },
    {
      code: "SubstanceSourceMaterial",
    },
    {
      code: "SubstanceSpecification",
    },
    {
      code: "SupplyDelivery",
    },
    {
      code: "SupplyRequest",
      param: ["requester"],
    },
    {
      code: "Task",
    },
    {
      code: "TerminologyCapabilities",
    },
    {
      code: "TestReport",
    },
    {
      code: "TestScript",
    },
    {
      code: "ValueSet",
    },
    {
      code: "VerificationResult",
    },
    {
      code: "VisionPrescription",
    },
  ],
} as const;

export const CompartmentdefinitionEncounter: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "encounter",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>\r\nThe following resources may be in this compartment:\r\n</p>\r\n<table class="grid">\r\n <tr><td><b>Resource</b></td><td><b>Inclusion Criteria</b></td></tr>\r\n <tr><td><a href="careplan.html">CarePlan</a></td><td>encounter</td></tr>\r\n <tr><td><a href="careteam.html">CareTeam</a></td><td>encounter</td></tr>\r\n <tr><td><a href="chargeitem.html">ChargeItem</a></td><td>context</td></tr>\r\n <tr><td><a href="claim.html">Claim</a></td><td>encounter</td></tr>\r\n <tr><td><a href="clinicalimpression.html">ClinicalImpression</a></td><td>encounter</td></tr>\r\n <tr><td><a href="communication.html">Communication</a></td><td>encounter</td></tr>\r\n <tr><td><a href="communicationrequest.html">CommunicationRequest</a></td><td>encounter</td></tr>\r\n <tr><td><a href="composition.html">Composition</a></td><td>encounter</td></tr>\r\n <tr><td><a href="condition.html">Condition</a></td><td>encounter</td></tr>\r\n <tr><td><a href="devicerequest.html">DeviceRequest</a></td><td>encounter</td></tr>\r\n <tr><td><a href="diagnosticreport.html">DiagnosticReport</a></td><td>encounter</td></tr>\r\n <tr><td><a href="documentmanifest.html">DocumentManifest</a></td><td>related-ref</td></tr>\r\n <tr><td><a href="documentreference.html">DocumentReference</a></td><td>encounter</td></tr>\r\n <tr><td><a href="encounter.html">Encounter</a></td><td>{def}</td></tr>\r\n <tr><td><a href="explanationofbenefit.html">ExplanationOfBenefit</a></td><td>encounter</td></tr>\r\n <tr><td><a href="media.html">Media</a></td><td>encounter</td></tr>\r\n <tr><td><a href="medicationadministration.html">MedicationAdministration</a></td><td>context</td></tr>\r\n <tr><td><a href="medicationrequest.html">MedicationRequest</a></td><td>encounter</td></tr>\r\n <tr><td><a href="nutritionorder.html">NutritionOrder</a></td><td>encounter</td></tr>\r\n <tr><td><a href="observation.html">Observation</a></td><td>encounter</td></tr>\r\n <tr><td><a href="procedure.html">Procedure</a></td><td>encounter</td></tr>\r\n <tr><td><a href="questionnaireresponse.html">QuestionnaireResponse</a></td><td>encounter</td></tr>\r\n <tr><td><a href="requestgroup.html">RequestGroup</a></td><td>encounter</td></tr>\r\n <tr><td><a href="servicerequest.html">ServiceRequest</a></td><td>encounter</td></tr>\r\n <tr><td><a href="visionprescription.html">VisionPrescription</a></td><td>encounter</td></tr>\r\n</table>\r\n<p>\r\nA resource is in this compartment if the nominated search parameter (or chain) refers to the patient resource that defines the compartment.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<p>\r\nThe following resources are never in this compartment:\r\n</p>\r\n<ul>\r\n <li><a href="account.html">Account</a></li>\r\n <li><a href="activitydefinition.html">ActivityDefinition</a></li>\r\n <li><a href="adverseevent.html">AdverseEvent</a></li>\r\n <li><a href="allergyintolerance.html">AllergyIntolerance</a></li>\r\n <li><a href="appointment.html">Appointment</a></li>\r\n <li><a href="appointmentresponse.html">AppointmentResponse</a></li>\r\n <li><a href="auditevent.html">AuditEvent</a></li>\r\n <li><a href="basic.html">Basic</a></li>\r\n <li><a href="binary.html">Binary</a></li>\r\n <li><a href="biologicallyderivedproduct.html">BiologicallyDerivedProduct</a></li>\r\n <li><a href="bodystructure.html">BodyStructure</a></li>\r\n <li><a href="bundle.html">Bundle</a></li>\r\n <li><a href="capabilitystatement.html">CapabilityStatement</a></li>\r\n <li><a href="catalogentry.html">CatalogEntry</a></li>\r\n <li><a href="chargeitemdefinition.html">ChargeItemDefinition</a></li>\r\n <li><a href="claimresponse.html">ClaimResponse</a></li>\r\n <li><a href="codesystem.html">CodeSystem</a></li>\r\n <li><a href="compartmentdefinition.html">CompartmentDefinition</a></li>\r\n <li><a href="conceptmap.html">ConceptMap</a></li>\r\n <li><a href="consent.html">Consent</a></li>\r\n <li><a href="contract.html">Contract</a></li>\r\n <li><a href="coverage.html">Coverage</a></li>\r\n <li><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></li>\r\n <li><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></li>\r\n <li><a href="detectedissue.html">DetectedIssue</a></li>\r\n <li><a href="device.html">Device</a></li>\r\n <li><a href="devicedefinition.html">DeviceDefinition</a></li>\r\n <li><a href="devicemetric.html">DeviceMetric</a></li>\r\n <li><a href="deviceusestatement.html">DeviceUseStatement</a></li>\r\n <li><a href="effectevidencesynthesis.html">EffectEvidenceSynthesis</a></li>\r\n <li><a href="endpoint.html">Endpoint</a></li>\r\n <li><a href="enrollmentrequest.html">EnrollmentRequest</a></li>\r\n <li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>\r\n <li><a href="episodeofcare.html">EpisodeOfCare</a></li>\r\n <li><a href="eventdefinition.html">EventDefinition</a></li>\r\n <li><a href="evidence.html">Evidence</a></li>\r\n <li><a href="evidencevariable.html">EvidenceVariable</a></li>\r\n <li><a href="examplescenario.html">ExampleScenario</a></li>\r\n <li><a href="familymemberhistory.html">FamilyMemberHistory</a></li>\r\n <li><a href="flag.html">Flag</a></li>\r\n <li><a href="goal.html">Goal</a></li>\r\n <li><a href="graphdefinition.html">GraphDefinition</a></li>\r\n <li><a href="group.html">Group</a></li>\r\n <li><a href="guidanceresponse.html">GuidanceResponse</a></li>\r\n <li><a href="healthcareservice.html">HealthcareService</a></li>\r\n <li><a href="imagingstudy.html">ImagingStudy</a></li>\r\n <li><a href="immunization.html">Immunization</a></li>\r\n <li><a href="immunizationevaluation.html">ImmunizationEvaluation</a></li>\r\n <li><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></li>\r\n <li><a href="implementationguide.html">ImplementationGuide</a></li>\r\n <li><a href="insuranceplan.html">InsurancePlan</a></li>\r\n <li><a href="invoice.html">Invoice</a></li>\r\n <li><a href="library.html">Library</a></li>\r\n <li><a href="linkage.html">Linkage</a></li>\r\n <li><a href="list.html">List</a></li>\r\n <li><a href="location.html">Location</a></li>\r\n <li><a href="measure.html">Measure</a></li>\r\n <li><a href="measurereport.html">MeasureReport</a></li>\r\n <li><a href="medication.html">Medication</a></li>\r\n <li><a href="medicationdispense.html">MedicationDispense</a></li>\r\n <li><a href="medicationknowledge.html">MedicationKnowledge</a></li>\r\n <li><a href="medicationstatement.html">MedicationStatement</a></li>\r\n <li><a href="medicinalproduct.html">MedicinalProduct</a></li>\r\n <li><a href="medicinalproductauthorization.html">MedicinalProductAuthorization</a></li>\r\n <li><a href="medicinalproductcontraindication.html">MedicinalProductContraindication</a></li>\r\n <li><a href="medicinalproductindication.html">MedicinalProductIndication</a></li>\r\n <li><a href="medicinalproductingredient.html">MedicinalProductIngredient</a></li>\r\n <li><a href="medicinalproductinteraction.html">MedicinalProductInteraction</a></li>\r\n <li><a href="medicinalproductmanufactured.html">MedicinalProductManufactured</a></li>\r\n <li><a href="medicinalproductpackaged.html">MedicinalProductPackaged</a></li>\r\n <li><a href="medicinalproductpharmaceutical.html">MedicinalProductPharmaceutical</a></li>\r\n <li><a href="medicinalproductundesirableeffect.html">MedicinalProductUndesirableEffect</a></li>\r\n <li><a href="messagedefinition.html">MessageDefinition</a></li>\r\n <li><a href="messageheader.html">MessageHeader</a></li>\r\n <li><a href="molecularsequence.html">MolecularSequence</a></li>\r\n <li><a href="namingsystem.html">NamingSystem</a></li>\r\n <li><a href="observationdefinition.html">ObservationDefinition</a></li>\r\n <li><a href="operationdefinition.html">OperationDefinition</a></li>\r\n <li><a href="operationoutcome.html">OperationOutcome</a></li>\r\n <li><a href="organization.html">Organization</a></li>\r\n <li><a href="organizationaffiliation.html">OrganizationAffiliation</a></li>\r\n <li><a href="patient.html">Patient</a></li>\r\n <li><a href="paymentnotice.html">PaymentNotice</a></li>\r\n <li><a href="paymentreconciliation.html">PaymentReconciliation</a></li>\r\n <li><a href="person.html">Person</a></li>\r\n <li><a href="plandefinition.html">PlanDefinition</a></li>\r\n <li><a href="practitioner.html">Practitioner</a></li>\r\n <li><a href="practitionerrole.html">PractitionerRole</a></li>\r\n <li><a href="provenance.html">Provenance</a></li>\r\n <li><a href="questionnaire.html">Questionnaire</a></li>\r\n <li><a href="relatedperson.html">RelatedPerson</a></li>\r\n <li><a href="researchdefinition.html">ResearchDefinition</a></li>\r\n <li><a href="researchelementdefinition.html">ResearchElementDefinition</a></li>\r\n <li><a href="researchstudy.html">ResearchStudy</a></li>\r\n <li><a href="researchsubject.html">ResearchSubject</a></li>\r\n <li><a href="riskassessment.html">RiskAssessment</a></li>\r\n <li><a href="riskevidencesynthesis.html">RiskEvidenceSynthesis</a></li>\r\n <li><a href="schedule.html">Schedule</a></li>\r\n <li><a href="searchparameter.html">SearchParameter</a></li>\r\n <li><a href="slot.html">Slot</a></li>\r\n <li><a href="specimen.html">Specimen</a></li>\r\n <li><a href="specimendefinition.html">SpecimenDefinition</a></li>\r\n <li><a href="structuredefinition.html">StructureDefinition</a></li>\r\n <li><a href="structuremap.html">StructureMap</a></li>\r\n <li><a href="subscription.html">Subscription</a></li>\r\n <li><a href="substance.html">Substance</a></li>\r\n <li><a href="substancenucleicacid.html">SubstanceNucleicAcid</a></li>\r\n <li><a href="substancepolymer.html">SubstancePolymer</a></li>\r\n <li><a href="substanceprotein.html">SubstanceProtein</a></li>\r\n <li><a href="substancereferenceinformation.html">SubstanceReferenceInformation</a></li>\r\n <li><a href="substancesourcematerial.html">SubstanceSourceMaterial</a></li>\r\n <li><a href="substancespecification.html">SubstanceSpecification</a></li>\r\n <li><a href="supplydelivery.html">SupplyDelivery</a></li>\r\n <li><a href="supplyrequest.html">SupplyRequest</a></li>\r\n <li><a href="task.html">Task</a></li>\r\n <li><a href="terminologycapabilities.html">TerminologyCapabilities</a></li>\r\n <li><a href="testreport.html">TestReport</a></li>\r\n <li><a href="testscript.html">TestScript</a></li>\r\n <li><a href="valueset.html">ValueSet</a></li>\r\n <li><a href="verificationresult.html">VerificationResult</a></li>\r\n</ul></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/encounter",
  version: "4.0.1",
  name: "Base FHIR compartment definition for Encounter",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "There is an instance of the encounter compartment for each encounter resource, and the identity of the compartment is the same as the encounter. The set of resources associated with a particular encounter",
  code: "Encounter",
  search: true,
  resource: [
    {
      code: "Account",
    },
    {
      code: "ActivityDefinition",
    },
    {
      code: "AdverseEvent",
    },
    {
      code: "AllergyIntolerance",
    },
    {
      code: "Appointment",
    },
    {
      code: "AppointmentResponse",
    },
    {
      code: "AuditEvent",
    },
    {
      code: "Basic",
    },
    {
      code: "Binary",
    },
    {
      code: "BiologicallyDerivedProduct",
    },
    {
      code: "BodyStructure",
    },
    {
      code: "Bundle",
    },
    {
      code: "CapabilityStatement",
    },
    {
      code: "CarePlan",
      param: ["encounter"],
    },
    {
      code: "CareTeam",
      param: ["encounter"],
    },
    {
      code: "CatalogEntry",
    },
    {
      code: "ChargeItem",
      param: ["context"],
    },
    {
      code: "ChargeItemDefinition",
    },
    {
      code: "Claim",
      param: ["encounter"],
    },
    {
      code: "ClaimResponse",
    },
    {
      code: "ClinicalImpression",
      param: ["encounter"],
    },
    {
      code: "CodeSystem",
    },
    {
      code: "Communication",
      param: ["encounter"],
    },
    {
      code: "CommunicationRequest",
      param: ["encounter"],
    },
    {
      code: "CompartmentDefinition",
    },
    {
      code: "Composition",
      param: ["encounter"],
    },
    {
      code: "ConceptMap",
    },
    {
      code: "Condition",
      param: ["encounter"],
    },
    {
      code: "Consent",
    },
    {
      code: "Contract",
    },
    {
      code: "Coverage",
    },
    {
      code: "CoverageEligibilityRequest",
    },
    {
      code: "CoverageEligibilityResponse",
    },
    {
      code: "DetectedIssue",
    },
    {
      code: "Device",
    },
    {
      code: "DeviceDefinition",
    },
    {
      code: "DeviceMetric",
    },
    {
      code: "DeviceRequest",
      param: ["encounter"],
    },
    {
      code: "DeviceUseStatement",
    },
    {
      code: "DiagnosticReport",
      param: ["encounter"],
    },
    {
      code: "DocumentManifest",
      param: ["related-ref"],
    },
    {
      code: "DocumentReference",
      param: ["encounter"],
    },
    {
      code: "EffectEvidenceSynthesis",
    },
    {
      code: "Encounter",
      param: ["{def}"],
    },
    {
      code: "Endpoint",
    },
    {
      code: "EnrollmentRequest",
    },
    {
      code: "EnrollmentResponse",
    },
    {
      code: "EpisodeOfCare",
    },
    {
      code: "EventDefinition",
    },
    {
      code: "Evidence",
    },
    {
      code: "EvidenceVariable",
    },
    {
      code: "ExampleScenario",
    },
    {
      code: "ExplanationOfBenefit",
      param: ["encounter"],
    },
    {
      code: "FamilyMemberHistory",
    },
    {
      code: "Flag",
    },
    {
      code: "Goal",
    },
    {
      code: "GraphDefinition",
    },
    {
      code: "Group",
    },
    {
      code: "GuidanceResponse",
    },
    {
      code: "HealthcareService",
    },
    {
      code: "ImagingStudy",
    },
    {
      code: "Immunization",
    },
    {
      code: "ImmunizationEvaluation",
    },
    {
      code: "ImmunizationRecommendation",
    },
    {
      code: "ImplementationGuide",
    },
    {
      code: "InsurancePlan",
    },
    {
      code: "Invoice",
    },
    {
      code: "Library",
    },
    {
      code: "Linkage",
    },
    {
      code: "List",
    },
    {
      code: "Location",
    },
    {
      code: "Measure",
    },
    {
      code: "MeasureReport",
    },
    {
      code: "Media",
      param: ["encounter"],
    },
    {
      code: "Medication",
    },
    {
      code: "MedicationAdministration",
      param: ["context"],
    },
    {
      code: "MedicationDispense",
    },
    {
      code: "MedicationKnowledge",
    },
    {
      code: "MedicationRequest",
      param: ["encounter"],
    },
    {
      code: "MedicationStatement",
    },
    {
      code: "MedicinalProduct",
    },
    {
      code: "MedicinalProductAuthorization",
    },
    {
      code: "MedicinalProductContraindication",
    },
    {
      code: "MedicinalProductIndication",
    },
    {
      code: "MedicinalProductIngredient",
    },
    {
      code: "MedicinalProductInteraction",
    },
    {
      code: "MedicinalProductManufactured",
    },
    {
      code: "MedicinalProductPackaged",
    },
    {
      code: "MedicinalProductPharmaceutical",
    },
    {
      code: "MedicinalProductUndesirableEffect",
    },
    {
      code: "MessageDefinition",
    },
    {
      code: "MessageHeader",
    },
    {
      code: "MolecularSequence",
    },
    {
      code: "NamingSystem",
    },
    {
      code: "NutritionOrder",
      param: ["encounter"],
    },
    {
      code: "Observation",
      param: ["encounter"],
    },
    {
      code: "ObservationDefinition",
    },
    {
      code: "OperationDefinition",
    },
    {
      code: "OperationOutcome",
    },
    {
      code: "Organization",
    },
    {
      code: "OrganizationAffiliation",
    },
    {
      code: "Patient",
    },
    {
      code: "PaymentNotice",
    },
    {
      code: "PaymentReconciliation",
    },
    {
      code: "Person",
    },
    {
      code: "PlanDefinition",
    },
    {
      code: "Practitioner",
    },
    {
      code: "PractitionerRole",
    },
    {
      code: "Procedure",
      param: ["encounter"],
    },
    {
      code: "Provenance",
    },
    {
      code: "Questionnaire",
    },
    {
      code: "QuestionnaireResponse",
      param: ["encounter"],
    },
    {
      code: "RelatedPerson",
    },
    {
      code: "RequestGroup",
      param: ["encounter"],
    },
    {
      code: "ResearchDefinition",
    },
    {
      code: "ResearchElementDefinition",
    },
    {
      code: "ResearchStudy",
    },
    {
      code: "ResearchSubject",
    },
    {
      code: "RiskAssessment",
    },
    {
      code: "RiskEvidenceSynthesis",
    },
    {
      code: "Schedule",
    },
    {
      code: "SearchParameter",
    },
    {
      code: "ServiceRequest",
      param: ["encounter"],
    },
    {
      code: "Slot",
    },
    {
      code: "Specimen",
    },
    {
      code: "SpecimenDefinition",
    },
    {
      code: "StructureDefinition",
    },
    {
      code: "StructureMap",
    },
    {
      code: "Subscription",
    },
    {
      code: "Substance",
    },
    {
      code: "SubstanceNucleicAcid",
    },
    {
      code: "SubstancePolymer",
    },
    {
      code: "SubstanceProtein",
    },
    {
      code: "SubstanceReferenceInformation",
    },
    {
      code: "SubstanceSourceMaterial",
    },
    {
      code: "SubstanceSpecification",
    },
    {
      code: "SupplyDelivery",
    },
    {
      code: "SupplyRequest",
    },
    {
      code: "Task",
    },
    {
      code: "TerminologyCapabilities",
    },
    {
      code: "TestReport",
    },
    {
      code: "TestScript",
    },
    {
      code: "ValueSet",
    },
    {
      code: "VerificationResult",
    },
    {
      code: "VisionPrescription",
      param: ["encounter"],
    },
  ],
} as const;

export const CompartmentdefinitionExample: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>url</b>: <b>http://hl7.org/fhir/CompartmentDefinition/example</b></p><p><b>name</b>: EXAMPLE</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 24/02/2017</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: The set of resources associated with a particular Device (example with Communication and CommunicationRequest resourses only).</p><p><b>useContext</b>: </p><p><b>purpose</b>: Provides an example of a FHIR compartment definition based on the Device resource type.</p><p><b>code</b>: Device</p><p><b>search</b>: true</p><blockquote><p><b>resource</b></p><p><b>code</b>: Communication</p><p><b>param</b>: sender, recipient</p><p><b>documentation</b>: The device used as the message sender and recipient</p></blockquote><blockquote><p><b>resource</b></p><p><b>code</b>: CommunicationRequest</p><p><b>param</b>: sender, recipient</p><p><b>documentation</b>: The device used as the message sender and recipient</p></blockquote></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/example",
  name: "EXAMPLE",
  status: "draft",
  experimental: true,
  date: "2017-02-24",
  publisher: "Health Level Seven International (FHIR Infrastructure)",
  contact: [
    {
      name: "[string]",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "The set of resources associated with a particular Device (example with Communication and CommunicationRequest resourses only).",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/resource-types",
            code: "Device",
          },
        ],
      },
    },
  ],
  purpose:
    "Provides an example of a FHIR compartment definition based on the Device resource type.",
  code: "Device",
  search: true,
  resource: [
    {
      code: "Communication",
      param: ["sender", "recipient"],
      documentation: "The device used as the message sender and recipient",
    },
    {
      code: "CommunicationRequest",
      param: ["sender", "recipient"],
      documentation: "The device used as the message sender and recipient",
    },
  ],
} as const;

export const CompartmentdefinitionPatient: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "patient",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>\r\nThe following resources may be in this compartment:\r\n</p>\r\n<table class="grid">\r\n <tr><td><b>Resource</b></td><td><b>Inclusion Criteria</b></td></tr>\r\n <tr><td><a href="account.html">Account</a></td><td>subject</td></tr>\r\n <tr><td><a href="adverseevent.html">AdverseEvent</a></td><td>subject</td></tr>\r\n <tr><td><a href="allergyintolerance.html">AllergyIntolerance</a></td><td>patient, recorder, asserter</td></tr>\r\n <tr><td><a href="appointment.html">Appointment</a></td><td>actor</td></tr>\r\n <tr><td><a href="appointmentresponse.html">AppointmentResponse</a></td><td>actor</td></tr>\r\n <tr><td><a href="auditevent.html">AuditEvent</a></td><td>patient</td></tr>\r\n <tr><td><a href="basic.html">Basic</a></td><td>patient, author</td></tr>\r\n <tr><td><a href="bodystructure.html">BodyStructure</a></td><td>patient</td></tr>\r\n <tr><td><a href="careplan.html">CarePlan</a></td><td>patient, performer</td></tr>\r\n <tr><td><a href="careteam.html">CareTeam</a></td><td>patient, participant</td></tr>\r\n <tr><td><a href="chargeitem.html">ChargeItem</a></td><td>subject</td></tr>\r\n <tr><td><a href="claim.html">Claim</a></td><td>patient, payee</td></tr>\r\n <tr><td><a href="claimresponse.html">ClaimResponse</a></td><td>patient</td></tr>\r\n <tr><td><a href="clinicalimpression.html">ClinicalImpression</a></td><td>subject</td></tr>\r\n <tr><td><a href="communication.html">Communication</a></td><td>subject, sender, recipient</td></tr>\r\n <tr><td><a href="communicationrequest.html">CommunicationRequest</a></td><td>subject, sender, recipient, requester</td></tr>\r\n <tr><td><a href="composition.html">Composition</a></td><td>subject, author, attester</td></tr>\r\n <tr><td><a href="condition.html">Condition</a></td><td>patient, asserter</td></tr>\r\n <tr><td><a href="consent.html">Consent</a></td><td>patient</td></tr>\r\n <tr><td><a href="coverage.html">Coverage</a></td><td>policy-holder, subscriber, beneficiary, payor</td></tr>\r\n <tr><td><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></td><td>patient</td></tr>\r\n <tr><td><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></td><td>patient</td></tr>\r\n <tr><td><a href="detectedissue.html">DetectedIssue</a></td><td>patient</td></tr>\r\n <tr><td><a href="devicerequest.html">DeviceRequest</a></td><td>subject, performer</td></tr>\r\n <tr><td><a href="deviceusestatement.html">DeviceUseStatement</a></td><td>subject</td></tr>\r\n <tr><td><a href="diagnosticreport.html">DiagnosticReport</a></td><td>subject</td></tr>\r\n <tr><td><a href="documentmanifest.html">DocumentManifest</a></td><td>subject, author, recipient</td></tr>\r\n <tr><td><a href="documentreference.html">DocumentReference</a></td><td>subject, author</td></tr>\r\n <tr><td><a href="encounter.html">Encounter</a></td><td>patient</td></tr>\r\n <tr><td><a href="enrollmentrequest.html">EnrollmentRequest</a></td><td>subject</td></tr>\r\n <tr><td><a href="episodeofcare.html">EpisodeOfCare</a></td><td>patient</td></tr>\r\n <tr><td><a href="explanationofbenefit.html">ExplanationOfBenefit</a></td><td>patient, payee</td></tr>\r\n <tr><td><a href="familymemberhistory.html">FamilyMemberHistory</a></td><td>patient</td></tr>\r\n <tr><td><a href="flag.html">Flag</a></td><td>patient</td></tr>\r\n <tr><td><a href="goal.html">Goal</a></td><td>patient</td></tr>\r\n <tr><td><a href="group.html">Group</a></td><td>member</td></tr>\r\n <tr><td><a href="imagingstudy.html">ImagingStudy</a></td><td>patient</td></tr>\r\n <tr><td><a href="immunization.html">Immunization</a></td><td>patient</td></tr>\r\n <tr><td><a href="immunizationevaluation.html">ImmunizationEvaluation</a></td><td>patient</td></tr>\r\n <tr><td><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></td><td>patient</td></tr>\r\n <tr><td><a href="invoice.html">Invoice</a></td><td>subject, patient, recipient</td></tr>\r\n <tr><td><a href="list.html">List</a></td><td>subject, source</td></tr>\r\n <tr><td><a href="measurereport.html">MeasureReport</a></td><td>patient</td></tr>\r\n <tr><td><a href="media.html">Media</a></td><td>subject</td></tr>\r\n <tr><td><a href="medicationadministration.html">MedicationAdministration</a></td><td>patient, performer, subject</td></tr>\r\n <tr><td><a href="medicationdispense.html">MedicationDispense</a></td><td>subject, patient, receiver</td></tr>\r\n <tr><td><a href="medicationrequest.html">MedicationRequest</a></td><td>subject</td></tr>\r\n <tr><td><a href="medicationstatement.html">MedicationStatement</a></td><td>subject</td></tr>\r\n <tr><td><a href="molecularsequence.html">MolecularSequence</a></td><td>patient</td></tr>\r\n <tr><td><a href="nutritionorder.html">NutritionOrder</a></td><td>patient</td></tr>\r\n <tr><td><a href="observation.html">Observation</a></td><td>subject, performer</td></tr>\r\n <tr><td><a href="patient.html">Patient</a></td><td>link</td></tr>\r\n <tr><td><a href="person.html">Person</a></td><td>patient</td></tr>\r\n <tr><td><a href="procedure.html">Procedure</a></td><td>patient, performer</td></tr>\r\n <tr><td><a href="provenance.html">Provenance</a></td><td>patient</td></tr>\r\n <tr><td><a href="questionnaireresponse.html">QuestionnaireResponse</a></td><td>subject, author</td></tr>\r\n <tr><td><a href="relatedperson.html">RelatedPerson</a></td><td>patient</td></tr>\r\n <tr><td><a href="requestgroup.html">RequestGroup</a></td><td>subject, participant</td></tr>\r\n <tr><td><a href="researchsubject.html">ResearchSubject</a></td><td>individual</td></tr>\r\n <tr><td><a href="riskassessment.html">RiskAssessment</a></td><td>subject</td></tr>\r\n <tr><td><a href="schedule.html">Schedule</a></td><td>actor</td></tr>\r\n <tr><td><a href="servicerequest.html">ServiceRequest</a></td><td>subject, performer</td></tr>\r\n <tr><td><a href="specimen.html">Specimen</a></td><td>subject</td></tr>\r\n <tr><td><a href="supplydelivery.html">SupplyDelivery</a></td><td>patient</td></tr>\r\n <tr><td><a href="supplyrequest.html">SupplyRequest</a></td><td>subject</td></tr>\r\n <tr><td><a href="visionprescription.html">VisionPrescription</a></td><td>patient</td></tr>\r\n</table>\r\n<p>\r\nA resource is in this compartment if the nominated search parameter (or chain) refers to the patient resource that defines the compartment.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<p>\r\nThe following resources are never in this compartment:\r\n</p>\r\n<ul>\r\n <li><a href="activitydefinition.html">ActivityDefinition</a></li>\r\n <li><a href="binary.html">Binary</a></li>\r\n <li><a href="biologicallyderivedproduct.html">BiologicallyDerivedProduct</a></li>\r\n <li><a href="bundle.html">Bundle</a></li>\r\n <li><a href="capabilitystatement.html">CapabilityStatement</a></li>\r\n <li><a href="catalogentry.html">CatalogEntry</a></li>\r\n <li><a href="chargeitemdefinition.html">ChargeItemDefinition</a></li>\r\n <li><a href="codesystem.html">CodeSystem</a></li>\r\n <li><a href="compartmentdefinition.html">CompartmentDefinition</a></li>\r\n <li><a href="conceptmap.html">ConceptMap</a></li>\r\n <li><a href="contract.html">Contract</a></li>\r\n <li><a href="device.html">Device</a></li>\r\n <li><a href="devicedefinition.html">DeviceDefinition</a></li>\r\n <li><a href="devicemetric.html">DeviceMetric</a></li>\r\n <li><a href="effectevidencesynthesis.html">EffectEvidenceSynthesis</a></li>\r\n <li><a href="endpoint.html">Endpoint</a></li>\r\n <li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>\r\n <li><a href="eventdefinition.html">EventDefinition</a></li>\r\n <li><a href="evidence.html">Evidence</a></li>\r\n <li><a href="evidencevariable.html">EvidenceVariable</a></li>\r\n <li><a href="examplescenario.html">ExampleScenario</a></li>\r\n <li><a href="graphdefinition.html">GraphDefinition</a></li>\r\n <li><a href="guidanceresponse.html">GuidanceResponse</a></li>\r\n <li><a href="healthcareservice.html">HealthcareService</a></li>\r\n <li><a href="implementationguide.html">ImplementationGuide</a></li>\r\n <li><a href="insuranceplan.html">InsurancePlan</a></li>\r\n <li><a href="library.html">Library</a></li>\r\n <li><a href="linkage.html">Linkage</a></li>\r\n <li><a href="location.html">Location</a></li>\r\n <li><a href="measure.html">Measure</a></li>\r\n <li><a href="medication.html">Medication</a></li>\r\n <li><a href="medicationknowledge.html">MedicationKnowledge</a></li>\r\n <li><a href="medicinalproduct.html">MedicinalProduct</a></li>\r\n <li><a href="medicinalproductauthorization.html">MedicinalProductAuthorization</a></li>\r\n <li><a href="medicinalproductcontraindication.html">MedicinalProductContraindication</a></li>\r\n <li><a href="medicinalproductindication.html">MedicinalProductIndication</a></li>\r\n <li><a href="medicinalproductingredient.html">MedicinalProductIngredient</a></li>\r\n <li><a href="medicinalproductinteraction.html">MedicinalProductInteraction</a></li>\r\n <li><a href="medicinalproductmanufactured.html">MedicinalProductManufactured</a></li>\r\n <li><a href="medicinalproductpackaged.html">MedicinalProductPackaged</a></li>\r\n <li><a href="medicinalproductpharmaceutical.html">MedicinalProductPharmaceutical</a></li>\r\n <li><a href="medicinalproductundesirableeffect.html">MedicinalProductUndesirableEffect</a></li>\r\n <li><a href="messagedefinition.html">MessageDefinition</a></li>\r\n <li><a href="messageheader.html">MessageHeader</a></li>\r\n <li><a href="namingsystem.html">NamingSystem</a></li>\r\n <li><a href="observationdefinition.html">ObservationDefinition</a></li>\r\n <li><a href="operationdefinition.html">OperationDefinition</a></li>\r\n <li><a href="operationoutcome.html">OperationOutcome</a></li>\r\n <li><a href="organization.html">Organization</a></li>\r\n <li><a href="organizationaffiliation.html">OrganizationAffiliation</a></li>\r\n <li><a href="paymentnotice.html">PaymentNotice</a></li>\r\n <li><a href="paymentreconciliation.html">PaymentReconciliation</a></li>\r\n <li><a href="plandefinition.html">PlanDefinition</a></li>\r\n <li><a href="practitioner.html">Practitioner</a></li>\r\n <li><a href="practitionerrole.html">PractitionerRole</a></li>\r\n <li><a href="questionnaire.html">Questionnaire</a></li>\r\n <li><a href="researchdefinition.html">ResearchDefinition</a></li>\r\n <li><a href="researchelementdefinition.html">ResearchElementDefinition</a></li>\r\n <li><a href="researchstudy.html">ResearchStudy</a></li>\r\n <li><a href="riskevidencesynthesis.html">RiskEvidenceSynthesis</a></li>\r\n <li><a href="searchparameter.html">SearchParameter</a></li>\r\n <li><a href="slot.html">Slot</a></li>\r\n <li><a href="specimendefinition.html">SpecimenDefinition</a></li>\r\n <li><a href="structuredefinition.html">StructureDefinition</a></li>\r\n <li><a href="structuremap.html">StructureMap</a></li>\r\n <li><a href="subscription.html">Subscription</a></li>\r\n <li><a href="substance.html">Substance</a></li>\r\n <li><a href="substancenucleicacid.html">SubstanceNucleicAcid</a></li>\r\n <li><a href="substancepolymer.html">SubstancePolymer</a></li>\r\n <li><a href="substanceprotein.html">SubstanceProtein</a></li>\r\n <li><a href="substancereferenceinformation.html">SubstanceReferenceInformation</a></li>\r\n <li><a href="substancesourcematerial.html">SubstanceSourceMaterial</a></li>\r\n <li><a href="substancespecification.html">SubstanceSpecification</a></li>\r\n <li><a href="task.html">Task</a></li>\r\n <li><a href="terminologycapabilities.html">TerminologyCapabilities</a></li>\r\n <li><a href="testreport.html">TestReport</a></li>\r\n <li><a href="testscript.html">TestScript</a></li>\r\n <li><a href="valueset.html">ValueSet</a></li>\r\n <li><a href="verificationresult.html">VerificationResult</a></li>\r\n</ul></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/patient",
  version: "4.0.1",
  name: "Base FHIR compartment definition for Patient",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "There is an instance of the patient compartment for each patient resource, and the identity of the compartment is the same as the patient. When a patient is linked to another patient, all the records associated with the linked patient are in the compartment associated with the target of the link.. The set of resources associated with a particular patient",
  code: "Patient",
  search: true,
  resource: [
    {
      code: "Account",
      param: ["subject"],
    },
    {
      code: "ActivityDefinition",
    },
    {
      code: "AdverseEvent",
      param: ["subject"],
    },
    {
      code: "AllergyIntolerance",
      param: ["patient", "recorder", "asserter"],
    },
    {
      code: "Appointment",
      param: ["actor"],
    },
    {
      code: "AppointmentResponse",
      param: ["actor"],
    },
    {
      code: "AuditEvent",
      param: ["patient"],
    },
    {
      code: "Basic",
      param: ["patient", "author"],
    },
    {
      code: "Binary",
    },
    {
      code: "BiologicallyDerivedProduct",
    },
    {
      code: "BodyStructure",
      param: ["patient"],
    },
    {
      code: "Bundle",
    },
    {
      code: "CapabilityStatement",
    },
    {
      code: "CarePlan",
      param: ["patient", "performer"],
    },
    {
      code: "CareTeam",
      param: ["patient", "participant"],
    },
    {
      code: "CatalogEntry",
    },
    {
      code: "ChargeItem",
      param: ["subject"],
    },
    {
      code: "ChargeItemDefinition",
    },
    {
      code: "Claim",
      param: ["patient", "payee"],
    },
    {
      code: "ClaimResponse",
      param: ["patient"],
    },
    {
      code: "ClinicalImpression",
      param: ["subject"],
    },
    {
      code: "CodeSystem",
    },
    {
      code: "Communication",
      param: ["subject", "sender", "recipient"],
    },
    {
      code: "CommunicationRequest",
      param: ["subject", "sender", "recipient", "requester"],
    },
    {
      code: "CompartmentDefinition",
    },
    {
      code: "Composition",
      param: ["subject", "author", "attester"],
    },
    {
      code: "ConceptMap",
    },
    {
      code: "Condition",
      param: ["patient", "asserter"],
    },
    {
      code: "Consent",
      param: ["patient"],
    },
    {
      code: "Contract",
    },
    {
      code: "Coverage",
      param: ["policy-holder", "subscriber", "beneficiary", "payor"],
    },
    {
      code: "CoverageEligibilityRequest",
      param: ["patient"],
    },
    {
      code: "CoverageEligibilityResponse",
      param: ["patient"],
    },
    {
      code: "DetectedIssue",
      param: ["patient"],
    },
    {
      code: "Device",
    },
    {
      code: "DeviceDefinition",
    },
    {
      code: "DeviceMetric",
    },
    {
      code: "DeviceRequest",
      param: ["subject", "performer"],
    },
    {
      code: "DeviceUseStatement",
      param: ["subject"],
    },
    {
      code: "DiagnosticReport",
      param: ["subject"],
    },
    {
      code: "DocumentManifest",
      param: ["subject", "author", "recipient"],
    },
    {
      code: "DocumentReference",
      param: ["subject", "author"],
    },
    {
      code: "EffectEvidenceSynthesis",
    },
    {
      code: "Encounter",
      param: ["patient"],
    },
    {
      code: "Endpoint",
    },
    {
      code: "EnrollmentRequest",
      param: ["subject"],
    },
    {
      code: "EnrollmentResponse",
    },
    {
      code: "EpisodeOfCare",
      param: ["patient"],
    },
    {
      code: "EventDefinition",
    },
    {
      code: "Evidence",
    },
    {
      code: "EvidenceVariable",
    },
    {
      code: "ExampleScenario",
    },
    {
      code: "ExplanationOfBenefit",
      param: ["patient", "payee"],
    },
    {
      code: "FamilyMemberHistory",
      param: ["patient"],
    },
    {
      code: "Flag",
      param: ["patient"],
    },
    {
      code: "Goal",
      param: ["patient"],
    },
    {
      code: "GraphDefinition",
    },
    {
      code: "Group",
      param: ["member"],
    },
    {
      code: "GuidanceResponse",
    },
    {
      code: "HealthcareService",
    },
    {
      code: "ImagingStudy",
      param: ["patient"],
    },
    {
      code: "Immunization",
      param: ["patient"],
    },
    {
      code: "ImmunizationEvaluation",
      param: ["patient"],
    },
    {
      code: "ImmunizationRecommendation",
      param: ["patient"],
    },
    {
      code: "ImplementationGuide",
    },
    {
      code: "InsurancePlan",
    },
    {
      code: "Invoice",
      param: ["subject", "patient", "recipient"],
    },
    {
      code: "Library",
    },
    {
      code: "Linkage",
    },
    {
      code: "List",
      param: ["subject", "source"],
    },
    {
      code: "Location",
    },
    {
      code: "Measure",
    },
    {
      code: "MeasureReport",
      param: ["patient"],
    },
    {
      code: "Media",
      param: ["subject"],
    },
    {
      code: "Medication",
    },
    {
      code: "MedicationAdministration",
      param: ["patient", "performer", "subject"],
    },
    {
      code: "MedicationDispense",
      param: ["subject", "patient", "receiver"],
    },
    {
      code: "MedicationKnowledge",
    },
    {
      code: "MedicationRequest",
      param: ["subject"],
    },
    {
      code: "MedicationStatement",
      param: ["subject"],
    },
    {
      code: "MedicinalProduct",
    },
    {
      code: "MedicinalProductAuthorization",
    },
    {
      code: "MedicinalProductContraindication",
    },
    {
      code: "MedicinalProductIndication",
    },
    {
      code: "MedicinalProductIngredient",
    },
    {
      code: "MedicinalProductInteraction",
    },
    {
      code: "MedicinalProductManufactured",
    },
    {
      code: "MedicinalProductPackaged",
    },
    {
      code: "MedicinalProductPharmaceutical",
    },
    {
      code: "MedicinalProductUndesirableEffect",
    },
    {
      code: "MessageDefinition",
    },
    {
      code: "MessageHeader",
    },
    {
      code: "MolecularSequence",
      param: ["patient"],
    },
    {
      code: "NamingSystem",
    },
    {
      code: "NutritionOrder",
      param: ["patient"],
    },
    {
      code: "Observation",
      param: ["subject", "performer"],
    },
    {
      code: "ObservationDefinition",
    },
    {
      code: "OperationDefinition",
    },
    {
      code: "OperationOutcome",
    },
    {
      code: "Organization",
    },
    {
      code: "OrganizationAffiliation",
    },
    {
      code: "Patient",
      param: ["link"],
    },
    {
      code: "PaymentNotice",
    },
    {
      code: "PaymentReconciliation",
    },
    {
      code: "Person",
      param: ["patient"],
    },
    {
      code: "PlanDefinition",
    },
    {
      code: "Practitioner",
    },
    {
      code: "PractitionerRole",
    },
    {
      code: "Procedure",
      param: ["patient", "performer"],
    },
    {
      code: "Provenance",
      param: ["patient"],
    },
    {
      code: "Questionnaire",
    },
    {
      code: "QuestionnaireResponse",
      param: ["subject", "author"],
    },
    {
      code: "RelatedPerson",
      param: ["patient"],
    },
    {
      code: "RequestGroup",
      param: ["subject", "participant"],
    },
    {
      code: "ResearchDefinition",
    },
    {
      code: "ResearchElementDefinition",
    },
    {
      code: "ResearchStudy",
    },
    {
      code: "ResearchSubject",
      param: ["individual"],
    },
    {
      code: "RiskAssessment",
      param: ["subject"],
    },
    {
      code: "RiskEvidenceSynthesis",
    },
    {
      code: "Schedule",
      param: ["actor"],
    },
    {
      code: "SearchParameter",
    },
    {
      code: "ServiceRequest",
      param: ["subject", "performer"],
    },
    {
      code: "Slot",
    },
    {
      code: "Specimen",
      param: ["subject"],
    },
    {
      code: "SpecimenDefinition",
    },
    {
      code: "StructureDefinition",
    },
    {
      code: "StructureMap",
    },
    {
      code: "Subscription",
    },
    {
      code: "Substance",
    },
    {
      code: "SubstanceNucleicAcid",
    },
    {
      code: "SubstancePolymer",
    },
    {
      code: "SubstanceProtein",
    },
    {
      code: "SubstanceReferenceInformation",
    },
    {
      code: "SubstanceSourceMaterial",
    },
    {
      code: "SubstanceSpecification",
    },
    {
      code: "SupplyDelivery",
      param: ["patient"],
    },
    {
      code: "SupplyRequest",
      param: ["subject"],
    },
    {
      code: "Task",
    },
    {
      code: "TerminologyCapabilities",
    },
    {
      code: "TestReport",
    },
    {
      code: "TestScript",
    },
    {
      code: "ValueSet",
    },
    {
      code: "VerificationResult",
    },
    {
      code: "VisionPrescription",
      param: ["patient"],
    },
  ],
} as const;

export const CompartmentdefinitionPractitioner: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "practitioner",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>\r\nThe following resources may be in this compartment:\r\n</p>\r\n<table class="grid">\r\n <tr><td><b>Resource</b></td><td><b>Inclusion Criteria</b></td></tr>\r\n <tr><td><a href="account.html">Account</a></td><td>subject</td></tr>\r\n <tr><td><a href="adverseevent.html">AdverseEvent</a></td><td>recorder</td></tr>\r\n <tr><td><a href="allergyintolerance.html">AllergyIntolerance</a></td><td>recorder, asserter</td></tr>\r\n <tr><td><a href="appointment.html">Appointment</a></td><td>actor</td></tr>\r\n <tr><td><a href="appointmentresponse.html">AppointmentResponse</a></td><td>actor</td></tr>\r\n <tr><td><a href="auditevent.html">AuditEvent</a></td><td>agent</td></tr>\r\n <tr><td><a href="basic.html">Basic</a></td><td>author</td></tr>\r\n <tr><td><a href="careplan.html">CarePlan</a></td><td>performer</td></tr>\r\n <tr><td><a href="careteam.html">CareTeam</a></td><td>participant</td></tr>\r\n <tr><td><a href="chargeitem.html">ChargeItem</a></td><td>enterer, performer-actor</td></tr>\r\n <tr><td><a href="claim.html">Claim</a></td><td>enterer, provider, payee, care-team</td></tr>\r\n <tr><td><a href="claimresponse.html">ClaimResponse</a></td><td>requestor</td></tr>\r\n <tr><td><a href="clinicalimpression.html">ClinicalImpression</a></td><td>assessor</td></tr>\r\n <tr><td><a href="communication.html">Communication</a></td><td>sender, recipient</td></tr>\r\n <tr><td><a href="communicationrequest.html">CommunicationRequest</a></td><td>sender, recipient, requester</td></tr>\r\n <tr><td><a href="composition.html">Composition</a></td><td>subject, author, attester</td></tr>\r\n <tr><td><a href="condition.html">Condition</a></td><td>asserter</td></tr>\r\n <tr><td><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></td><td>enterer, provider</td></tr>\r\n <tr><td><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></td><td>requestor</td></tr>\r\n <tr><td><a href="detectedissue.html">DetectedIssue</a></td><td>author</td></tr>\r\n <tr><td><a href="devicerequest.html">DeviceRequest</a></td><td>requester, performer</td></tr>\r\n <tr><td><a href="diagnosticreport.html">DiagnosticReport</a></td><td>performer</td></tr>\r\n <tr><td><a href="documentmanifest.html">DocumentManifest</a></td><td>subject, author, recipient</td></tr>\r\n <tr><td><a href="documentreference.html">DocumentReference</a></td><td>subject, author, authenticator</td></tr>\r\n <tr><td><a href="encounter.html">Encounter</a></td><td>practitioner, participant</td></tr>\r\n <tr><td><a href="episodeofcare.html">EpisodeOfCare</a></td><td>care-manager</td></tr>\r\n <tr><td><a href="explanationofbenefit.html">ExplanationOfBenefit</a></td><td>enterer, provider, payee, care-team</td></tr>\r\n <tr><td><a href="flag.html">Flag</a></td><td>author</td></tr>\r\n <tr><td><a href="group.html">Group</a></td><td>member</td></tr>\r\n <tr><td><a href="immunization.html">Immunization</a></td><td>performer</td></tr>\r\n <tr><td><a href="invoice.html">Invoice</a></td><td>participant</td></tr>\r\n <tr><td><a href="linkage.html">Linkage</a></td><td>author</td></tr>\r\n <tr><td><a href="list.html">List</a></td><td>source</td></tr>\r\n <tr><td><a href="media.html">Media</a></td><td>subject, operator</td></tr>\r\n <tr><td><a href="medicationadministration.html">MedicationAdministration</a></td><td>performer</td></tr>\r\n <tr><td><a href="medicationdispense.html">MedicationDispense</a></td><td>performer, receiver</td></tr>\r\n <tr><td><a href="medicationrequest.html">MedicationRequest</a></td><td>requester</td></tr>\r\n <tr><td><a href="medicationstatement.html">MedicationStatement</a></td><td>source</td></tr>\r\n <tr><td><a href="messageheader.html">MessageHeader</a></td><td>receiver, author, responsible, enterer</td></tr>\r\n <tr><td><a href="nutritionorder.html">NutritionOrder</a></td><td>provider</td></tr>\r\n <tr><td><a href="observation.html">Observation</a></td><td>performer</td></tr>\r\n <tr><td><a href="patient.html">Patient</a></td><td>general-practitioner</td></tr>\r\n <tr><td><a href="paymentnotice.html">PaymentNotice</a></td><td>provider</td></tr>\r\n <tr><td><a href="paymentreconciliation.html">PaymentReconciliation</a></td><td>requestor</td></tr>\r\n <tr><td><a href="person.html">Person</a></td><td>practitioner</td></tr>\r\n <tr><td><a href="practitioner.html">Practitioner</a></td><td>{def}</td></tr>\r\n <tr><td><a href="practitionerrole.html">PractitionerRole</a></td><td>practitioner</td></tr>\r\n <tr><td><a href="procedure.html">Procedure</a></td><td>performer</td></tr>\r\n <tr><td><a href="provenance.html">Provenance</a></td><td>agent</td></tr>\r\n <tr><td><a href="questionnaireresponse.html">QuestionnaireResponse</a></td><td>author, source</td></tr>\r\n <tr><td><a href="requestgroup.html">RequestGroup</a></td><td>participant, author</td></tr>\r\n <tr><td><a href="researchstudy.html">ResearchStudy</a></td><td>principalinvestigator</td></tr>\r\n <tr><td><a href="riskassessment.html">RiskAssessment</a></td><td>performer</td></tr>\r\n <tr><td><a href="schedule.html">Schedule</a></td><td>actor</td></tr>\r\n <tr><td><a href="servicerequest.html">ServiceRequest</a></td><td>performer, requester</td></tr>\r\n <tr><td><a href="specimen.html">Specimen</a></td><td>collector</td></tr>\r\n <tr><td><a href="supplydelivery.html">SupplyDelivery</a></td><td>supplier, receiver</td></tr>\r\n <tr><td><a href="supplyrequest.html">SupplyRequest</a></td><td>requester</td></tr>\r\n <tr><td><a href="visionprescription.html">VisionPrescription</a></td><td>prescriber</td></tr>\r\n</table>\r\n<p>\r\nA resource is in this compartment if the nominated search parameter (or chain) refers to the patient resource that defines the compartment.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<p>\r\nThe following resources are never in this compartment:\r\n</p>\r\n<ul>\r\n <li><a href="activitydefinition.html">ActivityDefinition</a></li>\r\n <li><a href="binary.html">Binary</a></li>\r\n <li><a href="biologicallyderivedproduct.html">BiologicallyDerivedProduct</a></li>\r\n <li><a href="bodystructure.html">BodyStructure</a></li>\r\n <li><a href="bundle.html">Bundle</a></li>\r\n <li><a href="capabilitystatement.html">CapabilityStatement</a></li>\r\n <li><a href="catalogentry.html">CatalogEntry</a></li>\r\n <li><a href="chargeitemdefinition.html">ChargeItemDefinition</a></li>\r\n <li><a href="codesystem.html">CodeSystem</a></li>\r\n <li><a href="compartmentdefinition.html">CompartmentDefinition</a></li>\r\n <li><a href="conceptmap.html">ConceptMap</a></li>\r\n <li><a href="consent.html">Consent</a></li>\r\n <li><a href="contract.html">Contract</a></li>\r\n <li><a href="coverage.html">Coverage</a></li>\r\n <li><a href="device.html">Device</a></li>\r\n <li><a href="devicedefinition.html">DeviceDefinition</a></li>\r\n <li><a href="devicemetric.html">DeviceMetric</a></li>\r\n <li><a href="deviceusestatement.html">DeviceUseStatement</a></li>\r\n <li><a href="effectevidencesynthesis.html">EffectEvidenceSynthesis</a></li>\r\n <li><a href="endpoint.html">Endpoint</a></li>\r\n <li><a href="enrollmentrequest.html">EnrollmentRequest</a></li>\r\n <li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>\r\n <li><a href="eventdefinition.html">EventDefinition</a></li>\r\n <li><a href="evidence.html">Evidence</a></li>\r\n <li><a href="evidencevariable.html">EvidenceVariable</a></li>\r\n <li><a href="examplescenario.html">ExampleScenario</a></li>\r\n <li><a href="familymemberhistory.html">FamilyMemberHistory</a></li>\r\n <li><a href="goal.html">Goal</a></li>\r\n <li><a href="graphdefinition.html">GraphDefinition</a></li>\r\n <li><a href="guidanceresponse.html">GuidanceResponse</a></li>\r\n <li><a href="healthcareservice.html">HealthcareService</a></li>\r\n <li><a href="imagingstudy.html">ImagingStudy</a></li>\r\n <li><a href="immunizationevaluation.html">ImmunizationEvaluation</a></li>\r\n <li><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></li>\r\n <li><a href="implementationguide.html">ImplementationGuide</a></li>\r\n <li><a href="insuranceplan.html">InsurancePlan</a></li>\r\n <li><a href="library.html">Library</a></li>\r\n <li><a href="location.html">Location</a></li>\r\n <li><a href="measure.html">Measure</a></li>\r\n <li><a href="measurereport.html">MeasureReport</a></li>\r\n <li><a href="medication.html">Medication</a></li>\r\n <li><a href="medicationknowledge.html">MedicationKnowledge</a></li>\r\n <li><a href="medicinalproduct.html">MedicinalProduct</a></li>\r\n <li><a href="medicinalproductauthorization.html">MedicinalProductAuthorization</a></li>\r\n <li><a href="medicinalproductcontraindication.html">MedicinalProductContraindication</a></li>\r\n <li><a href="medicinalproductindication.html">MedicinalProductIndication</a></li>\r\n <li><a href="medicinalproductingredient.html">MedicinalProductIngredient</a></li>\r\n <li><a href="medicinalproductinteraction.html">MedicinalProductInteraction</a></li>\r\n <li><a href="medicinalproductmanufactured.html">MedicinalProductManufactured</a></li>\r\n <li><a href="medicinalproductpackaged.html">MedicinalProductPackaged</a></li>\r\n <li><a href="medicinalproductpharmaceutical.html">MedicinalProductPharmaceutical</a></li>\r\n <li><a href="medicinalproductundesirableeffect.html">MedicinalProductUndesirableEffect</a></li>\r\n <li><a href="messagedefinition.html">MessageDefinition</a></li>\r\n <li><a href="molecularsequence.html">MolecularSequence</a></li>\r\n <li><a href="namingsystem.html">NamingSystem</a></li>\r\n <li><a href="observationdefinition.html">ObservationDefinition</a></li>\r\n <li><a href="operationdefinition.html">OperationDefinition</a></li>\r\n <li><a href="operationoutcome.html">OperationOutcome</a></li>\r\n <li><a href="organization.html">Organization</a></li>\r\n <li><a href="organizationaffiliation.html">OrganizationAffiliation</a></li>\r\n <li><a href="plandefinition.html">PlanDefinition</a></li>\r\n <li><a href="questionnaire.html">Questionnaire</a></li>\r\n <li><a href="relatedperson.html">RelatedPerson</a></li>\r\n <li><a href="researchdefinition.html">ResearchDefinition</a></li>\r\n <li><a href="researchelementdefinition.html">ResearchElementDefinition</a></li>\r\n <li><a href="researchsubject.html">ResearchSubject</a></li>\r\n <li><a href="riskevidencesynthesis.html">RiskEvidenceSynthesis</a></li>\r\n <li><a href="searchparameter.html">SearchParameter</a></li>\r\n <li><a href="slot.html">Slot</a></li>\r\n <li><a href="specimendefinition.html">SpecimenDefinition</a></li>\r\n <li><a href="structuredefinition.html">StructureDefinition</a></li>\r\n <li><a href="structuremap.html">StructureMap</a></li>\r\n <li><a href="subscription.html">Subscription</a></li>\r\n <li><a href="substance.html">Substance</a></li>\r\n <li><a href="substancenucleicacid.html">SubstanceNucleicAcid</a></li>\r\n <li><a href="substancepolymer.html">SubstancePolymer</a></li>\r\n <li><a href="substanceprotein.html">SubstanceProtein</a></li>\r\n <li><a href="substancereferenceinformation.html">SubstanceReferenceInformation</a></li>\r\n <li><a href="substancesourcematerial.html">SubstanceSourceMaterial</a></li>\r\n <li><a href="substancespecification.html">SubstanceSpecification</a></li>\r\n <li><a href="task.html">Task</a></li>\r\n <li><a href="terminologycapabilities.html">TerminologyCapabilities</a></li>\r\n <li><a href="testreport.html">TestReport</a></li>\r\n <li><a href="testscript.html">TestScript</a></li>\r\n <li><a href="valueset.html">ValueSet</a></li>\r\n <li><a href="verificationresult.html">VerificationResult</a></li>\r\n</ul></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/practitioner",
  version: "4.0.1",
  name: "Base FHIR compartment definition for Practitioner",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "There is an instance of the practitioner compartment for each Practitioner resource, and the identity of the compartment is the same as the Practitioner. The set of resources associated with a particular practitioner",
  code: "Practitioner",
  search: true,
  resource: [
    {
      code: "Account",
      param: ["subject"],
    },
    {
      code: "ActivityDefinition",
    },
    {
      code: "AdverseEvent",
      param: ["recorder"],
    },
    {
      code: "AllergyIntolerance",
      param: ["recorder", "asserter"],
    },
    {
      code: "Appointment",
      param: ["actor"],
    },
    {
      code: "AppointmentResponse",
      param: ["actor"],
    },
    {
      code: "AuditEvent",
      param: ["agent"],
    },
    {
      code: "Basic",
      param: ["author"],
    },
    {
      code: "Binary",
    },
    {
      code: "BiologicallyDerivedProduct",
    },
    {
      code: "BodyStructure",
    },
    {
      code: "Bundle",
    },
    {
      code: "CapabilityStatement",
    },
    {
      code: "CarePlan",
      param: ["performer"],
    },
    {
      code: "CareTeam",
      param: ["participant"],
    },
    {
      code: "CatalogEntry",
    },
    {
      code: "ChargeItem",
      param: ["enterer", "performer-actor"],
    },
    {
      code: "ChargeItemDefinition",
    },
    {
      code: "Claim",
      param: ["enterer", "provider", "payee", "care-team"],
    },
    {
      code: "ClaimResponse",
      param: ["requestor"],
    },
    {
      code: "ClinicalImpression",
      param: ["assessor"],
    },
    {
      code: "CodeSystem",
    },
    {
      code: "Communication",
      param: ["sender", "recipient"],
    },
    {
      code: "CommunicationRequest",
      param: ["sender", "recipient", "requester"],
    },
    {
      code: "CompartmentDefinition",
    },
    {
      code: "Composition",
      param: ["subject", "author", "attester"],
    },
    {
      code: "ConceptMap",
    },
    {
      code: "Condition",
      param: ["asserter"],
    },
    {
      code: "Consent",
    },
    {
      code: "Contract",
    },
    {
      code: "Coverage",
    },
    {
      code: "CoverageEligibilityRequest",
      param: ["enterer", "provider"],
    },
    {
      code: "CoverageEligibilityResponse",
      param: ["requestor"],
    },
    {
      code: "DetectedIssue",
      param: ["author"],
    },
    {
      code: "Device",
    },
    {
      code: "DeviceDefinition",
    },
    {
      code: "DeviceMetric",
    },
    {
      code: "DeviceRequest",
      param: ["requester", "performer"],
    },
    {
      code: "DeviceUseStatement",
    },
    {
      code: "DiagnosticReport",
      param: ["performer"],
    },
    {
      code: "DocumentManifest",
      param: ["subject", "author", "recipient"],
    },
    {
      code: "DocumentReference",
      param: ["subject", "author", "authenticator"],
    },
    {
      code: "EffectEvidenceSynthesis",
    },
    {
      code: "Encounter",
      param: ["practitioner", "participant"],
    },
    {
      code: "Endpoint",
    },
    {
      code: "EnrollmentRequest",
    },
    {
      code: "EnrollmentResponse",
    },
    {
      code: "EpisodeOfCare",
      param: ["care-manager"],
    },
    {
      code: "EventDefinition",
    },
    {
      code: "Evidence",
    },
    {
      code: "EvidenceVariable",
    },
    {
      code: "ExampleScenario",
    },
    {
      code: "ExplanationOfBenefit",
      param: ["enterer", "provider", "payee", "care-team"],
    },
    {
      code: "FamilyMemberHistory",
    },
    {
      code: "Flag",
      param: ["author"],
    },
    {
      code: "Goal",
    },
    {
      code: "GraphDefinition",
    },
    {
      code: "Group",
      param: ["member"],
    },
    {
      code: "GuidanceResponse",
    },
    {
      code: "HealthcareService",
    },
    {
      code: "ImagingStudy",
    },
    {
      code: "Immunization",
      param: ["performer"],
    },
    {
      code: "ImmunizationEvaluation",
    },
    {
      code: "ImmunizationRecommendation",
    },
    {
      code: "ImplementationGuide",
    },
    {
      code: "InsurancePlan",
    },
    {
      code: "Invoice",
      param: ["participant"],
    },
    {
      code: "Library",
    },
    {
      code: "Linkage",
      param: ["author"],
    },
    {
      code: "List",
      param: ["source"],
    },
    {
      code: "Location",
    },
    {
      code: "Measure",
    },
    {
      code: "MeasureReport",
    },
    {
      code: "Media",
      param: ["subject", "operator"],
    },
    {
      code: "Medication",
    },
    {
      code: "MedicationAdministration",
      param: ["performer"],
    },
    {
      code: "MedicationDispense",
      param: ["performer", "receiver"],
    },
    {
      code: "MedicationKnowledge",
    },
    {
      code: "MedicationRequest",
      param: ["requester"],
    },
    {
      code: "MedicationStatement",
      param: ["source"],
    },
    {
      code: "MedicinalProduct",
    },
    {
      code: "MedicinalProductAuthorization",
    },
    {
      code: "MedicinalProductContraindication",
    },
    {
      code: "MedicinalProductIndication",
    },
    {
      code: "MedicinalProductIngredient",
    },
    {
      code: "MedicinalProductInteraction",
    },
    {
      code: "MedicinalProductManufactured",
    },
    {
      code: "MedicinalProductPackaged",
    },
    {
      code: "MedicinalProductPharmaceutical",
    },
    {
      code: "MedicinalProductUndesirableEffect",
    },
    {
      code: "MessageDefinition",
    },
    {
      code: "MessageHeader",
      param: ["receiver", "author", "responsible", "enterer"],
    },
    {
      code: "MolecularSequence",
    },
    {
      code: "NamingSystem",
    },
    {
      code: "NutritionOrder",
      param: ["provider"],
    },
    {
      code: "Observation",
      param: ["performer"],
    },
    {
      code: "ObservationDefinition",
    },
    {
      code: "OperationDefinition",
    },
    {
      code: "OperationOutcome",
    },
    {
      code: "Organization",
    },
    {
      code: "OrganizationAffiliation",
    },
    {
      code: "Patient",
      param: ["general-practitioner"],
    },
    {
      code: "PaymentNotice",
      param: ["provider"],
    },
    {
      code: "PaymentReconciliation",
      param: ["requestor"],
    },
    {
      code: "Person",
      param: ["practitioner"],
    },
    {
      code: "PlanDefinition",
    },
    {
      code: "Practitioner",
      param: ["{def}"],
    },
    {
      code: "PractitionerRole",
      param: ["practitioner"],
    },
    {
      code: "Procedure",
      param: ["performer"],
    },
    {
      code: "Provenance",
      param: ["agent"],
    },
    {
      code: "Questionnaire",
    },
    {
      code: "QuestionnaireResponse",
      param: ["author", "source"],
    },
    {
      code: "RelatedPerson",
    },
    {
      code: "RequestGroup",
      param: ["participant", "author"],
    },
    {
      code: "ResearchDefinition",
    },
    {
      code: "ResearchElementDefinition",
    },
    {
      code: "ResearchStudy",
      param: ["principalinvestigator"],
    },
    {
      code: "ResearchSubject",
    },
    {
      code: "RiskAssessment",
      param: ["performer"],
    },
    {
      code: "RiskEvidenceSynthesis",
    },
    {
      code: "Schedule",
      param: ["actor"],
    },
    {
      code: "SearchParameter",
    },
    {
      code: "ServiceRequest",
      param: ["performer", "requester"],
    },
    {
      code: "Slot",
    },
    {
      code: "Specimen",
      param: ["collector"],
    },
    {
      code: "SpecimenDefinition",
    },
    {
      code: "StructureDefinition",
    },
    {
      code: "StructureMap",
    },
    {
      code: "Subscription",
    },
    {
      code: "Substance",
    },
    {
      code: "SubstanceNucleicAcid",
    },
    {
      code: "SubstancePolymer",
    },
    {
      code: "SubstanceProtein",
    },
    {
      code: "SubstanceReferenceInformation",
    },
    {
      code: "SubstanceSourceMaterial",
    },
    {
      code: "SubstanceSpecification",
    },
    {
      code: "SupplyDelivery",
      param: ["supplier", "receiver"],
    },
    {
      code: "SupplyRequest",
      param: ["requester"],
    },
    {
      code: "Task",
    },
    {
      code: "TerminologyCapabilities",
    },
    {
      code: "TestReport",
    },
    {
      code: "TestScript",
    },
    {
      code: "ValueSet",
    },
    {
      code: "VerificationResult",
    },
    {
      code: "VisionPrescription",
      param: ["prescriber"],
    },
  ],
} as const;

export const CompartmentdefinitionRelatedperson: CompartmentDefinition = {
  resourceType: "CompartmentDefinition",
  id: "relatedPerson",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>\r\nThe following resources may be in this compartment:\r\n</p>\r\n<table class="grid">\r\n <tr><td><b>Resource</b></td><td><b>Inclusion Criteria</b></td></tr>\r\n <tr><td><a href="adverseevent.html">AdverseEvent</a></td><td>recorder</td></tr>\r\n <tr><td><a href="allergyintolerance.html">AllergyIntolerance</a></td><td>asserter</td></tr>\r\n <tr><td><a href="appointment.html">Appointment</a></td><td>actor</td></tr>\r\n <tr><td><a href="appointmentresponse.html">AppointmentResponse</a></td><td>actor</td></tr>\r\n <tr><td><a href="basic.html">Basic</a></td><td>author</td></tr>\r\n <tr><td><a href="careplan.html">CarePlan</a></td><td>performer</td></tr>\r\n <tr><td><a href="careteam.html">CareTeam</a></td><td>participant</td></tr>\r\n <tr><td><a href="chargeitem.html">ChargeItem</a></td><td>enterer, performer-actor</td></tr>\r\n <tr><td><a href="claim.html">Claim</a></td><td>payee</td></tr>\r\n <tr><td><a href="communication.html">Communication</a></td><td>sender, recipient</td></tr>\r\n <tr><td><a href="communicationrequest.html">CommunicationRequest</a></td><td>sender, recipient, requester</td></tr>\r\n <tr><td><a href="composition.html">Composition</a></td><td>author</td></tr>\r\n <tr><td><a href="condition.html">Condition</a></td><td>asserter</td></tr>\r\n <tr><td><a href="coverage.html">Coverage</a></td><td>policy-holder, subscriber, payor</td></tr>\r\n <tr><td><a href="documentmanifest.html">DocumentManifest</a></td><td>author, recipient</td></tr>\r\n <tr><td><a href="documentreference.html">DocumentReference</a></td><td>author</td></tr>\r\n <tr><td><a href="encounter.html">Encounter</a></td><td>participant</td></tr>\r\n <tr><td><a href="explanationofbenefit.html">ExplanationOfBenefit</a></td><td>payee</td></tr>\r\n <tr><td><a href="invoice.html">Invoice</a></td><td>recipient</td></tr>\r\n <tr><td><a href="medicationadministration.html">MedicationAdministration</a></td><td>performer</td></tr>\r\n <tr><td><a href="medicationstatement.html">MedicationStatement</a></td><td>source</td></tr>\r\n <tr><td><a href="observation.html">Observation</a></td><td>performer</td></tr>\r\n <tr><td><a href="patient.html">Patient</a></td><td>link</td></tr>\r\n <tr><td><a href="person.html">Person</a></td><td>link</td></tr>\r\n <tr><td><a href="procedure.html">Procedure</a></td><td>performer</td></tr>\r\n <tr><td><a href="provenance.html">Provenance</a></td><td>agent</td></tr>\r\n <tr><td><a href="questionnaireresponse.html">QuestionnaireResponse</a></td><td>author, source</td></tr>\r\n <tr><td><a href="relatedperson.html">RelatedPerson</a></td><td>{def}</td></tr>\r\n <tr><td><a href="requestgroup.html">RequestGroup</a></td><td>participant</td></tr>\r\n <tr><td><a href="schedule.html">Schedule</a></td><td>actor</td></tr>\r\n <tr><td><a href="servicerequest.html">ServiceRequest</a></td><td>performer</td></tr>\r\n <tr><td><a href="supplyrequest.html">SupplyRequest</a></td><td>requester</td></tr>\r\n</table>\r\n<p>\r\nA resource is in this compartment if the nominated search parameter (or chain) refers to the patient resource that defines the compartment.\r\n</p>\r\n<p>\r\n\r\n</p>\r\n<p>\r\nThe following resources are never in this compartment:\r\n</p>\r\n<ul>\r\n <li><a href="account.html">Account</a></li>\r\n <li><a href="activitydefinition.html">ActivityDefinition</a></li>\r\n <li><a href="auditevent.html">AuditEvent</a></li>\r\n <li><a href="binary.html">Binary</a></li>\r\n <li><a href="biologicallyderivedproduct.html">BiologicallyDerivedProduct</a></li>\r\n <li><a href="bodystructure.html">BodyStructure</a></li>\r\n <li><a href="bundle.html">Bundle</a></li>\r\n <li><a href="capabilitystatement.html">CapabilityStatement</a></li>\r\n <li><a href="catalogentry.html">CatalogEntry</a></li>\r\n <li><a href="chargeitemdefinition.html">ChargeItemDefinition</a></li>\r\n <li><a href="claimresponse.html">ClaimResponse</a></li>\r\n <li><a href="clinicalimpression.html">ClinicalImpression</a></li>\r\n <li><a href="codesystem.html">CodeSystem</a></li>\r\n <li><a href="compartmentdefinition.html">CompartmentDefinition</a></li>\r\n <li><a href="conceptmap.html">ConceptMap</a></li>\r\n <li><a href="consent.html">Consent</a></li>\r\n <li><a href="contract.html">Contract</a></li>\r\n <li><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></li>\r\n <li><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></li>\r\n <li><a href="detectedissue.html">DetectedIssue</a></li>\r\n <li><a href="device.html">Device</a></li>\r\n <li><a href="devicedefinition.html">DeviceDefinition</a></li>\r\n <li><a href="devicemetric.html">DeviceMetric</a></li>\r\n <li><a href="devicerequest.html">DeviceRequest</a></li>\r\n <li><a href="deviceusestatement.html">DeviceUseStatement</a></li>\r\n <li><a href="diagnosticreport.html">DiagnosticReport</a></li>\r\n <li><a href="effectevidencesynthesis.html">EffectEvidenceSynthesis</a></li>\r\n <li><a href="endpoint.html">Endpoint</a></li>\r\n <li><a href="enrollmentrequest.html">EnrollmentRequest</a></li>\r\n <li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>\r\n <li><a href="episodeofcare.html">EpisodeOfCare</a></li>\r\n <li><a href="eventdefinition.html">EventDefinition</a></li>\r\n <li><a href="evidence.html">Evidence</a></li>\r\n <li><a href="evidencevariable.html">EvidenceVariable</a></li>\r\n <li><a href="examplescenario.html">ExampleScenario</a></li>\r\n <li><a href="familymemberhistory.html">FamilyMemberHistory</a></li>\r\n <li><a href="flag.html">Flag</a></li>\r\n <li><a href="goal.html">Goal</a></li>\r\n <li><a href="graphdefinition.html">GraphDefinition</a></li>\r\n <li><a href="group.html">Group</a></li>\r\n <li><a href="guidanceresponse.html">GuidanceResponse</a></li>\r\n <li><a href="healthcareservice.html">HealthcareService</a></li>\r\n <li><a href="imagingstudy.html">ImagingStudy</a></li>\r\n <li><a href="immunization.html">Immunization</a></li>\r\n <li><a href="immunizationevaluation.html">ImmunizationEvaluation</a></li>\r\n <li><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></li>\r\n <li><a href="implementationguide.html">ImplementationGuide</a></li>\r\n <li><a href="insuranceplan.html">InsurancePlan</a></li>\r\n <li><a href="library.html">Library</a></li>\r\n <li><a href="linkage.html">Linkage</a></li>\r\n <li><a href="list.html">List</a></li>\r\n <li><a href="location.html">Location</a></li>\r\n <li><a href="measure.html">Measure</a></li>\r\n <li><a href="measurereport.html">MeasureReport</a></li>\r\n <li><a href="media.html">Media</a></li>\r\n <li><a href="medication.html">Medication</a></li>\r\n <li><a href="medicationdispense.html">MedicationDispense</a></li>\r\n <li><a href="medicationknowledge.html">MedicationKnowledge</a></li>\r\n <li><a href="medicationrequest.html">MedicationRequest</a></li>\r\n <li><a href="medicinalproduct.html">MedicinalProduct</a></li>\r\n <li><a href="medicinalproductauthorization.html">MedicinalProductAuthorization</a></li>\r\n <li><a href="medicinalproductcontraindication.html">MedicinalProductContraindication</a></li>\r\n <li><a href="medicinalproductindication.html">MedicinalProductIndication</a></li>\r\n <li><a href="medicinalproductingredient.html">MedicinalProductIngredient</a></li>\r\n <li><a href="medicinalproductinteraction.html">MedicinalProductInteraction</a></li>\r\n <li><a href="medicinalproductmanufactured.html">MedicinalProductManufactured</a></li>\r\n <li><a href="medicinalproductpackaged.html">MedicinalProductPackaged</a></li>\r\n <li><a href="medicinalproductpharmaceutical.html">MedicinalProductPharmaceutical</a></li>\r\n <li><a href="medicinalproductundesirableeffect.html">MedicinalProductUndesirableEffect</a></li>\r\n <li><a href="messagedefinition.html">MessageDefinition</a></li>\r\n <li><a href="messageheader.html">MessageHeader</a></li>\r\n <li><a href="molecularsequence.html">MolecularSequence</a></li>\r\n <li><a href="namingsystem.html">NamingSystem</a></li>\r\n <li><a href="nutritionorder.html">NutritionOrder</a></li>\r\n <li><a href="observationdefinition.html">ObservationDefinition</a></li>\r\n <li><a href="operationdefinition.html">OperationDefinition</a></li>\r\n <li><a href="operationoutcome.html">OperationOutcome</a></li>\r\n <li><a href="organization.html">Organization</a></li>\r\n <li><a href="organizationaffiliation.html">OrganizationAffiliation</a></li>\r\n <li><a href="paymentnotice.html">PaymentNotice</a></li>\r\n <li><a href="paymentreconciliation.html">PaymentReconciliation</a></li>\r\n <li><a href="plandefinition.html">PlanDefinition</a></li>\r\n <li><a href="practitioner.html">Practitioner</a></li>\r\n <li><a href="practitionerrole.html">PractitionerRole</a></li>\r\n <li><a href="questionnaire.html">Questionnaire</a></li>\r\n <li><a href="researchdefinition.html">ResearchDefinition</a></li>\r\n <li><a href="researchelementdefinition.html">ResearchElementDefinition</a></li>\r\n <li><a href="researchstudy.html">ResearchStudy</a></li>\r\n <li><a href="researchsubject.html">ResearchSubject</a></li>\r\n <li><a href="riskassessment.html">RiskAssessment</a></li>\r\n <li><a href="riskevidencesynthesis.html">RiskEvidenceSynthesis</a></li>\r\n <li><a href="searchparameter.html">SearchParameter</a></li>\r\n <li><a href="slot.html">Slot</a></li>\r\n <li><a href="specimen.html">Specimen</a></li>\r\n <li><a href="specimendefinition.html">SpecimenDefinition</a></li>\r\n <li><a href="structuredefinition.html">StructureDefinition</a></li>\r\n <li><a href="structuremap.html">StructureMap</a></li>\r\n <li><a href="subscription.html">Subscription</a></li>\r\n <li><a href="substance.html">Substance</a></li>\r\n <li><a href="substancenucleicacid.html">SubstanceNucleicAcid</a></li>\r\n <li><a href="substancepolymer.html">SubstancePolymer</a></li>\r\n <li><a href="substanceprotein.html">SubstanceProtein</a></li>\r\n <li><a href="substancereferenceinformation.html">SubstanceReferenceInformation</a></li>\r\n <li><a href="substancesourcematerial.html">SubstanceSourceMaterial</a></li>\r\n <li><a href="substancespecification.html">SubstanceSpecification</a></li>\r\n <li><a href="supplydelivery.html">SupplyDelivery</a></li>\r\n <li><a href="task.html">Task</a></li>\r\n <li><a href="terminologycapabilities.html">TerminologyCapabilities</a></li>\r\n <li><a href="testreport.html">TestReport</a></li>\r\n <li><a href="testscript.html">TestScript</a></li>\r\n <li><a href="valueset.html">ValueSet</a></li>\r\n <li><a href="verificationresult.html">VerificationResult</a></li>\r\n <li><a href="visionprescription.html">VisionPrescription</a></li>\r\n</ul></div>',
  },
  url: "http://hl7.org/fhir/CompartmentDefinition/relatedPerson",
  version: "4.0.1",
  name: "Base FHIR compartment definition for RelatedPerson",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "There is an instance of the relatedPerson compartment for each relatedPerson resource, and the identity of the compartment is the same as the relatedPerson. The set of resources associated with a particular 'related person'",
  code: "RelatedPerson",
  search: true,
  resource: [
    {
      code: "Account",
    },
    {
      code: "ActivityDefinition",
    },
    {
      code: "AdverseEvent",
      param: ["recorder"],
    },
    {
      code: "AllergyIntolerance",
      param: ["asserter"],
    },
    {
      code: "Appointment",
      param: ["actor"],
    },
    {
      code: "AppointmentResponse",
      param: ["actor"],
    },
    {
      code: "AuditEvent",
    },
    {
      code: "Basic",
      param: ["author"],
    },
    {
      code: "Binary",
    },
    {
      code: "BiologicallyDerivedProduct",
    },
    {
      code: "BodyStructure",
    },
    {
      code: "Bundle",
    },
    {
      code: "CapabilityStatement",
    },
    {
      code: "CarePlan",
      param: ["performer"],
    },
    {
      code: "CareTeam",
      param: ["participant"],
    },
    {
      code: "CatalogEntry",
    },
    {
      code: "ChargeItem",
      param: ["enterer", "performer-actor"],
    },
    {
      code: "ChargeItemDefinition",
    },
    {
      code: "Claim",
      param: ["payee"],
    },
    {
      code: "ClaimResponse",
    },
    {
      code: "ClinicalImpression",
    },
    {
      code: "CodeSystem",
    },
    {
      code: "Communication",
      param: ["sender", "recipient"],
    },
    {
      code: "CommunicationRequest",
      param: ["sender", "recipient", "requester"],
    },
    {
      code: "CompartmentDefinition",
    },
    {
      code: "Composition",
      param: ["author"],
    },
    {
      code: "ConceptMap",
    },
    {
      code: "Condition",
      param: ["asserter"],
    },
    {
      code: "Consent",
    },
    {
      code: "Contract",
    },
    {
      code: "Coverage",
      param: ["policy-holder", "subscriber", "payor"],
    },
    {
      code: "CoverageEligibilityRequest",
    },
    {
      code: "CoverageEligibilityResponse",
    },
    {
      code: "DetectedIssue",
    },
    {
      code: "Device",
    },
    {
      code: "DeviceDefinition",
    },
    {
      code: "DeviceMetric",
    },
    {
      code: "DeviceRequest",
    },
    {
      code: "DeviceUseStatement",
    },
    {
      code: "DiagnosticReport",
    },
    {
      code: "DocumentManifest",
      param: ["author", "recipient"],
    },
    {
      code: "DocumentReference",
      param: ["author"],
    },
    {
      code: "EffectEvidenceSynthesis",
    },
    {
      code: "Encounter",
      param: ["participant"],
    },
    {
      code: "Endpoint",
    },
    {
      code: "EnrollmentRequest",
    },
    {
      code: "EnrollmentResponse",
    },
    {
      code: "EpisodeOfCare",
    },
    {
      code: "EventDefinition",
    },
    {
      code: "Evidence",
    },
    {
      code: "EvidenceVariable",
    },
    {
      code: "ExampleScenario",
    },
    {
      code: "ExplanationOfBenefit",
      param: ["payee"],
    },
    {
      code: "FamilyMemberHistory",
    },
    {
      code: "Flag",
    },
    {
      code: "Goal",
    },
    {
      code: "GraphDefinition",
    },
    {
      code: "Group",
    },
    {
      code: "GuidanceResponse",
    },
    {
      code: "HealthcareService",
    },
    {
      code: "ImagingStudy",
    },
    {
      code: "Immunization",
    },
    {
      code: "ImmunizationEvaluation",
    },
    {
      code: "ImmunizationRecommendation",
    },
    {
      code: "ImplementationGuide",
    },
    {
      code: "InsurancePlan",
    },
    {
      code: "Invoice",
      param: ["recipient"],
    },
    {
      code: "Library",
    },
    {
      code: "Linkage",
    },
    {
      code: "List",
    },
    {
      code: "Location",
    },
    {
      code: "Measure",
    },
    {
      code: "MeasureReport",
    },
    {
      code: "Media",
    },
    {
      code: "Medication",
    },
    {
      code: "MedicationAdministration",
      param: ["performer"],
    },
    {
      code: "MedicationDispense",
    },
    {
      code: "MedicationKnowledge",
    },
    {
      code: "MedicationRequest",
    },
    {
      code: "MedicationStatement",
      param: ["source"],
    },
    {
      code: "MedicinalProduct",
    },
    {
      code: "MedicinalProductAuthorization",
    },
    {
      code: "MedicinalProductContraindication",
    },
    {
      code: "MedicinalProductIndication",
    },
    {
      code: "MedicinalProductIngredient",
    },
    {
      code: "MedicinalProductInteraction",
    },
    {
      code: "MedicinalProductManufactured",
    },
    {
      code: "MedicinalProductPackaged",
    },
    {
      code: "MedicinalProductPharmaceutical",
    },
    {
      code: "MedicinalProductUndesirableEffect",
    },
    {
      code: "MessageDefinition",
    },
    {
      code: "MessageHeader",
    },
    {
      code: "MolecularSequence",
    },
    {
      code: "NamingSystem",
    },
    {
      code: "NutritionOrder",
    },
    {
      code: "Observation",
      param: ["performer"],
    },
    {
      code: "ObservationDefinition",
    },
    {
      code: "OperationDefinition",
    },
    {
      code: "OperationOutcome",
    },
    {
      code: "Organization",
    },
    {
      code: "OrganizationAffiliation",
    },
    {
      code: "Patient",
      param: ["link"],
    },
    {
      code: "PaymentNotice",
    },
    {
      code: "PaymentReconciliation",
    },
    {
      code: "Person",
      param: ["link"],
    },
    {
      code: "PlanDefinition",
    },
    {
      code: "Practitioner",
    },
    {
      code: "PractitionerRole",
    },
    {
      code: "Procedure",
      param: ["performer"],
    },
    {
      code: "Provenance",
      param: ["agent"],
    },
    {
      code: "Questionnaire",
    },
    {
      code: "QuestionnaireResponse",
      param: ["author", "source"],
    },
    {
      code: "RelatedPerson",
      param: ["{def}"],
    },
    {
      code: "RequestGroup",
      param: ["participant"],
    },
    {
      code: "ResearchDefinition",
    },
    {
      code: "ResearchElementDefinition",
    },
    {
      code: "ResearchStudy",
    },
    {
      code: "ResearchSubject",
    },
    {
      code: "RiskAssessment",
    },
    {
      code: "RiskEvidenceSynthesis",
    },
    {
      code: "Schedule",
      param: ["actor"],
    },
    {
      code: "SearchParameter",
    },
    {
      code: "ServiceRequest",
      param: ["performer"],
    },
    {
      code: "Slot",
    },
    {
      code: "Specimen",
    },
    {
      code: "SpecimenDefinition",
    },
    {
      code: "StructureDefinition",
    },
    {
      code: "StructureMap",
    },
    {
      code: "Subscription",
    },
    {
      code: "Substance",
    },
    {
      code: "SubstanceNucleicAcid",
    },
    {
      code: "SubstancePolymer",
    },
    {
      code: "SubstanceProtein",
    },
    {
      code: "SubstanceReferenceInformation",
    },
    {
      code: "SubstanceSourceMaterial",
    },
    {
      code: "SubstanceSpecification",
    },
    {
      code: "SupplyDelivery",
    },
    {
      code: "SupplyRequest",
      param: ["requester"],
    },
    {
      code: "Task",
    },
    {
      code: "TerminologyCapabilities",
    },
    {
      code: "TestReport",
    },
    {
      code: "TestScript",
    },
    {
      code: "ValueSet",
    },
    {
      code: "VerificationResult",
    },
    {
      code: "VisionPrescription",
    },
  ],
} as const;
