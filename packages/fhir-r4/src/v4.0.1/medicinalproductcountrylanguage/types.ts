import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface MedicinalProductCountryLanguage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  country: CodeableConcept;

  jurisdiction?: CodeableConcept;

  language: CodeableConcept;
}
