import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake. */
export interface NutritionIntakePerformer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
