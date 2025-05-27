import type { Extension, Element } from "../core/types";
import type { StructureMapInput } from "../structuremapinput/types";
import type { StructureMapRule } from "../structuremaprule/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapGroup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  extends?: string;

  _extends?: Element;

  typeMode?: string;

  _typeMode?: Element;

  documentation?: string;

  _documentation?: Element;

  input: StructureMapInput[];

  rule?: StructureMapRule[];
}
