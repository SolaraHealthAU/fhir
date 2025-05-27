import type { Extension, Element, Period } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface NamingSystemUniqueId {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  value?: string;

  _value?: Element;

  preferred?: boolean;

  _preferred?: Element;

  comment?: string;

  _comment?: Element;

  period?: Period;

  authoritative?: boolean;

  _authoritative?: Element;
}
