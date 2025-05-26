import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemProperty1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  valueCode?: string;

  _valueCode?: Element;

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
}
