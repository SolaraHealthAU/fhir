import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface EpisodeOfCareReason {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  use?: CodeableConcept;

  value?: CodeableReference[];
}
