import type { Extension, CodeableConcept } from "../core/types";
import type { InsurancePlanCost } from "../insuranceplancost/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanBenefit1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  cost?: InsurancePlanCost[];
}
