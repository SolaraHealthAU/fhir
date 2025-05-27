import type {
  Extension,
  Attachment,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface CommunicationRequestPayload {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  contentAttachment?: Attachment;

  contentReference?: Reference;

  contentCodeableConcept?: CodeableConcept;
}
