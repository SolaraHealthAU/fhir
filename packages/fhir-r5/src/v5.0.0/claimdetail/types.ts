import type {
  Extension,
  Element,
  Identifier,
  CodeableConcept,
  Money,
  Quantity,
  Reference,
} from "../core/types";
import type { ClaimSubDetail } from "../claimsubdetail/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  traceNumber?: Identifier[];

  revenue?: CodeableConcept;

  category?: CodeableConcept;

  productOrService?: CodeableConcept;

  productOrServiceEnd?: CodeableConcept;

  modifier?: CodeableConcept[];

  programCode?: CodeableConcept[];

  patientPaid?: Money;

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  udi?: Reference[];

  subDetail?: ClaimSubDetail[];
}
