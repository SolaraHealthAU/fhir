import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanDependency1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  predecessor?: Reference;
}
