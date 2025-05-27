import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface BundleSearch {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  mode?: string;

  _mode?: Element;

  score?: number;

  _score?: Element;
}
