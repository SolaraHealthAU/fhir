import type { Extension, CodeableConcept, Annotation } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface EffectEvidenceSynthesisCertaintySubcomponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  rating?: CodeableConcept[];

  note?: Annotation[];
}
