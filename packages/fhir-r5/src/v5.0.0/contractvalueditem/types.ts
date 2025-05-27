import type {
  Extension,
  CodeableConcept,
  Reference,
  Identifier,
  Element,
  Quantity,
  Money,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractValuedItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  entityCodeableConcept?: CodeableConcept;

  entityReference?: Reference;

  identifier?: Identifier;

  effectiveTime?: string;

  _effectiveTime?: Element;

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  points?: number;

  _points?: Element;

  net?: Money;

  payment?: string;

  _payment?: Element;

  paymentDate?: string;

  _paymentDate?: Element;

  responsible?: Reference;

  recipient?: Reference;

  linkId?: string[];

  _linkId?: Element[];

  securityLabelNumber?: number[];

  _securityLabelNumber?: Element[];
}
