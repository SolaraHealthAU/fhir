import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Money,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { InvoiceParticipant } from "../invoiceparticipant/types";
import type { InvoiceLineItem } from "../invoicelineitem/types";
import type { MonetaryComponent } from "../monetarycomponent/types";

/** Generated from FHIR JSON Schema */

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface Invoice {
  resourceType: `Invoice`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  cancelledReason?: string;

  _cancelledReason?: Element;

  type?: CodeableConcept;

  subject?: Reference;

  recipient?: Reference;

  date?: string;

  _date?: Element;

  creation?: string;

  _creation?: Element;

  periodDate?: string;

  _periodDate?: Element;

  periodPeriod?: Period;

  participant?: InvoiceParticipant[];

  issuer?: Reference;

  account?: Reference;

  lineItem?: InvoiceLineItem[];

  totalPriceComponent?: MonetaryComponent[];

  totalNet?: Money;

  totalGross?: Money;

  paymentTerms?: string;

  _paymentTerms?: Element;

  note?: Annotation[];
}
