import type {
  Extension,
  Element,
  Period,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { MonetaryComponent } from "../monetarycomponent/types";

/** Generated from FHIR JSON Schema */

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface InvoiceLineItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;

  chargeItemReference?: Reference;

  chargeItemCodeableConcept?: CodeableConcept;

  priceComponent?: MonetaryComponent[];
}
