import type { Extension } from "../core/types";
import type { TestReportAction2 } from "../testreportaction2/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportTeardown {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action: TestReportAction2[];
}
