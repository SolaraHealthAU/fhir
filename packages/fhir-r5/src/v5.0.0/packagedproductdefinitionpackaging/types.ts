import type {
  Extension,
  Identifier,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";
import type { ProductShelfLife } from "../productshelflife/types";
import type { PackagedProductDefinitionProperty } from "../packagedproductdefinitionproperty/types";
import type { PackagedProductDefinitionContainedItem } from "../packagedproductdefinitioncontaineditem/types";

/** Generated from FHIR JSON Schema */

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinitionPackaging {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  type?: CodeableConcept;

  componentPart?: boolean;

  _componentPart?: Element;

  quantity?: number;

  _quantity?: Element;

  material?: CodeableConcept[];

  alternateMaterial?: CodeableConcept[];

  shelfLifeStorage?: ProductShelfLife[];

  manufacturer?: Reference[];

  property?: PackagedProductDefinitionProperty[];

  containedItem?: PackagedProductDefinitionContainedItem[];

  packaging?: PackagedProductDefinitionPackaging[];
}
