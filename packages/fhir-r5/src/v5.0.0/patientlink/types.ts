import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface PatientLink {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  other: Reference;

  type?: string;

  _type?: Element;
}
