import type { Extension, CodeableConcept, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanCost {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  applicability?: CodeableConcept;

  qualifiers?: CodeableConcept[];

  value?: Quantity;
}
