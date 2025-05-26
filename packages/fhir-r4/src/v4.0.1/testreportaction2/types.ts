import type { Extension } from "../core/types";
import type { TestReportOperation } from "../testreportoperation/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportAction2 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  operation: TestReportOperation;
}
