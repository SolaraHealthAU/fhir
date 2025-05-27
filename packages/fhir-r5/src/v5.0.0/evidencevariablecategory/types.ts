import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Range,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes an element that knowledge (Evidence) is about. */
export interface EvidenceVariableCategory {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  valueCodeableConcept?: CodeableConcept;

  valueQuantity?: Quantity;

  valueRange?: Range;
}
