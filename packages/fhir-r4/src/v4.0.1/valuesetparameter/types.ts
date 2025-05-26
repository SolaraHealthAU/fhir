import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface ValueSetParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;
}
