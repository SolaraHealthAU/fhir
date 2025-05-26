import type { Extension, CodeableConcept, Money, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseAdjudication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category: CodeableConcept;

  reason?: CodeableConcept;

  amount?: Money;

  value?: number;

  _value?: Element;
}
