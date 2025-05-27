import type { Extension, Reference } from "../core/types";
import type { MedicationKnowledgeCost } from "../medicationknowledgecost/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgePackaging {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  cost?: MedicationKnowledgeCost[];

  packagedProduct?: Reference;
}
