import type { Extension, Element, Coding, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface QuestionnaireAnswerOption {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  valueInteger?: number;

  _valueInteger?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueString?: string;

  _valueString?: Element;

  valueCoding?: Coding;

  valueReference?: Reference;

  initialSelected?: boolean;

  _initialSelected?: Element;
}
