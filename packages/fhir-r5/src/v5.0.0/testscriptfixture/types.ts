import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptFixture {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  autocreate?: boolean;

  _autocreate?: Element;

  autodelete?: boolean;

  _autodelete?: Element;

  resource?: Reference;
}
