import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Reference,
  ExtendedContactDetail,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { InsurancePlanCoverage } from "../insuranceplancoverage/types";
import type { InsurancePlanPlan } from "../insuranceplanplan/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlan {
  resourceType: `InsurancePlan`;

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

  type?: CodeableConcept[];

  name?: string;

  _name?: Element;

  alias?: string[];

  _alias?: Element[];

  period?: Period;

  ownedBy?: Reference;

  administeredBy?: Reference;

  coverageArea?: Reference[];

  contact?: ExtendedContactDetail[];

  endpoint?: Reference[];

  network?: Reference[];

  coverage?: InsurancePlanCoverage[];

  plan?: InsurancePlanPlan[];
}
