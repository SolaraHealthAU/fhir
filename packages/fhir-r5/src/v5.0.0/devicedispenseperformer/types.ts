import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of dispensation of a device - i.e., assigning a device to a patient, or to a professional for their use. */
export interface DeviceDispensePerformer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
