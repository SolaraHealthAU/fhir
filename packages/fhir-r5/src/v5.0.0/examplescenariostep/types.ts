import type { Extension, Element } from "../core/types";
import type { ExampleScenarioProcess } from "../examplescenarioprocess/types";
import type { ExampleScenarioOperation } from "../examplescenariooperation/types";
import type { ExampleScenarioAlternative } from "../examplescenarioalternative/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioStep {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  number?: string;

  _number?: Element;

  process?: ExampleScenarioProcess;

  workflow?: string;

  operation?: ExampleScenarioOperation;

  alternative?: ExampleScenarioAlternative[];

  pause?: boolean;

  _pause?: Element;
}
