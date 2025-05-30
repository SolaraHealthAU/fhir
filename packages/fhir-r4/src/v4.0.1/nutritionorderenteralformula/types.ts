import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
} from "../core/types";
import type { NutritionOrderAdministration } from "../nutritionorderadministration/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderEnteralFormula {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula. */
  baseFormulaType?: CodeableConcept;
  /** The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula". */
  baseFormulaProductName?: string;

  _baseFormulaProductName?: Element;
  /** Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula. */
  additiveType?: CodeableConcept;
  /** The product or brand name of the type of modular component to be added to the formula. */
  additiveProductName?: string;

  _additiveProductName?: Element;
  /** The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL. */
  caloricDensity?: Quantity;
  /** The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube. */
  routeofAdministration?: CodeableConcept;

  administration?: NutritionOrderAdministration[];
  /** The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours. */
  maxVolumeToDeliver?: Quantity;
  /** Free text formula administration, feeding instructions or additional instructions or information. */
  administrationInstruction?: string;

  _administrationInstruction?: Element;
}
