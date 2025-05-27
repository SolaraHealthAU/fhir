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
import type { ExplanationOfBenefitBodySite } from "../explanationofbenefitbodysite/types";
import type { ExplanationOfBenefitReviewOutcome } from "../explanationofbenefitreviewoutcome/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";
import type { ExplanationOfBenefitDetail } from "../explanationofbenefitdetail/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  careTeamSequence?: number[];

  _careTeamSequence?: Element[];

  diagnosisSequence?: number[];

  _diagnosisSequence?: Element[];

  procedureSequence?: number[];

  _procedureSequence?: Element[];

  informationSequence?: number[];

  _informationSequence?: Element[];

  traceNumber?: Identifier[];

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

  bodySite?: ExplanationOfBenefitBodySite[];

  encounter?: Reference[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ExplanationOfBenefitReviewOutcome;

  adjudication?: ExplanationOfBenefitAdjudication[];

  detail?: ExplanationOfBenefitDetail[];
}
