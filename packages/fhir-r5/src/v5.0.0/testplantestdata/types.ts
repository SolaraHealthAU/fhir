import type { Extension, Coding, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanTestData {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: Coding;

  content?: Reference;

  sourceString?: string;

  _sourceString?: Element;

  sourceReference?: Reference;
}
