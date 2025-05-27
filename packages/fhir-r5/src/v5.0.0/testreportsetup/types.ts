import type { Extension } from "../core/types";
import type { TestReportAction } from "../testreportaction/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportSetup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action: TestReportAction[];
}
