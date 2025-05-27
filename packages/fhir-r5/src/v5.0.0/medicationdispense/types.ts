import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableReference,
  CodeableConcept,
  Quantity,
  Annotation,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationDispensePerformer } from "../medicationdispenseperformer/types";
import type { MedicationDispenseSubstitution } from "../medicationdispensesubstitution/types";

/** Generated from FHIR JSON Schema */

/** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. */
export interface MedicationDispense {
  resourceType: `MedicationDispense`;

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

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  notPerformedReason?: CodeableReference;

  statusChanged?: string;

  _statusChanged?: Element;

  category?: CodeableConcept[];

  medication: CodeableReference;

  subject: Reference;

  encounter?: Reference;

  supportingInformation?: Reference[];

  performer?: MedicationDispensePerformer[];

  location?: Reference;

  authorizingPrescription?: Reference[];

  type?: CodeableConcept;

  quantity?: Quantity;

  daysSupply?: Quantity;

  recorded?: string;

  _recorded?: Element;

  whenPrepared?: string;

  _whenPrepared?: Element;

  whenHandedOver?: string;

  _whenHandedOver?: Element;

  destination?: Reference;

  receiver?: Reference[];

  note?: Annotation[];

  renderedDosageInstruction?: string;

  _renderedDosageInstruction?: Element;

  dosageInstruction?: Dosage[];

  substitution?: MedicationDispenseSubstitution;

  eventHistory?: Reference[];
}
