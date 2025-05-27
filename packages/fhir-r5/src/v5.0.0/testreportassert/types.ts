import type { Extension, Element } from "../core/types";
import type { TestReportRequirement } from "../testreportrequirement/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportAssert {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  result?: string;

  _result?: Element;

  message?: string;

  _message?: Element;

  detail?: string;

  _detail?: Element;

  requirement?: TestReportRequirement[];
}
