import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptScope {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  artifact: string;

  conformance?: CodeableConcept;

  phase?: CodeableConcept;
}
