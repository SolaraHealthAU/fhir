import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing. */
export interface ProcedureFocalDevice {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  action?: CodeableConcept;

  manipulated: Reference;
}
