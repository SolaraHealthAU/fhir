import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptRequestHeader {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  field?: string;

  _field?: Element;

  value?: string;

  _value?: Element;
}
