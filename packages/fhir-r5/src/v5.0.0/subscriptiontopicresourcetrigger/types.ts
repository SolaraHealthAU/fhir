import type { Extension, Element } from "../core/types";
import type { SubscriptionTopicQueryCriteria } from "../subscriptiontopicquerycriteria/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopicResourceTrigger {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  resource?: string;

  _resource?: Element;

  supportedInteraction?: string[];

  _supportedInteraction?: Element[];

  queryCriteria?: SubscriptionTopicQueryCriteria;

  fhirPathCriteria?: string;

  _fhirPathCriteria?: Element;
}
