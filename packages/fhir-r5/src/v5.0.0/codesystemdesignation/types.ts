import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemDesignation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language?: string;

  _language?: Element;

  use?: Coding;

  additionalUse?: Coding[];

  value?: string;

  _value?: Element;
}
