import type { Extension } from "../core/types";
import type { TestScriptOperation } from "../testscriptoperation/types";
import type { TestScriptAssert } from "../testscriptassert/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptAction1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  operation?: TestScriptOperation;

  assert?: TestScriptAssert;
}
