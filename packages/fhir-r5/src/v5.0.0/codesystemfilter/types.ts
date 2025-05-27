import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemFilter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  description?: string;

  _description?: Element;

  operator?: string[];

  _operator?: Element[];

  value?: string;

  _value?: Element;
}
