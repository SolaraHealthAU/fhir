import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetFilter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  property?: string;

  _property?: Element;

  op?: string;

  _op?: Element;

  value?: string;

  _value?: Element;
}
