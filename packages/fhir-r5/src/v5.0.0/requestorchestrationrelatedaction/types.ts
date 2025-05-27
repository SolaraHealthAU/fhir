import type { Extension, Element, Duration, Range } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestrationRelatedAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  targetId?: string;

  _targetId?: Element;

  relationship?: string;

  _relationship?: Element;

  endRelationship?: string;

  _endRelationship?: Element;

  offsetDuration?: Duration;

  offsetRange?: Range;
}
