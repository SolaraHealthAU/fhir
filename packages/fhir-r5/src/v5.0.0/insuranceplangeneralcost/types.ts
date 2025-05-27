import type { Extension, CodeableConcept, Element, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlanGeneralCost {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  groupSize?: number;

  _groupSize?: Element;

  cost?: Money;

  comment?: string;

  _comment?: Element;
}
