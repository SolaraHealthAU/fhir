import type {
  Extension,
  CodeableConcept,
  Element,
  Expression,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasurePopulation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria: Expression;
}
