import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Range,
  Ratio,
  SampledData,
  Period,
  Attachment,
  Reference,
} from "../core/types";
import type { ObservationReferenceRange } from "../observationreferencerange/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface ObservationComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

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

  valueSampledData?: SampledData;

  valueTime?: string;

  _valueTime?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valuePeriod?: Period;

  valueAttachment?: Attachment;

  valueReference?: Reference;

  dataAbsentReason?: CodeableConcept;

  interpretation?: CodeableConcept[];

  referenceRange?: ObservationReferenceRange[];
}
