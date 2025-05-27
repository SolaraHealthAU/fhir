import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Timing,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SupplyDeliverySuppliedItem } from "../supplydeliverysupplieditem/types";

/** Generated from FHIR JSON Schema */

/** Record of delivery of what is supplied. */
export interface SupplyDelivery {
  resourceType: `SupplyDelivery`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  basedOn?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  patient?: Reference;

  type?: CodeableConcept;

  suppliedItem?: SupplyDeliverySuppliedItem[];

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  supplier?: Reference;

  destination?: Reference;

  receiver?: Reference[];
}
