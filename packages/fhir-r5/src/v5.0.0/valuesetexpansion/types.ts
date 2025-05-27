import type { Extension, Element } from "../core/types";
import type { ValueSetParameter } from "../valuesetparameter/types";
import type { ValueSetProperty } from "../valuesetproperty/types";
import type { ValueSetContains } from "../valuesetcontains/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetExpansion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: string;

  _identifier?: Element;

  next?: string;

  _next?: Element;

  timestamp?: string;

  _timestamp?: Element;

  total?: number;

  _total?: Element;

  offset?: number;

  _offset?: Element;

  parameter?: ValueSetParameter[];

  property?: ValueSetProperty[];

  contains?: ValueSetContains[];
}
