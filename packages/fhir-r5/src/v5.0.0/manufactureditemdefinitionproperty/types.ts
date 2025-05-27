import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Attachment,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinitionProperty {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueQuantity?: Quantity;

  valueDate?: string;

  _valueDate?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueMarkdown?: string;

  _valueMarkdown?: Element;

  valueAttachment?: Attachment;

  valueReference?: Reference;
}
