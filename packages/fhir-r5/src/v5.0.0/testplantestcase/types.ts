import type { Extension, Element, Reference } from "../core/types";
import type { TestPlanDependency1 } from "../testplandependency1/types";
import type { TestPlanTestRun } from "../testplantestrun/types";
import type { TestPlanTestData } from "../testplantestdata/types";
import type { TestPlanAssertion } from "../testplanassertion/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanTestCase {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  scope?: Reference[];

  dependency?: TestPlanDependency1[];

  testRun?: TestPlanTestRun[];

  testData?: TestPlanTestData[];

  assertion?: TestPlanAssertion[];
}
