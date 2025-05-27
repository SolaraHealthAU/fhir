import type { Extension, Element, Coding, Reference } from "../core/types";
import type { ExampleScenarioVersion } from "../examplescenarioversion/types";
import type { ExampleScenarioContainedInstance } from "../examplescenariocontainedinstance/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioInstance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  key?: string;

  _key?: Element;

  structureType: Coding;

  structureVersion?: string;

  _structureVersion?: Element;

  structureProfileCanonical?: string;

  _structureProfileCanonical?: Element;

  structureProfileUri?: string;

  _structureProfileUri?: Element;

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  content?: Reference;

  version?: ExampleScenarioVersion[];

  containedInstance?: ExampleScenarioContainedInstance[];
}
