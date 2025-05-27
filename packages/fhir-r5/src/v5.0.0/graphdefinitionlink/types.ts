import type { Extension, Element } from "../core/types";
import type { GraphDefinitionCompartment } from "../graphdefinitioncompartment/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface GraphDefinitionLink {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  min?: number;

  _min?: Element;

  max?: string;

  _max?: Element;

  sourceId?: string;

  _sourceId?: Element;

  path?: string;

  _path?: Element;

  sliceName?: string;

  _sliceName?: Element;

  targetId?: string;

  _targetId?: Element;

  params?: string;

  _params?: Element;

  compartment?: GraphDefinitionCompartment[];
}
