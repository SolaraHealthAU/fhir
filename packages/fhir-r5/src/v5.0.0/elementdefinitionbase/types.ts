import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionBase {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base. */
  path: string;

  _path?: Element;
  /** Minimum cardinality of the base element identified by the path. */
  min: number;

  _min?: Element;
  /** Maximum cardinality of the base element identified by the path. */
  max: string;

  _max?: Element;
}
