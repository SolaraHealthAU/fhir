import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  Money,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
export interface PaymentNotice {
  resourceType: `PaymentNotice`;

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

  request?: Reference;

  response?: Reference;

  created?: string;

  _created?: Element;

  reporter?: Reference;

  payment?: Reference;

  paymentDate?: string;

  _paymentDate?: Element;

  payee?: Reference;

  recipient: Reference;

  amount: Money;

  paymentStatus?: CodeableConcept;
}
