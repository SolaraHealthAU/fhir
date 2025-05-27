import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface PersonLink {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  target: Reference;

  assurance?: string;

  _assurance?: Element;
}
