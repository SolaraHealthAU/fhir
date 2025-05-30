import type {
  Extension,
  Expression,
  Period,
  RelatedArtifact,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface ChargeItemDefinitionApplicability {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  condition?: Expression;

  effectivePeriod?: Period;

  relatedArtifact?: RelatedArtifact;
}
