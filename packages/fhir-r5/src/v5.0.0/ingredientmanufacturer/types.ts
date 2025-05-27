import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface IngredientManufacturer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: string;

  _role?: Element;

  manufacturer: Reference;
}
