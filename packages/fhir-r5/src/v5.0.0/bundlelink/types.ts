import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface BundleLink {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  relation?: string;

  _relation?: Element;

  url?: string;

  _url?: Element;
}
