import type {
  Extension,
  CodeableConcept,
  Quantity,
  Range,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeEnvironmentalSetting {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueCodeableConcept?: CodeableConcept;
}
