import type {
  Extension,
  Identifier,
  CodeableConcept,
  Quantity,
  Money,
  Element,
} from "../core/types";
import type { ClaimResponseReviewOutcome } from "../claimresponsereviewoutcome/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseSubDetail1 } from "../claimresponsesubdetail1/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseDetail1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  traceNumber?: Identifier[];

  revenue?: CodeableConcept;

  productOrService?: CodeableConcept;

  productOrServiceEnd?: CodeableConcept;

  modifier?: CodeableConcept[];

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ClaimResponseReviewOutcome;

  adjudication?: ClaimResponseAdjudication[];

  subDetail?: ClaimResponseSubDetail1[];
}
