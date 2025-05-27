import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopicNotificationShape {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  resource?: string;

  _resource?: Element;

  include?: string[];

  _include?: Element[];

  revInclude?: string[];

  _revInclude?: Element[];
}
