import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { PackagedProductDefinitionLegalStatusOfSupply } from "../packagedproductdefinitionlegalstatusofsupply/types";
import type { MarketingStatus } from "../marketingstatus/types";
import type { PackagedProductDefinitionPackaging } from "../packagedproductdefinitionpackaging/types";
import type { PackagedProductDefinitionProperty } from "../packagedproductdefinitionproperty/types";

/** Generated from FHIR JSON Schema */

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinition {
  resourceType: `PackagedProductDefinition`;

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

  name?: string;

  _name?: Element;

  type?: CodeableConcept;

  packageFor?: Reference[];

  status?: CodeableConcept;

  statusDate?: string;

  _statusDate?: Element;

  containedItemQuantity?: Quantity[];

  description?: string;

  _description?: Element;

  legalStatusOfSupply?: PackagedProductDefinitionLegalStatusOfSupply[];

  marketingStatus?: MarketingStatus[];

  copackagedIndicator?: boolean;

  _copackagedIndicator?: Element;

  manufacturer?: Reference[];

  attachedDocument?: Reference[];

  packaging?: PackagedProductDefinitionPackaging;

  characteristic?: PackagedProductDefinitionProperty[];
}
