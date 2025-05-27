import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Example of workflow instance. */
export interface ExampleScenarioVersion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  key?: string;

  _key?: Element;

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  content?: Reference;
}
