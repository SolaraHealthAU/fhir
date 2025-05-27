import type {
  Extension,
  Element,
  Identifier,
  CodeableConcept,
  Money,
  Quantity,
  Reference,
} from "../core/types";
import type { ExplanationOfBenefitReviewOutcome } from "../explanationofbenefitreviewoutcome/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";
import type { ExplanationOfBenefitSubDetail } from "../explanationofbenefitsubdetail/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitDetail {
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

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ExplanationOfBenefitReviewOutcome;

  adjudication?: ExplanationOfBenefitAdjudication[];

  subDetail?: ExplanationOfBenefitSubDetail[];
}
