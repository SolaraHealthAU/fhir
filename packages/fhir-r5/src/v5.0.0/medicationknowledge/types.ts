import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
  Period,
  Reference,
  RelatedArtifact,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationKnowledgeRelatedMedicationKnowledge } from "../medicationknowledgerelatedmedicationknowledge/types";
import type { MedicationKnowledgeMonograph } from "../medicationknowledgemonograph/types";
import type { MedicationKnowledgeCost } from "../medicationknowledgecost/types";
import type { MedicationKnowledgeMonitoringProgram } from "../medicationknowledgemonitoringprogram/types";
import type { MedicationKnowledgeIndicationGuideline } from "../medicationknowledgeindicationguideline/types";
import type { MedicationKnowledgeMedicineClassification } from "../medicationknowledgemedicineclassification/types";
import type { MedicationKnowledgePackaging } from "../medicationknowledgepackaging/types";
import type { MedicationKnowledgeStorageGuideline } from "../medicationknowledgestorageguideline/types";
import type { MedicationKnowledgeRegulatory } from "../medicationknowledgeregulatory/types";
import type { MedicationKnowledgeDefinitional } from "../medicationknowledgedefinitional/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledge {
  resourceType: `MedicationKnowledge`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  versionAlgorithmString?: string;

  _versionAlgorithmString?: Element;

  versionAlgorithmCoding?: Coding;

  name?: string[];

  _name?: Element[];

  title?: string;

  _title?: Element;

  status?: string;

  _status?: Element;

  experimental?: boolean;

  _experimental?: Element;

  date?: string;

  _date?: Element;

  publisher?: string;

  _publisher?: Element;

  contact?: ContactDetail[];

  description?: string;

  _description?: Element;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];

  purpose?: string;

  _purpose?: Element;

  copyright?: string;

  _copyright?: Element;

  copyrightLabel?: string;

  _copyrightLabel?: Element;

  approvalDate?: string;

  _approvalDate?: Element;

  lastReviewDate?: string;

  _lastReviewDate?: Element;

  effectivePeriod?: Period;

  topic?: CodeableConcept[];

  author?: Reference;

  editor?: ContactDetail[];

  reviewer?: ContactDetail[];

  endorser?: ContactDetail[];

  relatedArtifact?: RelatedArtifact[];

  code?: CodeableConcept;

  intendedJurisdiction?: CodeableConcept[];

  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];

  associatedMedication?: Reference[];

  productType?: CodeableConcept[];

  monograph?: MedicationKnowledgeMonograph[];

  preparationInstruction?: string;

  _preparationInstruction?: Element;

  cost?: MedicationKnowledgeCost[];

  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  indicationGuideline?: MedicationKnowledgeIndicationGuideline[];

  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  packaging?: MedicationKnowledgePackaging[];

  clinicalUseIssue?: Reference[];

  storageGuideline?: MedicationKnowledgeStorageGuideline[];

  regulatory?: MedicationKnowledgeRegulatory[];

  definitional?: MedicationKnowledgeDefinitional;
}
