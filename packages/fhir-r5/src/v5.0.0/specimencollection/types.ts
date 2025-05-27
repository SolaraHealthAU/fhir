import type {
  Extension,
  Reference,
  Element,
  Period,
  Duration,
  Quantity,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A sample to be used for analysis. */
export interface SpecimenCollection {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  collector?: Reference;

  collectedDateTime?: string;

  _collectedDateTime?: Element;

  collectedPeriod?: Period;

  duration?: Duration;

  quantity?: Quantity;

  method?: CodeableConcept;

  device?: CodeableReference;

  procedure?: Reference;

  bodySite?: CodeableReference;

  fastingStatusCodeableConcept?: CodeableConcept;

  fastingStatusDuration?: Duration;
}
