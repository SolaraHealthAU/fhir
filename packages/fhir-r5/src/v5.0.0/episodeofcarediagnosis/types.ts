import type {
  Extension,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface EpisodeOfCareDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  condition?: CodeableReference[];

  use?: CodeableConcept;
}
