import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  uri?: string;

  _uri?: Element;

  display?: string;

  _display?: Element;
}
