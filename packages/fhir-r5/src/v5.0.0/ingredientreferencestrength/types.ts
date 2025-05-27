import type {
  Extension,
  CodeableReference,
  Ratio,
  RatioRange,
  Quantity,
  Element,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface IngredientReferenceStrength {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  substance: CodeableReference;

  strengthRatio?: Ratio;

  strengthRatioRange?: RatioRange;

  strengthQuantity?: Quantity;

  measurementPoint?: string;

  _measurementPoint?: Element;

  country?: CodeableConcept[];
}
