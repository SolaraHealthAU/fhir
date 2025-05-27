import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  Period,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CoverageEligibilityResponseEvent } from "../coverageeligibilityresponseevent/types";
import type { CoverageEligibilityResponseInsurance } from "../coverageeligibilityresponseinsurance/types";
import type { CoverageEligibilityResponseError } from "../coverageeligibilityresponseerror/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponse {
  resourceType: `CoverageEligibilityResponse`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  purpose?: string[];

  _purpose?: Element[];

  patient: Reference;

  event?: CoverageEligibilityResponseEvent[];

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;

  created?: string;

  _created?: Element;

  requestor?: Reference;

  request: Reference;

  outcome?: string;

  _outcome?: Element;

  disposition?: string;

  _disposition?: Element;

  insurer: Reference;

  insurance?: CoverageEligibilityResponseInsurance[];

  preAuthRef?: string;

  _preAuthRef?: Element;

  form?: CodeableConcept;

  error?: CoverageEligibilityResponseError[];
}
