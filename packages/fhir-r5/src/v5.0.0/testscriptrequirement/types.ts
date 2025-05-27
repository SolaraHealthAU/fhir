import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptRequirement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkUri?: string;

  _linkUri?: Element;

  linkCanonical?: string;

  _linkCanonical?: Element;
}
