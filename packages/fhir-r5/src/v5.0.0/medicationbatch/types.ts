import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface MedicationBatch {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  lotNumber?: string;

  _lotNumber?: Element;

  expirationDate?: string;

  _expirationDate?: Element;
}
