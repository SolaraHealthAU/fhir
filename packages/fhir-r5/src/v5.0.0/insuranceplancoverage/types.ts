import type { Extension, CodeableConcept, Reference } from "../core/types";
import type { InsurancePlanBenefit } from "../insuranceplanbenefit/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanCoverage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  network?: Reference[];

  benefit: InsurancePlanBenefit[];
}
