import type { Extension, Reference, CodeableConcept } from "../core/types";
import type { MedicationKnowledgeIngredient } from "../medicationknowledgeingredient/types";
import type { MedicationKnowledgeDrugCharacteristic } from "../medicationknowledgedrugcharacteristic/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeDefinitional {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  definition?: Reference[];

  doseForm?: CodeableConcept;

  intendedRoute?: CodeableConcept[];

  ingredient?: MedicationKnowledgeIngredient[];

  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];
}
