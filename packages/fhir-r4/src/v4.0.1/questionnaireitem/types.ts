import type { Extension, Element, Coding } from "../core/types";
import type { QuestionnaireEnableWhen } from "../questionnaireenablewhen/types";
import type { QuestionnaireAnswerOption } from "../questionnaireansweroption/types";
import type { QuestionnaireInitial } from "../questionnaireinitial/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface QuestionnaireItem {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource. */
  linkId: string;

  _linkId?: Element;
  /** This element is a URI that refers to an [ElementDefinition](elementdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:

* code (ElementDefinition.code) 
* type (ElementDefinition.type) 
* required (ElementDefinition.min) 
* repeats (ElementDefinition.max) 
* maxLength (ElementDefinition.maxLength) 
* answerValueSet (ElementDefinition.binding)
* options (ElementDefinition.binding). */
  definition?: string;

  _definition?: Element;
  /** A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers). */
  code?: Coding[];
  /** A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire. */
  prefix?: string;

  _prefix?: Element;
  /** The name of a section, the text of a question or text content for a display item. */
  text?: string;

  _text?: Element;
  /** The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.). */
  type:
    | "group"
    | "display"
    | "boolean"
    | "decimal"
    | "integer"
    | "date"
    | "dateTime"
    | "time"
    | "string"
    | "text"
    | "url"
    | "choice"
    | "open-choice"
    | "attachment"
    | "reference"
    | "quantity";

  _type?: Element;

  enableWhen?: QuestionnaireEnableWhen[];
  /** Controls how multiple enableWhen values are interpreted -  whether all or any must be true. */
  enableBehavior?: "all" | "any";

  _enableBehavior?: Element;
  /** An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire. */
  required?: boolean;

  _required?: Element;
  /** An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups. */
  repeats?: boolean;

  _repeats?: Element;
  /** An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire. */
  readOnly?: boolean;

  _readOnly?: Element;
  /** The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse. */
  maxLength?: number;

  _maxLength?: Element;
  /** A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question. */
  answerValueSet?: string;

  answerOption?: QuestionnaireAnswerOption[];

  initial?: QuestionnaireInitial[];

  item?: QuestionnaireItem[];
}
