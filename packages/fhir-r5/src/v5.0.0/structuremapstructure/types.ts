import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapStructure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  url: string;

  mode?: string;

  _mode?: Element;

  alias?: string;

  _alias?: Element;

  documentation?: string;

  _documentation?: Element;
}
