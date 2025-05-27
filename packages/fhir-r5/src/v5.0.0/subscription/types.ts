import type {
  Meta,
  Element,
  Extension,
  Identifier,
  ContactPoint,
  Reference,
  Coding,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubscriptionFilterBy } from "../subscriptionfilterby/types";
import type { SubscriptionParameter } from "../subscriptionparameter/types";

/** Generated from FHIR JSON Schema */

/** The subscription resource describes a particular client's request to be notified about a SubscriptionTopic. */
export interface Subscription {
  resourceType: `Subscription`;

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

  identifier?: Identifier[];

  name?: string;

  _name?: Element;

  status?: string;

  _status?: Element;

  topic: string;

  contact?: ContactPoint[];

  end?: string;

  _end?: Element;

  managingEntity?: Reference;

  reason?: string;

  _reason?: Element;

  filterBy?: SubscriptionFilterBy[];

  channelType: Coding;

  endpoint?: string;

  _endpoint?: Element;

  parameter?: SubscriptionParameter[];

  heartbeatPeriod?: number;

  _heartbeatPeriod?: Element;

  timeout?: number;

  _timeout?: Element;

  contentType?: string;

  _contentType?: Element;

  content?: string;

  _content?: Element;

  maxCount?: number;

  _maxCount?: Element;
}
