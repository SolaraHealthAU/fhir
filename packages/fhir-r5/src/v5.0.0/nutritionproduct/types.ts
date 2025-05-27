import type {
  Meta,
  Element,
  Extension,
  CodeableConcept,
  Reference,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { NutritionProductNutrient } from "../nutritionproductnutrient/types";
import type { NutritionProductIngredient } from "../nutritionproductingredient/types";
import type { NutritionProductCharacteristic } from "../nutritionproductcharacteristic/types";
import type { NutritionProductInstance } from "../nutritionproductinstance/types";

/** Generated from FHIR JSON Schema */

/** A food or supplement that is consumed by patients. */
export interface NutritionProduct {
  resourceType: `NutritionProduct`;

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

  code?: CodeableConcept;

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  manufacturer?: Reference[];

  nutrient?: NutritionProductNutrient[];

  ingredient?: NutritionProductIngredient[];

  knownAllergen?: CodeableReference[];

  characteristic?: NutritionProductCharacteristic[];

  instance?: NutritionProductInstance[];

  note?: Annotation[];
}
