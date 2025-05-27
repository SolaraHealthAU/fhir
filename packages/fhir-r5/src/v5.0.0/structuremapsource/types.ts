import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapSource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  context?: string;

  _context?: Element;

  min?: number;

  _min?: Element;

  max?: string;

  _max?: Element;

  type?: string;

  _type?: Element;

  defaultValue?: string;

  _defaultValue?: Element;

  element?: string;

  _element?: Element;

  listMode?: string;

  _listMode?: Element;

  variable?: string;

  _variable?: Element;

  condition?: string;

  _condition?: Element;

  check?: string;

  _check?: Element;

  logMessage?: string;

  _logMessage?: Element;
}
