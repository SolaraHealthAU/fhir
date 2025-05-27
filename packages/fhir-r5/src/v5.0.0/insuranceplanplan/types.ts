import type {
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { InsurancePlanGeneralCost } from "../insuranceplangeneralcost/types";
import type { InsurancePlanSpecificCost } from "../insuranceplanspecificcost/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanPlan {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  type?: CodeableConcept;

  coverageArea?: Reference[];

  network?: Reference[];

  generalCost?: InsurancePlanGeneralCost[];

  specificCost?: InsurancePlanSpecificCost[];
}
