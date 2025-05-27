import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A sample to be used for analysis. */
export interface SpecimenProcessing {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  method?: CodeableConcept;

  additive?: Reference[];

  timeDateTime?: string;

  _timeDateTime?: Element;

  timePeriod?: Period;
}
