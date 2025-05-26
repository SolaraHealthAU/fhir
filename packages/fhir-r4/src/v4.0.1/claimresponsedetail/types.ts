import type { Extension, Element } from "../core/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseSubDetail } from "../claimresponsesubdetail/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  detailSequence?: number;

  _detailSequence?: Element;

  noteNumber?: number[];

  _noteNumber?: Element[];

  adjudication: ClaimResponseAdjudication[];

  subDetail?: ClaimResponseSubDetail[];
}
