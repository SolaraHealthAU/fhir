import type { Extension, CodeableConcept, Ratio, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredientReferenceStrength {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  substance?: CodeableConcept;

  strength: Ratio;

  strengthLowLimit?: Ratio;

  measurementPoint?: string;

  _measurementPoint?: Element;

  country?: CodeableConcept[];
}
