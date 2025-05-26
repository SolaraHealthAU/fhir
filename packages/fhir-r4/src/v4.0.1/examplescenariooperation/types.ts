import type { Extension, Element } from "../core/types";
import type { ExampleScenarioContainedInstance } from "../examplescenariocontainedinstance/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  number?: string;

  _number?: Element;

  type?: string;

  _type?: Element;

  name?: string;

  _name?: Element;

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
