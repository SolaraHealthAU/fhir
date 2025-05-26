import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetDesignation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language?: string;

  _language?: Element;

  use?: Coding;

  value?: string;

  _value?: Element;
}
