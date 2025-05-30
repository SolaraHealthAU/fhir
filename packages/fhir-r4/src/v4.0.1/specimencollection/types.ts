import type {
  Extension,
  Reference,
  Element,
  Period,
  Duration,
  Quantity,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A sample to be used for analysis. */
export interface SpecimenCollection {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Person who collected the specimen. */
  collector?: Reference;

  collectedDateTime?: string;

  _collectedDateTime?: Element;

  collectedPeriod?: Period;
  /** The span of time over which the collection of a specimen occurred. */
  duration?: Duration;
  /** The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample. */
  quantity?: Quantity;
  /** A coded value specifying the technique that is used to perform the procedure. */
  method?: CodeableConcept;
  /** Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens. */
  bodySite?: CodeableConcept;

  fastingStatusCodeableConcept?: CodeableConcept;

  fastingStatusDuration?: Duration;
}
