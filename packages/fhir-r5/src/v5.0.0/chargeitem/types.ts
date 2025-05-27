import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Timing,
  Quantity,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ChargeItemPerformer } from "../chargeitemperformer/types";
import type { MonetaryComponent } from "../monetarycomponent/types";

/** Generated from FHIR JSON Schema */

/** The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation. */
export interface ChargeItem {
  resourceType: `ChargeItem`;

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

  definitionUri?: string[];

  _definitionUri?: Element[];

  definitionCanonical?: string[];

  status?: string;

  _status?: Element;

  partOf?: Reference[];

  code: CodeableConcept;

  subject: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  performer?: ChargeItemPerformer[];

  performingOrganization?: Reference;

  requestingOrganization?: Reference;

  costCenter?: Reference;

  quantity?: Quantity;

  bodysite?: CodeableConcept[];

  unitPriceComponent?: MonetaryComponent;

  totalPriceComponent?: MonetaryComponent;

  overrideReason?: CodeableConcept;

  enterer?: Reference;

  enteredDate?: string;

  _enteredDate?: Element;

  reason?: CodeableConcept[];

  service?: CodeableReference[];

  product?: CodeableReference[];

  account?: Reference[];

  note?: Annotation[];

  supportingInformation?: Reference[];
}
