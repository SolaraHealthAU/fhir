import type {
  Extension,
  CodeableConcept,
  Quantity,
  Ratio,
  Range,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface ServiceRequestParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  valueQuantity?: Quantity;

  valueRatio?: Ratio;

  valueRange?: Range;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valuePeriod?: Period;
}
