import type { Extension, Element, Duration, Range } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestGroupRelatedAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  actionId?: string;

  _actionId?: Element;

  relationship?: string;

  _relationship?: Element;

  offsetDuration?: Duration;

  offsetRange?: Range;
}
