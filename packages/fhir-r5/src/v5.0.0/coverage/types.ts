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
import type { CoveragePaymentBy } from "../coveragepaymentby/types";
import type { CoverageClass } from "../coverageclass/types";
import type { CoverageCostToBeneficiary } from "../coveragecosttobeneficiary/types";

/** Generated from FHIR JSON Schema */

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface Coverage {
  resourceType: `Coverage`;

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

  kind?: string;

  _kind?: Element;

  paymentBy?: CoveragePaymentBy[];

  type?: CodeableConcept;

  policyHolder?: Reference;

  subscriber?: Reference;

  subscriberId?: Identifier[];

  beneficiary: Reference;

  dependent?: string;

  _dependent?: Element;

  relationship?: CodeableConcept;

  period?: Period;

  insurer?: Reference;

  class?: CoverageClass[];

  order?: number;

  _order?: Element;

  network?: string;

  _network?: Element;

  costToBeneficiary?: CoverageCostToBeneficiary[];

  subrogation?: boolean;

  _subrogation?: Element;

  contract?: Reference[];

  insurancePlan?: Reference;
}
