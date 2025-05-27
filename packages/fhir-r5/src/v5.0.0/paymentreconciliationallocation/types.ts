import type {
  Extension,
  Identifier,
  Reference,
  Element,
  CodeableConcept,
  Money,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface PaymentReconciliationAllocation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  predecessor?: Identifier;

  target?: Reference;

  targetItemString?: string;

  _targetItemString?: Element;

  targetItemIdentifier?: Identifier;

  targetItemPositiveInt?: number;

  _targetItemPositiveInt?: Element;

  encounter?: Reference;

  account?: Reference;

  type?: CodeableConcept;

  submitter?: Reference;

  response?: Reference;

  date?: string;

  _date?: Element;

  responsible?: Reference;

  payee?: Reference;

  amount?: Money;
}
