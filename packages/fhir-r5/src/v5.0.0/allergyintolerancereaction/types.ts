import type {
  Extension,
  CodeableConcept,
  CodeableReference,
  Element,
  Annotation,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance. */
export interface AllergyIntoleranceReaction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  substance?: CodeableConcept;

  manifestation: CodeableReference[];

  description?: string;

  _description?: Element;

  onset?: string;

  _onset?: Element;

  severity?: string;

  _severity?: Element;

  exposureRoute?: CodeableConcept;

  note?: Annotation[];
}
