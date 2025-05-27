import type {
  Extension,
  Ratio,
  RatioRange,
  CodeableConcept,
  Quantity,
  Element,
} from "../core/types";
import type { IngredientReferenceStrength } from "../ingredientreferencestrength/types";

/** Generated from FHIR JSON Schema */

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface IngredientStrength {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  presentationRatio?: Ratio;

  presentationRatioRange?: RatioRange;

  presentationCodeableConcept?: CodeableConcept;

  presentationQuantity?: Quantity;

  textPresentation?: string;

  _textPresentation?: Element;

  concentrationRatio?: Ratio;

  concentrationRatioRange?: RatioRange;

  concentrationCodeableConcept?: CodeableConcept;

  concentrationQuantity?: Quantity;

  textConcentration?: string;

  _textConcentration?: Element;

  basis?: CodeableConcept;

  measurementPoint?: string;

  _measurementPoint?: Element;

  country?: CodeableConcept[];

  referenceStrength?: IngredientReferenceStrength[];
}
