import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface ImmunizationProtocolApplied {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  series?: string;

  _series?: Element;

  authority?: Reference;

  targetDisease?: CodeableConcept[];

  doseNumber?: string;

  _doseNumber?: Element;

  seriesDoses?: string;

  _seriesDoses?: Element;
}
