import type {
  Meta,
  Element,
  Extension,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubscriptionStatusNotificationEvent } from "../subscriptionstatusnotificationevent/types";

/** Generated from FHIR JSON Schema */

/** The SubscriptionStatus resource describes the state of a Subscription during notifications. */
export interface SubscriptionStatus {
  resourceType: `SubscriptionStatus`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  status?: string;

  _status?: Element;

  type?: string;

  _type?: Element;

  eventsSinceSubscriptionStart?: number;

  _eventsSinceSubscriptionStart?: Element;

  notificationEvent?: SubscriptionStatusNotificationEvent[];

  subscription: Reference;

  topic?: string;

  error?: CodeableConcept[];
}
