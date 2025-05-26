import type {
  Extension,
  Element,
  Attachment,
  Coding,
  Quantity,
  Reference,
} from "../core/types";
import type { QuestionnaireResponseItem } from "../questionnaireresponseitem/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponseAnswer {
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

  item?: QuestionnaireResponseItem[];
}
