import type {
  Extension,
  CodeableConcept,
  Reference,
  Element,
} from "../core/types";
import type { CoverageEligibilityResponseBenefit } from "../coverageeligibilityresponsebenefit/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponseItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  productOrService?: CodeableConcept;

  modifier?: CodeableConcept[];

  provider?: Reference;

  excluded?: boolean;

  _excluded?: Element;

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  network?: CodeableConcept;

  unit?: CodeableConcept;

  term?: CodeableConcept;

  benefit?: CoverageEligibilityResponseBenefit[];

  authorizationRequired?: boolean;

  _authorizationRequired?: Element;

  authorizationSupporting?: CodeableConcept[];

  authorizationUrl?: string;

  _authorizationUrl?: Element;
}
