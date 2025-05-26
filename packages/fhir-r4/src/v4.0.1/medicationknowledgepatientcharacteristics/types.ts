import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgePatientCharacteristics {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  characteristicCodeableConcept?: CodeableConcept;

  characteristicQuantity?: Quantity;

  value?: string[];

  _value?: Element[];
}
