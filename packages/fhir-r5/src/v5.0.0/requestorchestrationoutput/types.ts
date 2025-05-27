import type { Extension, Element, DataRequirement } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestrationOutput {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  title?: string;

  _title?: Element;

  requirement?: DataRequirement;

  relatedData?: string;

  _relatedData?: Element;
}
