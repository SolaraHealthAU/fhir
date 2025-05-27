import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Ratio,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. */
export interface MedicationAdministrationDosage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  text?: string;

  _text?: Element;

  site?: CodeableConcept;

  route?: CodeableConcept;

  method?: CodeableConcept;

  dose?: Quantity;

  rateRatio?: Ratio;

  rateQuantity?: Quantity;
}
