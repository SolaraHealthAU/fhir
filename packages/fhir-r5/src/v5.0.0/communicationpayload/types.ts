import type {
  Extension,
  Attachment,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency communication to a provider/reporter in response to a case report for a reportable condition. */
export interface CommunicationPayload {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  contentAttachment?: Attachment;

  contentReference?: Reference;

  contentCodeableConcept?: CodeableConcept;
}
