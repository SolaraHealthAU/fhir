import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface MedicinalProductNamePart {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  part?: string;

  _part?: Element;

  type: Coding;
}
