import type { Extension, Element } from "../core/types";
import type { ValueSetInclude } from "../valuesetinclude/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetCompose {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  lockedDate?: string;

  _lockedDate?: Element;

  inactive?: boolean;

  _inactive?: Element;

  include: ValueSetInclude[];

  exclude?: ValueSetInclude[];

  property?: string[];

  _property?: Element[];
}
