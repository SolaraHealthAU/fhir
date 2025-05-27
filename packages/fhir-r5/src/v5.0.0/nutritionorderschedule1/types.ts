import type {
  Extension,
  Timing,
  Element,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderSchedule1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  timing?: Timing[];

  asNeeded?: boolean;

  _asNeeded?: Element;

  asNeededFor?: CodeableConcept;
}
