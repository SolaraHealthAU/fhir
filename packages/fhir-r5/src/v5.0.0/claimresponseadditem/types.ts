import type {
  Extension,
  Element,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Address,
  Quantity,
  Money,
} from "../core/types";
import type { ClaimResponseBodySite } from "../claimresponsebodysite/types";
import type { ClaimResponseReviewOutcome } from "../claimresponsereviewoutcome/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseDetail1 } from "../claimresponsedetail1/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseAddItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemSequence?: number[];

  _itemSequence?: Element[];

  detailSequence?: number[];

  _detailSequence?: Element[];

  subdetailSequence?: number[];

  _subdetailSequence?: Element[];

  traceNumber?: Identifier[];

  provider?: Reference[];

  revenue?: CodeableConcept;

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

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  bodySite?: ClaimResponseBodySite[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ClaimResponseReviewOutcome;

  adjudication?: ClaimResponseAdjudication[];

  detail?: ClaimResponseDetail1[];
}
