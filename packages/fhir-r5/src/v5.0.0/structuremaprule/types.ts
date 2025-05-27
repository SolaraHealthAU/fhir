import type { Extension, Element } from "../core/types";
import type { StructureMapSource } from "../structuremapsource/types";
import type { StructureMapTarget } from "../structuremaptarget/types";
import type { StructureMapDependent } from "../structuremapdependent/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapRule {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  source: StructureMapSource[];

  target?: StructureMapTarget[];

  rule?: StructureMapRule[];

  dependent?: StructureMapDependent[];

  documentation?: string;

  _documentation?: Element;
}
