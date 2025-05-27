import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Quantity,
  Money,
} from "../core/types";
import type { CoverageEligibilityRequestDiagnosis } from "../coverageeligibilityrequestdiagnosis/types";

/** Generated from FHIR JSON Schema */

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface CoverageEligibilityRequestItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  supportingInfoSequence?: number[];

  _supportingInfoSequence?: Element[];

  category?: CodeableConcept;

  productOrService?: CodeableConcept;

  modifier?: CodeableConcept[];

  provider?: Reference;

  quantity?: Quantity;

  unitPrice?: Money;

  facility?: Reference;

  diagnosis?: CoverageEligibilityRequestDiagnosis[];

  detail?: Reference[];
}
