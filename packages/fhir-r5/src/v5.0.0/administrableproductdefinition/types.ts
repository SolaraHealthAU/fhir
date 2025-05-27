import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { AdministrableProductDefinitionProperty } from "../administrableproductdefinitionproperty/types";
import type { AdministrableProductDefinitionRouteOfAdministration } from "../administrableproductdefinitionrouteofadministration/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinition {
  resourceType: `AdministrableProductDefinition`;

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

  formOf?: Reference[];

  administrableDoseForm?: CodeableConcept;

  unitOfPresentation?: CodeableConcept;

  producedFrom?: Reference[];

  ingredient?: CodeableConcept[];

  device?: Reference;

  description?: string;

  _description?: Element;

  property?: AdministrableProductDefinitionProperty[];

  routeOfAdministration: AdministrableProductDefinitionRouteOfAdministration[];
}
