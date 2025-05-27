import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface CoveragePaymentBy {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  party: Reference;

  responsibility?: string;

  _responsibility?: Element;
}
