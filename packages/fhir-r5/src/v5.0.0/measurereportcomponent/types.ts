import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Range,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code: CodeableConcept;

  valueCodeableConcept?: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueReference?: Reference;
}
