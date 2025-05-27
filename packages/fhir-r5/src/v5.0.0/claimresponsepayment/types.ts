import type {
  Extension,
  CodeableConcept,
  Money,
  Element,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponsePayment {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  adjustment?: Money;

  adjustmentReason?: CodeableConcept;

  date?: string;

  _date?: Element;

  amount: Money;

  identifier?: Identifier;
}
