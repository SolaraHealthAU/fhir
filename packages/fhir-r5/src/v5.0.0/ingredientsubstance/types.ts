import type { Extension, CodeableReference } from "../core/types";
import type { IngredientStrength } from "../ingredientstrength/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface IngredientSubstance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableReference;

  strength?: IngredientStrength[];
}
