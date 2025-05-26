import type { Extension, Element } from "../core/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseSubDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  subDetailSequence?: number;

  _subDetailSequence?: Element;

  noteNumber?: number[];

  _noteNumber?: Element[];

  adjudication?: ClaimResponseAdjudication[];
}
