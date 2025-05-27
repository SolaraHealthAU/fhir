import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Attachment,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinitionProperty {
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

  status?: CodeableConcept;
}
