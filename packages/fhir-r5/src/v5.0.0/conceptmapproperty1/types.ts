import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapProperty1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  valueCoding?: Coding;

  valueString?: string;

  _valueString?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueCode?: string;

  _valueCode?: Element;
}
