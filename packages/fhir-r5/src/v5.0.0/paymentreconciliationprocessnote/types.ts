import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface PaymentReconciliationProcessNote {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  text?: string;

  _text?: Element;
}
