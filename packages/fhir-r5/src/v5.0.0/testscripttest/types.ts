import type { Extension, Element } from "../core/types";
import type { TestScriptAction1 } from "../testscriptaction1/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptTest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  action: TestScriptAction1[];
}
