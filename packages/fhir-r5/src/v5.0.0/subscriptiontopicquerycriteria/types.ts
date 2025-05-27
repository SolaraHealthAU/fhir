import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopicQueryCriteria {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  previous?: string;

  _previous?: Element;

  resultForCreate?: string;

  _resultForCreate?: Element;

  current?: string;

  _current?: Element;

  resultForDelete?: string;

  _resultForDelete?: Element;

  requireBoth?: boolean;

  _requireBoth?: Element;
}
