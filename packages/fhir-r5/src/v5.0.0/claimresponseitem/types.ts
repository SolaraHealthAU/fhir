import type { Extension, Element, Identifier } from "../core/types";
import type { ClaimResponseReviewOutcome } from "../claimresponsereviewoutcome/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseDetail } from "../claimresponsedetail/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemSequence?: number;

  _itemSequence?: Element;

  traceNumber?: Identifier[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ClaimResponseReviewOutcome;

  adjudication?: ClaimResponseAdjudication[];

  detail?: ClaimResponseDetail[];
}
