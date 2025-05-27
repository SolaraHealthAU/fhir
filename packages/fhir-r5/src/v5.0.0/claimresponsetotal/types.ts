import type { Extension, CodeableConcept, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseTotal {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category: CodeableConcept;

  amount: Money;
}
