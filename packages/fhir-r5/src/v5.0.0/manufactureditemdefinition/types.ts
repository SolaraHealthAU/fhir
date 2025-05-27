import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MarketingStatus } from "../marketingstatus/types";
import type { ManufacturedItemDefinitionProperty } from "../manufactureditemdefinitionproperty/types";
import type { ManufacturedItemDefinitionComponent } from "../manufactureditemdefinitioncomponent/types";

/** Generated from FHIR JSON Schema */

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinition {
  resourceType: `ManufacturedItemDefinition`;

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

  status?: string;

  _status?: Element;

  name?: string;

  _name?: Element;

  manufacturedDoseForm: CodeableConcept;

  unitOfPresentation?: CodeableConcept;

  manufacturer?: Reference[];

  marketingStatus?: MarketingStatus[];

  ingredient?: CodeableConcept[];

  property?: ManufacturedItemDefinitionProperty[];

  component?: ManufacturedItemDefinitionComponent[];
}
