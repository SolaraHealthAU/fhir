import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The SubscriptionStatus resource describes the state of a Subscription during notifications. */
export interface SubscriptionStatusNotificationEvent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  eventNumber?: number;

  _eventNumber?: Element;

  timestamp?: string;

  _timestamp?: Element;

  focus?: Reference;

  additionalContext?: Reference[];
}
