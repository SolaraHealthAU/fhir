import type { Extension, Coding, Element } from "../core/types";
import type { ExampleScenarioContainedInstance } from "../examplescenariocontainedinstance/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: Coding;

  title?: string;

  _title?: Element;

  initiator?: string;

  _initiator?: Element;

  receiver?: string;

  _receiver?: Element;

  description?: string;

  _description?: Element;

  initiatorActive?: boolean;

  _initiatorActive?: Element;

  receiverActive?: boolean;

  _receiverActive?: Element;

  request?: ExampleScenarioContainedInstance;

  response?: ExampleScenarioContainedInstance;
}
