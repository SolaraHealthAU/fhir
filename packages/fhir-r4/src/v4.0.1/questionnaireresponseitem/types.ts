import type { Extension, Element } from "../core/types";
import type { QuestionnaireResponseAnswer } from "../questionnaireresponseanswer/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponseItem {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource. */
  linkId: string;

  _linkId?: Element;
  /** A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. */
  definition?: string;

  _definition?: Element;
  /** Text that is displayed above the contents of the group or as the text of the question being answered. */
  text?: string;

  _text?: Element;

  answer?: QuestionnaireResponseAnswer[];

  item?: QuestionnaireResponseItem[];
}
