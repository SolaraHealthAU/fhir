import type {
  Extension,
  Element,
  CodeableConcept,
  Expression,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasureSupplementalData {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  usage?: CodeableConcept[];

  description?: string;

  _description?: Element;

  criteria: Expression;
}
