import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Money,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimSubDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  revenue?: CodeableConcept;

  category?: CodeableConcept;

  productOrService: CodeableConcept;

  modifier?: CodeableConcept[];

  programCode?: CodeableConcept[];

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  net?: Money;

  udi?: Reference[];
}
