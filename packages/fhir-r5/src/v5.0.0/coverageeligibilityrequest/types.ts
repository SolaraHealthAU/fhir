import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CoverageEligibilityRequestEvent } from "../coverageeligibilityrequestevent/types";
import type { CoverageEligibilityRequestSupportingInfo } from "../coverageeligibilityrequestsupportinginfo/types";
import type { CoverageEligibilityRequestInsurance } from "../coverageeligibilityrequestinsurance/types";
import type { CoverageEligibilityRequestItem } from "../coverageeligibilityrequestitem/types";

/** Generated from FHIR JSON Schema */

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface CoverageEligibilityRequest {
  resourceType: `CoverageEligibilityRequest`;

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

  priority?: CodeableConcept;

  purpose?: string[];

  _purpose?: Element[];

  patient: Reference;

  event?: CoverageEligibilityRequestEvent[];

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;

  created?: string;

  _created?: Element;

  enterer?: Reference;

  provider?: Reference;

  insurer: Reference;

  facility?: Reference;

  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  insurance?: CoverageEligibilityRequestInsurance[];

  item?: CoverageEligibilityRequestItem[];
}
