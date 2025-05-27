import type {
  Extension,
  Element,
  Attachment,
  Coding,
  Quantity,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface QuestionnaireInitial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueString?: string;

  _valueString?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueAttachment?: Attachment;

  valueCoding?: Coding;

  valueQuantity?: Quantity;

  valueReference?: Reference;
}
