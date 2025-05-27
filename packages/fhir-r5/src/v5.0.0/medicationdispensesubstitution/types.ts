import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. */
export interface MedicationDispenseSubstitution {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  wasSubstituted?: boolean;

  _wasSubstituted?: Element;

  type?: CodeableConcept;

  reason?: CodeableConcept[];

  responsibleParty?: Reference;
}
