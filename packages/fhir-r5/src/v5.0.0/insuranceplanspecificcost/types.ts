import type { Extension, CodeableConcept } from "../core/types";
import type { InsurancePlanBenefit1 } from "../insuranceplanbenefit1/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanSpecificCost {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category: CodeableConcept;

  benefit?: InsurancePlanBenefit1[];
}
