import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinitionProperty {
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

  valueAttachment?: Attachment;
}
