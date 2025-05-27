import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportRequirement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkUri?: string;

  _linkUri?: Element;

  linkCanonical?: string;

  _linkCanonical?: Element;
}
