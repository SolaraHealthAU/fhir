import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinitionPrecondition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  code: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueQuantity?: Quantity;
}
