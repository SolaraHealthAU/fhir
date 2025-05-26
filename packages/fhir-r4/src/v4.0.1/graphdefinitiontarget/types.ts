import type { Extension, Element } from "../core/types";
import type { GraphDefinitionCompartment } from "../graphdefinitioncompartment/types";
import type { GraphDefinitionLink } from "../graphdefinitionlink/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface GraphDefinitionTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  params?: string;

  _params?: Element;

  profile?: string;

  compartment?: GraphDefinitionCompartment[];

  link?: GraphDefinitionLink[];
}
