import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Reference,
  Money,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { PaymentReconciliationAllocation } from "../paymentreconciliationallocation/types";
import type { PaymentReconciliationProcessNote } from "../paymentreconciliationprocessnote/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface PaymentReconciliation {
  resourceType: `PaymentReconciliation`;

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

  type: CodeableConcept;

  status?: string;

  _status?: Element;

  kind?: CodeableConcept;

  period?: Period;

  created?: string;

  _created?: Element;

  enterer?: Reference;

  issuerType?: CodeableConcept;

  paymentIssuer?: Reference;

  request?: Reference;

  requestor?: Reference;

  outcome?: string;

  _outcome?: Element;

  disposition?: string;

  _disposition?: Element;

  date?: string;

  _date?: Element;

  location?: Reference;

  method?: CodeableConcept;

  cardBrand?: string;

  _cardBrand?: Element;

  accountNumber?: string;

  _accountNumber?: Element;

  expirationDate?: string;

  _expirationDate?: Element;

  processor?: string;

  _processor?: Element;

  referenceNumber?: string;

  _referenceNumber?: Element;

  authorization?: string;

  _authorization?: Element;

  tenderedAmount?: Money;

  returnedAmount?: Money;

  amount: Money;

  paymentIdentifier?: Identifier;

  allocation?: PaymentReconciliationAllocation[];

  formCode?: CodeableConcept;

  processNote?: PaymentReconciliationProcessNote[];
}
