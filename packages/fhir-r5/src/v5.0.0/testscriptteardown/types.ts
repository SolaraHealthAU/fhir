import type { Extension } from "../core/types";
import type { TestScriptAction2 } from "../testscriptaction2/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptTeardown {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action: TestScriptAction2[];
}
