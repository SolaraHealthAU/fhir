import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopicCanFilterBy {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  resource?: string;

  _resource?: Element;

  filterParameter?: string;

  _filterParameter?: Element;

  filterDefinition?: string;

  _filterDefinition?: Element;

  comparator?: string[];

  _comparator?: Element[];

  modifier?: string[];

  _modifier?: Element[];
}
