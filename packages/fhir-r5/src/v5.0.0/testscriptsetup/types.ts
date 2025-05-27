import type { Extension } from "../core/types";
import type { TestScriptAction } from "../testscriptaction/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptSetup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action: TestScriptAction[];
}
