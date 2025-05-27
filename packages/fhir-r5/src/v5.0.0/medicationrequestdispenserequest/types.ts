import type {
  Extension,
  Duration,
  Period,
  Element,
  Quantity,
  Reference,
  Annotation,
  CodeableConcept,
} from "../core/types";
import type { MedicationRequestInitialFill } from "../medicationrequestinitialfill/types";

/** Generated from FHIR JSON Schema */

/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequestDispenseRequest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  initialFill?: MedicationRequestInitialFill;

  dispenseInterval?: Duration;

  validityPeriod?: Period;

  numberOfRepeatsAllowed?: number;

  _numberOfRepeatsAllowed?: Element;

  quantity?: Quantity;

  expectedSupplyDuration?: Duration;

  dispenser?: Reference;

  dispenserInstruction?: Annotation[];

  doseAdministrationAid?: CodeableConcept;
}
