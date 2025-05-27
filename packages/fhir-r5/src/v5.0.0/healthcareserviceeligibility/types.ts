import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The details of a healthcare service available at a location. */
export interface HealthcareServiceEligibility {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  comment?: string;

  _comment?: Element;
}
