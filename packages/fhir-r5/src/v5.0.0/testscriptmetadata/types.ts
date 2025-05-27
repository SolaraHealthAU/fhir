import type { Extension } from "../core/types";
import type { TestScriptLink } from "../testscriptlink/types";
import type { TestScriptCapability } from "../testscriptcapability/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptMetadata {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  link?: TestScriptLink[];

  capability: TestScriptCapability[];
}
