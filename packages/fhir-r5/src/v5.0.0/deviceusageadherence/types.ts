import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a device being used by a patient where the record is the result of a report from the patient or a clinician. */
export interface DeviceUsageAdherence {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  reason: CodeableConcept[];
}
