import type { Extension, Element } from "../core/types";
import type { ValueSetConcept } from "../valuesetconcept/types";
import type { ValueSetFilter } from "../valuesetfilter/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetInclude {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  system?: string;

  _system?: Element;

  version?: string;

  _version?: Element;

  concept?: ValueSetConcept[];

  filter?: ValueSetFilter[];

  valueSet?: string[];

  copyright?: string;

  _copyright?: Element;
}
