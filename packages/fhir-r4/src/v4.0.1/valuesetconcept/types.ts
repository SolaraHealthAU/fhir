import type { Extension, Element } from "../core/types";
import type { ValueSetDesignation } from "../valuesetdesignation/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetConcept {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  display?: string;

  _display?: Element;

  designation?: ValueSetDesignation[];
}
