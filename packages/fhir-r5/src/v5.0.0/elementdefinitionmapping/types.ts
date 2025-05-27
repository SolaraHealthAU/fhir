import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionMapping {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** An internal reference to the definition of a mapping. */
  identity: string;

  _identity?: Element;
  /** Identifies the computable language in which mapping.map is expressed. */
  language?: string;

  _language?: Element;
  /** Expresses what part of the target specification corresponds to this element. */
  map: string;

  _map?: Element;
  /** Comments that provide information about the mapping or its use. */
  comment?: string;

  _comment?: Element;
}
