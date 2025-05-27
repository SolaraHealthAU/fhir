import type {
  Extension,
  Element,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Address,
  Money,
  Quantity,
} from "../core/types";
import type { ClaimBodySite } from "../claimbodysite/types";
import type { ClaimDetail } from "../claimdetail/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface ClaimItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  traceNumber?: Identifier[];

  careTeamSequence?: number[];

  _careTeamSequence?: Element[];

  diagnosisSequence?: number[];

  _diagnosisSequence?: Element[];

  procedureSequence?: number[];

  _procedureSequence?: Element[];

  informationSequence?: number[];

  _informationSequence?: Element[];

  revenue?: CodeableConcept;

  category?: CodeableConcept;

  productOrService?: CodeableConcept;

  productOrServiceEnd?: CodeableConcept;

  request?: Reference[];

  modifier?: CodeableConcept[];

  programCode?: CodeableConcept[];

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;

  locationCodeableConcept?: CodeableConcept;

  locationAddress?: Address;

  locationReference?: Reference;

  patientPaid?: Money;

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  udi?: Reference[];

  bodySite?: ClaimBodySite[];

  encounter?: Reference[];

  detail?: ClaimDetail[];
}
