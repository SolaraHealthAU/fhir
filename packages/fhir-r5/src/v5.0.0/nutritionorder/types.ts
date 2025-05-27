import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableReference,
  CodeableConcept,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { NutritionOrderOralDiet } from "../nutritionorderoraldiet/types";
import type { NutritionOrderSupplement } from "../nutritionordersupplement/types";
import type { NutritionOrderEnteralFormula } from "../nutritionorderenteralformula/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrder {
  resourceType: `NutritionOrder`;

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

  identifier?: Identifier[];

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  instantiates?: string[];

  _instantiates?: Element[];

  basedOn?: Reference[];

  groupIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  subject: Reference;

  encounter?: Reference;

  supportingInformation?: Reference[];

  dateTime?: string;

  _dateTime?: Element;

  orderer?: Reference;

  performer?: CodeableReference[];

  allergyIntolerance?: Reference[];

  foodPreferenceModifier?: CodeableConcept[];

  excludeFoodModifier?: CodeableConcept[];

  outsideFoodAllowed?: boolean;

  _outsideFoodAllowed?: Element;

  oralDiet?: NutritionOrderOralDiet;

  supplement?: NutritionOrderSupplement[];

  enteralFormula?: NutritionOrderEnteralFormula;

  note?: Annotation[];
}
