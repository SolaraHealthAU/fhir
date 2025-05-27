import type {
  Extension,
  Element,
  CodeableConcept,
  Period,
  Quantity,
  Attachment,
  Reference,
  Identifier,
  Coding,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitSupportingInfo {
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

  reason?: Coding;
}
