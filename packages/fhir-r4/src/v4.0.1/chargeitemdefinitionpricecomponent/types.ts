import type { Extension, Element, CodeableConcept, Money } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface ChargeItemDefinitionPriceComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  code?: CodeableConcept;

  factor?: number;

  _factor?: Element;

  amount?: Money;
}
