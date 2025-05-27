import type { Extension, Reference, Element, Period } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface BiologicallyDerivedProductCollection {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  collector?: Reference;

  source?: Reference;

  collectedDateTime?: string;

  _collectedDateTime?: Element;

  collectedPeriod?: Period;
}
