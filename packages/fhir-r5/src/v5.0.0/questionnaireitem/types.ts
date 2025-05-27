import type { Extension, Element, Coding } from "../core/types";
import type { QuestionnaireEnableWhen } from "../questionnaireenablewhen/types";
import type { QuestionnaireAnswerOption } from "../questionnaireansweroption/types";
import type { QuestionnaireInitial } from "../questionnaireinitial/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface QuestionnaireItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  definition?: string;

  _definition?: Element;

  code?: Coding[];

  prefix?: string;

  _prefix?: Element;

  text?: string;

  _text?: Element;

  type?: string;

  _type?: Element;

  enableWhen?: QuestionnaireEnableWhen[];

  enableBehavior?: string;

  _enableBehavior?: Element;

  disabledDisplay?: string;

  _disabledDisplay?: Element;

  required?: boolean;

  _required?: Element;

  repeats?: boolean;

  _repeats?: Element;

  readOnly?: boolean;

  _readOnly?: Element;

  maxLength?: number;

  _maxLength?: Element;

  answerConstraint?: string;

  _answerConstraint?: Element;

  answerValueSet?: string;

  answerOption?: QuestionnaireAnswerOption[];

  initial?: QuestionnaireInitial[];

  item?: QuestionnaireItem[];
}
