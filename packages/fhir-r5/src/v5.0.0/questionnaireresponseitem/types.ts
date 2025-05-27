import type { Extension, Element } from "../core/types";
import type { QuestionnaireResponseAnswer } from "../questionnaireresponseanswer/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponseItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  definition?: string;

  _definition?: Element;

  text?: string;

  _text?: Element;

  answer?: QuestionnaireResponseAnswer[];

  item?: QuestionnaireResponseItem[];
}
