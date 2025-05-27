import type { Extension, Element, Coding } from "../core/types";
import type { ValueSetSubProperty } from "../valuesetsubproperty/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetProperty1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueCoding?: Coding;

  valueString?: string;

  _valueString?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  subProperty?: ValueSetSubProperty[];
}
