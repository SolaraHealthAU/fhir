import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Range,
  Ratio,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEventDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueQuantity?: Quantity;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueTime?: string;

  _valueTime?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valuePeriod?: Period;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;
}
