import type { Extension, Element } from "../core/types";
import type { TestReportAction1 } from "../testreportaction1/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReportTest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  action: TestReportAction1[];
}
