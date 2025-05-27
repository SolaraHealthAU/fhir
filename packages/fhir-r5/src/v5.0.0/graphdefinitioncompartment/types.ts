import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface GraphDefinitionCompartment {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  use?: string;

  _use?: Element;

  rule?: string;

  _rule?: Element;

  code?: string;

  _code?: Element;

  expression?: string;

  _expression?: Element;

  description?: string;

  _description?: Element;
}
