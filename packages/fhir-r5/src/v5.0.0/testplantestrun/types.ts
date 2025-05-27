import type { Extension, Element } from "../core/types";
import type { TestPlanScript } from "../testplanscript/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanTestRun {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  narrative?: string;

  _narrative?: Element;

  script?: TestPlanScript;
}
