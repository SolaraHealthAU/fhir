import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface SearchParameterComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  definition: string;

  expression?: string;

  _expression?: Element;
}
