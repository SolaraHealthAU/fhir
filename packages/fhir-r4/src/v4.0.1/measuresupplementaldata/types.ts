import type {
  Extension,
  CodeableConcept,
  Element,
  Expression,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasureSupplementalData {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates a meaning for the supplemental data. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing supplemental data to be correlated across measures. */
  code?: CodeableConcept;
  /** An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation. */
  usage?: CodeableConcept[];
  /** The human readable description of this supplemental data. */
  description?: string;

  _description?: Element;
  /** The criteria for the supplemental data. This is typically the name of a valid expression defined within a referenced library, but it may also be a path to a specific data element. The criteria defines the data to be returned for this element. */
  criteria: Expression;
}
