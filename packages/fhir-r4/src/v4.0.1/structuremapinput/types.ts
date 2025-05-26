import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapInput {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  type?: string;

  _type?: Element;

  mode?: "source" | "target";

  _mode?: Element;

  documentation?: string;

  _documentation?: Element;
}
