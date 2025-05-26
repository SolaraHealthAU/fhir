import type {
  Extension,
  Element,
  Coding,
  Quantity,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface QuestionnaireEnableWhen {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  question?: string;

  _question?: Element;

  operator?: "exists" | "=" | "!=" | ">" | "<" | ">=" | "<=";

  _operator?: Element;

  answerBoolean?: boolean;

  _answerBoolean?: Element;

  answerDecimal?: number;

  _answerDecimal?: Element;

  answerInteger?: number;

  _answerInteger?: Element;

  answerDate?: string;

  _answerDate?: Element;

  answerDateTime?: string;

  _answerDateTime?: Element;

  answerTime?: string;

  _answerTime?: Element;

  answerString?: string;

  _answerString?: Element;

  answerCoding?: Coding;

  answerQuantity?: Quantity;

  answerReference?: Reference;
}
