import type { Extension, Ratio, Element, CodeableConcept } from "../core/types";
import type { MedicinalProductIngredientReferenceStrength } from "../medicinalproductingredientreferencestrength/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredientStrength {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  presentation: Ratio;

  presentationLowLimit?: Ratio;

  concentration?: Ratio;

  concentrationLowLimit?: Ratio;

  measurementPoint?: string;

  _measurementPoint?: Element;

  country?: CodeableConcept[];

  referenceStrength?: MedicinalProductIngredientReferenceStrength[];
}
