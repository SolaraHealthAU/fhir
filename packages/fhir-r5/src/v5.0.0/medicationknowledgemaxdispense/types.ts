import type { Extension, Quantity, Duration } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeMaxDispense {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  quantity: Quantity;

  period?: Duration;
}
