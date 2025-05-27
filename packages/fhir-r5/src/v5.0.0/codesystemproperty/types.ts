import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemProperty {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  uri?: string;

  _uri?: Element;

  description?: string;

  _description?: Element;

  type?: string;

  _type?: Element;
}
