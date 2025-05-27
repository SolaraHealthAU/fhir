import type {
  Extension,
  CodeableConcept,
  Reference,
  Element,
  Quantity,
  Range,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes an element that knowledge (Evidence) is about. */
export interface EvidenceVariableDefinitionByTypeAndValue {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  method?: CodeableConcept[];

  device?: Reference;

  valueCodeableConcept?: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueReference?: Reference;

  valueId?: string;

  _valueId?: Element;

  offset?: CodeableConcept;
}
