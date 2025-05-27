import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResultPrimarySource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  who?: Reference;

  type?: CodeableConcept[];

  communicationMethod?: CodeableConcept[];

  validationStatus?: CodeableConcept;

  validationDate?: string;

  _validationDate?: Element;

  canPushUpdates?: CodeableConcept;

  pushTypeAvailable?: CodeableConcept[];
}
