import type { Extension, CodeableConcept, Element } from "../core/types";
import type { InsurancePlanLimit } from "../insuranceplanlimit/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanBenefit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  requirement?: string;

  _requirement?: Element;

  limit?: InsurancePlanLimit[];
}
