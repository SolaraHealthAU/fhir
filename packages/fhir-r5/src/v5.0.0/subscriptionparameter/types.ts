import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The subscription resource describes a particular client's request to be notified about a SubscriptionTopic. */
export interface SubscriptionParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  value?: string;

  _value?: Element;
}
