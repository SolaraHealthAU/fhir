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
import type { IngredientManufacturer } from "../ingredientmanufacturer/types";
import type { IngredientSubstance } from "../ingredientsubstance/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface Ingredient {
  resourceType: `Ingredient`;

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

  identifier?: Identifier;

  status?: string;

  _status?: Element;

  for?: Reference[];

  role: CodeableConcept;

  function?: CodeableConcept[];

  group?: CodeableConcept;

  allergenicIndicator?: boolean;

  _allergenicIndicator?: Element;

  comment?: string;

  _comment?: Element;

  manufacturer?: IngredientManufacturer[];

  substance: IngredientSubstance;
}
