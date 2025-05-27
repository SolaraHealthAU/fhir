import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptCapability {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  required?: boolean;

  _required?: Element;

  validated?: boolean;

  _validated?: Element;

  description?: string;

  _description?: Element;

  origin?: number[];

  _origin?: Element[];

  destination?: number;

  _destination?: Element;

  link?: string[];

  _link?: Element[];

  capabilities: string;
}
