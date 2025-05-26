import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
  Range,
  Ratio,
  SampledData,
  Period,
} from "../core/types";
import type { ObservationReferenceRange } from "../observationreferencerange/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface ObservationComponent {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Describes what was observed. Sometimes this is called the observation "code". */
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
  /** Provides a reason why the expected value in the element Observation.component.value[x] is missing. */
  dataAbsentReason?: CodeableConcept;
  /** A categorical assessment of an observation value.  For example, high, low, normal. */
  interpretation?: CodeableConcept[];

  referenceRange?: ObservationReferenceRange[];
}
