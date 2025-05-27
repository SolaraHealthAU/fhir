import type { Extension, Reference, Element, Period } from "../core/types";
import type { CoverageEligibilityResponseItem } from "../coverageeligibilityresponseitem/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponseInsurance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  coverage: Reference;

  inforce?: boolean;

  _inforce?: Element;

  benefitPeriod?: Period;

  item?: CoverageEligibilityResponseItem[];
}
