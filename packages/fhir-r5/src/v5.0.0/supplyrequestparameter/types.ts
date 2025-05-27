import type {
  Extension,
  CodeableConcept,
  Quantity,
  Range,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a request to deliver a medication, substance or device used in the healthcare setting to a particular destination for a particular person or organization. */
export interface SupplyRequestParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueBoolean?: boolean;

  _valueBoolean?: Element;
}
