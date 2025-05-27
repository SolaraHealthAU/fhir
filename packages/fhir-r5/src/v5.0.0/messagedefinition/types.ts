import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MessageDefinitionFocus } from "../messagedefinitionfocus/types";
import type { MessageDefinitionAllowedResponse } from "../messagedefinitionallowedresponse/types";

/** Generated from FHIR JSON Schema */

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface MessageDefinition {
  resourceType: `MessageDefinition`;

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

  replaces?: string[];

  base?: string;

  parent?: string[];

  eventCoding?: Coding;

  eventUri?: string;

  _eventUri?: Element;

  category?: string;

  _category?: Element;

  focus?: MessageDefinitionFocus[];

  responseRequired?: string;

  _responseRequired?: Element;

  allowedResponse?: MessageDefinitionAllowedResponse[];

  graph?: string;
}
