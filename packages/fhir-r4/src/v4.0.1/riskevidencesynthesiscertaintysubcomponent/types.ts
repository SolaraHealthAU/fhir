import type { Extension, CodeableConcept, Annotation } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface RiskEvidenceSynthesisCertaintySubcomponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  rating?: CodeableConcept[];

  note?: Annotation[];
}
