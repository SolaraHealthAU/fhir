import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The subscription resource describes a particular client's request to be notified about a SubscriptionTopic. */
export interface SubscriptionFilterBy {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  resourceType: `SubscriptionFilterBy`;

  _resourceType?: Element;

  filterParameter?: string;

  _filterParameter?: Element;

  comparator?: string;

  _comparator?: Element;

  modifier?: string;

  _modifier?: Element;

  value?: string;

  _value?: Element;
}
