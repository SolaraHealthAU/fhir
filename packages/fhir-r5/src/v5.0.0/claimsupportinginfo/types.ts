import type {
  Extension,
  Element,
  CodeableConcept,
  Period,
  Quantity,
  Attachment,
  Reference,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimSupportingInfo {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  category: CodeableConcept;

  code?: CodeableConcept;

  timingDate?: string;

  _timingDate?: Element;

  timingPeriod?: Period;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueString?: string;

  _valueString?: Element;

  valueQuantity?: Quantity;

  valueAttachment?: Attachment;

  valueReference?: Reference;

  valueIdentifier?: Identifier;

  reason?: CodeableConcept;
}
