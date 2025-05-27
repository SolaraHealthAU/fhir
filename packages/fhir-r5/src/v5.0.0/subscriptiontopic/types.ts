import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubscriptionTopicResourceTrigger } from "../subscriptiontopicresourcetrigger/types";
import type { SubscriptionTopicEventTrigger } from "../subscriptiontopiceventtrigger/types";
import type { SubscriptionTopicCanFilterBy } from "../subscriptiontopiccanfilterby/types";
import type { SubscriptionTopicNotificationShape } from "../subscriptiontopicnotificationshape/types";

/** Generated from FHIR JSON Schema */

/** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopic {
  resourceType: `SubscriptionTopic`;

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

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  versionAlgorithmString?: string;

  _versionAlgorithmString?: Element;

  versionAlgorithmCoding?: Coding;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  status?: string;

  _status?: Element;

  experimental?: boolean;

  _experimental?: Element;

  date?: string;

  _date?: Element;

  publisher?: string;

  _publisher?: Element;

  contact?: ContactDetail[];

  description?: string;

  _description?: Element;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];

  purpose?: string;

  _purpose?: Element;

  copyright?: string;

  _copyright?: Element;

  copyrightLabel?: string;

  _copyrightLabel?: Element;

  derivedFrom?: string[];

  approvalDate?: string;

  _approvalDate?: Element;

  lastReviewDate?: string;

  _lastReviewDate?: Element;

  effectivePeriod?: Period;

  resourceTrigger?: SubscriptionTopicResourceTrigger[];

  eventTrigger?: SubscriptionTopicEventTrigger[];

  canFilterBy?: SubscriptionTopicCanFilterBy[];

  notificationShape?: SubscriptionTopicNotificationShape[];
}
