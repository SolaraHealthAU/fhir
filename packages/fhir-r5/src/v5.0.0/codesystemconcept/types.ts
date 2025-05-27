import type { Extension, Element } from "../core/types";
import type { CodeSystemDesignation } from "../codesystemdesignation/types";
import type { CodeSystemProperty1 } from "../codesystemproperty1/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemConcept {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  display?: string;

  _display?: Element;

  definition?: string;

  _definition?: Element;

  designation?: CodeSystemDesignation[];

  property?: CodeSystemProperty1[];

  concept?: CodeSystemConcept[];
}
