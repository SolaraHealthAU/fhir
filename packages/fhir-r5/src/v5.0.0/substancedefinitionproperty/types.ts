import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionProperty {
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
