import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanScript {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language?: CodeableConcept;

  sourceString?: string;

  _sourceString?: Element;

  sourceReference?: Reference;
}
