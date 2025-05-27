import type {
  Extension,
  Element,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Address,
  Money,
  Quantity,
} from "../core/types";
import type { ExplanationOfBenefitBodySite1 } from "../explanationofbenefitbodysite1/types";
import type { ExplanationOfBenefitReviewOutcome } from "../explanationofbenefitreviewoutcome/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";
import type { ExplanationOfBenefitDetail1 } from "../explanationofbenefitdetail1/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitAddItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemSequence?: number[];

  _itemSequence?: Element[];

  detailSequence?: number[];

  _detailSequence?: Element[];

  subDetailSequence?: number[];

  _subDetailSequence?: Element[];

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

  patientPaid?: Money;

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  tax?: Money;

  net?: Money;

  bodySite?: ExplanationOfBenefitBodySite1[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  reviewOutcome?: ExplanationOfBenefitReviewOutcome;

  adjudication?: ExplanationOfBenefitAdjudication[];

  detail?: ExplanationOfBenefitDetail1[];
}
