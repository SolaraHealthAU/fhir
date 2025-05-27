import type { Extension, Element, Identifier } from "../core/types";
import type { ClaimResponseReviewOutcome } from "../claimresponsereviewoutcome/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseSubDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  subDetailSequence?: number;

  _subDetailSequence?: Element;

  traceNumber?: Identifier[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ClaimResponseReviewOutcome;

  adjudication?: ClaimResponseAdjudication[];
}
