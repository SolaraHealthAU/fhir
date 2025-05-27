import type {
  Extension,
  Identifier,
  CodeableConcept,
  Money,
  Quantity,
  Element,
} from "../core/types";
import type { ExplanationOfBenefitReviewOutcome } from "../explanationofbenefitreviewoutcome/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitSubDetail1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  traceNumber?: Identifier[];

  revenue?: CodeableConcept;

  productOrService?: CodeableConcept;

  productOrServiceEnd?: CodeableConcept;

  modifier?: CodeableConcept[];

  patientPaid?: Money;

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ExplanationOfBenefitReviewOutcome;

  adjudication?: ExplanationOfBenefitAdjudication[];
}
