import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface AuditEventDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  valueString?: string;

  _valueString?: Element;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;
}
