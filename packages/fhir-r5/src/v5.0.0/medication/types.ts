import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationIngredient } from "../medicationingredient/types";
import type { MedicationBatch } from "../medicationbatch/types";

/** Generated from FHIR JSON Schema */

/** This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface Medication {
  resourceType: `Medication`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  code?: CodeableConcept;

  status?: string;

  _status?: Element;

  marketingAuthorizationHolder?: Reference;

  doseForm?: CodeableConcept;

  totalVolume?: Quantity;

  ingredient?: MedicationIngredient[];

  batch?: MedicationBatch;

  definition?: Reference;
}
