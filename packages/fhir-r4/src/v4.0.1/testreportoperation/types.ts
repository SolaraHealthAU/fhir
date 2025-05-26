import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  result?: "pass" | "skip" | "fail" | "warning" | "error";

  _result?: Element;

  message?: string;

  _message?: Element;

  detail?: string;

  _detail?: Element;
}
