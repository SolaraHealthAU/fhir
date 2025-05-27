import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs). */
export interface MedicinalProductDefinitionCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueMarkdown?: string;

  _valueMarkdown?: Element;

  valueQuantity?: Quantity;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueAttachment?: Attachment;
}
