import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface AuditEventNetwork {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  address?: string;

  _address?: Element;

  type?: "1" | "2" | "3" | "4" | "5";

  _type?: Element;
}
