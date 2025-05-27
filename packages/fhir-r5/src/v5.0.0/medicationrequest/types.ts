import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Annotation,
  Period,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationRequestDispenseRequest } from "../medicationrequestdispenserequest/types";
import type { MedicationRequestSubstitution } from "../medicationrequestsubstitution/types";

/** Generated from FHIR JSON Schema */

/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequest {
  resourceType: `MedicationRequest`;

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

  identifier?: Identifier[];

  basedOn?: Reference[];

  priorPrescription?: Reference;

  groupIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  statusChanged?: string;

  _statusChanged?: Element;

  intent?: string;

  _intent?: Element;

  category?: CodeableConcept[];

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  medication: CodeableReference;

  subject: Reference;

  informationSource?: Reference[];

  encounter?: Reference;

  supportingInformation?: Reference[];

  authoredOn?: string;

  _authoredOn?: Element;

  requester?: Reference;

  reported?: boolean;

  _reported?: Element;

  performerType?: CodeableConcept;

  performer?: Reference[];

  device?: CodeableReference[];

  recorder?: Reference;

  reason?: CodeableReference[];

  courseOfTherapyType?: CodeableConcept;

  insurance?: Reference[];

  note?: Annotation[];

  renderedDosageInstruction?: string;

  _renderedDosageInstruction?: Element;

  effectiveDosePeriod?: Period;

  dosageInstruction?: Dosage[];

  dispenseRequest?: MedicationRequestDispenseRequest;

  substitution?: MedicationRequestSubstitution;

  eventHistory?: Reference[];
}
