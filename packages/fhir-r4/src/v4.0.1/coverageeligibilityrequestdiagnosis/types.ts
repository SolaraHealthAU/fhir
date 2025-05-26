import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface CoverageEligibilityRequestDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  diagnosisCodeableConcept?: CodeableConcept;

  diagnosisReference?: Reference;
}
