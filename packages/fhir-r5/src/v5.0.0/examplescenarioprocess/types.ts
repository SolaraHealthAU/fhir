import type { Extension, Element } from "../core/types";
import type { ExampleScenarioStep } from "../examplescenariostep/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioProcess {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  preConditions?: string;

  _preConditions?: Element;

  postConditions?: string;

  _postConditions?: Element;

  step?: ExampleScenarioStep[];
}
