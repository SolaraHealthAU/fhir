import type { Extension, Element, CodeableReference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface ImmunizationReaction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  date?: string;

  _date?: Element;

  manifestation?: CodeableReference;

  reported?: boolean;

  _reported?: Element;
}
