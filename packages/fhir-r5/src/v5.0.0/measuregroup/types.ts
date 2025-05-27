import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { MeasurePopulation } from "../measurepopulation/types";
import type { MeasureStratifier } from "../measurestratifier/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasureGroup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  type?: CodeableConcept[];

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;

  basis?: string;

  _basis?: Element;

  scoring?: CodeableConcept;

  scoringUnit?: CodeableConcept;

  rateAggregation?: string;

  _rateAggregation?: Element;

  improvementNotation?: CodeableConcept;

  library?: string[];

  population?: MeasurePopulation[];

  stratifier?: MeasureStratifier[];
}
