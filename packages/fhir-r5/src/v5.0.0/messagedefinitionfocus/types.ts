import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface MessageDefinitionFocus {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  profile?: string;

  min?: number;

  _min?: Element;

  max?: string;

  _max?: Element;
}
