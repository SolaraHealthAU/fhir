import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptDestination {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  index?: number;

  _index?: Element;

  profile: Coding;

  url?: string;

  _url?: Element;
}
