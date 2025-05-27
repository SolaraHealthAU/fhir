import type { Extension, Element, CodeableConcept, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Availability data for an {item}. */
export interface MonetaryComponent {
  id?: string;

  extension?: Extension[];
  /** base | surcharge | deduction | discount | tax | informational. */
  type: string;

  _type?: Element;
  /** Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc. */
  code?: CodeableConcept;
  /** Factor used for calculating this component. */
  factor?: number;

  _factor?: Element;
  /** Explicit value amount to be used. */
  amount?: Money;
}
