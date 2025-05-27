import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetScope {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  inclusionCriteria?: string;

  _inclusionCriteria?: Element;

  exclusionCriteria?: string;

  _exclusionCriteria?: Element;
}
