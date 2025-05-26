import type { Extension, Element, CodeableConcept, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface InvoicePriceComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?:
    | "base"
    | "surcharge"
    | "deduction"
    | "discount"
    | "tax"
    | "informational";

  _type?: Element;

  code?: CodeableConcept;

  factor?: number;

  _factor?: Element;

  amount?: Money;
}
