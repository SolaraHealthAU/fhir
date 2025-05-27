import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A compartment definition that defines how resources are accessed on a server. */
export interface CompartmentDefinitionResource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  param?: string[];

  _param?: Element[];

  documentation?: string;

  _documentation?: Element;

  startParam?: string;

  _startParam?: Element;

  endParam?: string;

  _endParam?: Element;
}
