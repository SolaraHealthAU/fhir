import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
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
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Identifiers assigned to this order by the order sender or by the order receiver. */
  identifier?: Identifier[];
  /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiatesCanonical?: string[];
  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiatesUri?: string[];

  _instantiatesUri?: Element[];
  /** The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
  instantiates?: string[];

  _instantiates?: Element[];
  /** The workflow status of the nutrition order/request. */
  status: string;

  _status?: Element;
  /** Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain. */
  intent: string;

  _intent?: Element;
  /** The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. */
  patient: Reference;
  /** An encounter that provides additional information about the healthcare context in which this request is made. */
  encounter?: Reference;
  /** The date and time that this nutrition order was requested. */
  dateTime: string;

  _dateTime?: Element;
  /** The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings. */
  orderer?: Reference;
  /** A link to a record of allergies or intolerances  which should be included in the nutrition order. */
  allergyIntolerance?: Reference[];
  /** This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  foodPreferenceModifier?: CodeableConcept[];
  /** This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  excludeFoodModifier?: CodeableConcept[];

  oralDiet?: NutritionOrderOralDiet;

  supplement?: NutritionOrderSupplement[];

  enteralFormula?: NutritionOrderEnteralFormula;
  /** Comments made about the {{title}} by the requester, performer, subject or other participants. */
  note?: Annotation[];
}
