import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { NutritionIntakeConsumedItem } from "../nutritionintakeconsumeditem/types";
import type { NutritionIntakeIngredientLabel } from "../nutritionintakeingredientlabel/types";
import type { NutritionIntakePerformer } from "../nutritionintakeperformer/types";

/** Generated from FHIR JSON Schema */

/** A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake. */
export interface NutritionIntake {
  resourceType: `NutritionIntake`;

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

  basedOn?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept[];

  code?: CodeableConcept;

  subject: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  recorded?: string;

  _recorded?: Element;

  reportedBoolean?: boolean;

  _reportedBoolean?: Element;

  reportedReference?: Reference;

  consumedItem: NutritionIntakeConsumedItem[];

  ingredientLabel?: NutritionIntakeIngredientLabel[];

  performer?: NutritionIntakePerformer[];

  location?: Reference;

  derivedFrom?: Reference[];

  reason?: CodeableReference[];

  note?: Annotation[];
}
