import type { Extension } from "../core/types";
import type { ChargeItemDefinitionApplicability } from "../chargeitemdefinitionapplicability/types";
import type { MonetaryComponent } from "../monetarycomponent/types";

/** Generated from FHIR JSON Schema */

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface ChargeItemDefinitionPropertyGroup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  applicability?: ChargeItemDefinitionApplicability[];

  priceComponent?: MonetaryComponent[];
}
