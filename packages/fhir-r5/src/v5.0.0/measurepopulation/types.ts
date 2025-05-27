import type {
  Extension,
  Element,
  CodeableConcept,
  Expression,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasurePopulation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria?: Expression;

  groupDefinition?: Reference;

  inputPopulationId?: string;

  _inputPopulationId?: Element;

  aggregateMethod?: CodeableConcept;
}
