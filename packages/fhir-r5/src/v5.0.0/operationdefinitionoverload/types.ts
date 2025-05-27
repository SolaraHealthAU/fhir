import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface OperationDefinitionOverload {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  parameterName?: string[];

  _parameterName?: Element[];

  comment?: string;

  _comment?: Element;
}
