import type {
  Meta,
  Element,
  Extension,
  Coding,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MessageHeaderDestination } from "../messageheaderdestination/types";
import type { MessageHeaderSource } from "../messageheadersource/types";
import type { MessageHeaderResponse } from "../messageheaderresponse/types";

/** Generated from FHIR JSON Schema */

/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeader {
  resourceType: `MessageHeader`;

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

  eventCoding?: Coding;

  eventCanonical?: string;

  _eventCanonical?: Element;

  destination?: MessageHeaderDestination[];

  sender?: Reference;

  author?: Reference;

  source: MessageHeaderSource;

  responsible?: Reference;

  reason?: CodeableConcept;

  response?: MessageHeaderResponse;

  focus?: Reference[];

  definition?: string;
}
