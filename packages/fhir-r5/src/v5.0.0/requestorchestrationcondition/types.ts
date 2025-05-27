import type { Extension, Element, Expression } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestrationCondition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  kind?: string;

  _kind?: Element;

  expression?: Expression;
}
