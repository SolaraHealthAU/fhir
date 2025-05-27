import type { Extension, Quantity, Duration } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequestInitialFill {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  quantity?: Quantity;

  duration?: Duration;
}
