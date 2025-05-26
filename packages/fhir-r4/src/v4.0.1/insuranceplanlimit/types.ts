import type { Extension, Quantity, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanLimit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  value?: Quantity;

  code?: CodeableConcept;
}
