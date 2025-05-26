import type {
  Extension,
  CodeableConcept,
  Range,
  Quantity,
  Ratio,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Indicates how the medication is/was taken or should be taken by the patient. */
export interface DosageDoseAndRate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** The kind of dose or rate specified, for example, ordered or calculated. */
  type?: CodeableConcept;

  doseRange?: Range;

  doseQuantity?: Quantity;

  rateRatio?: Ratio;

  rateRange?: Range;

  rateQuantity?: Quantity;
}
