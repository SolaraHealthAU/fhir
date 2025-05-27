import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeDrugCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueQuantity?: Quantity;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;

  valueAttachment?: Attachment;
}
