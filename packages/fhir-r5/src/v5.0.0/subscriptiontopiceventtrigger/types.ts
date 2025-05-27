import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopicEventTrigger {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  event: CodeableConcept;

  resource?: string;

  _resource?: Element;
}
