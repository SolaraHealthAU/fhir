import type {
  Extension,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of association or dissociation of a device with a patient. */
export interface DeviceAssociationOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  status: CodeableConcept;

  operator?: Reference[];

  period?: Period;
}
