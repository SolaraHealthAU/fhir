import type { Extension, Element, Coding, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapDependsOn {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  attribute?: string;

  _attribute?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueCoding?: Coding;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueSet?: string;
}
