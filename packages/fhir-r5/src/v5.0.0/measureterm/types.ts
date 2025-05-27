import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasureTerm {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  definition?: string;

  _definition?: Element;
}
