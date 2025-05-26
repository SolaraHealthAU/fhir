import type { Extension } from "../core/types";
import type { TestReportOperation } from "../testreportoperation/types";
import type { TestReportAssert } from "../testreportassert/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  operation?: TestReportOperation;

  assert?: TestReportAssert;
}
