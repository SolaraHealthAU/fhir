import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface ImmunizationProgramEligibility {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  program: CodeableConcept;

  programStatus: CodeableConcept;
}
