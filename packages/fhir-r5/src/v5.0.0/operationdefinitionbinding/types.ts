import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface OperationDefinitionBinding {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  strength?: string;

  _strength?: Element;

  valueSet: string;
}
