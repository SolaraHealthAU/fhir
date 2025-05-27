import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Quantity,
  Period,
  Range,
  Duration,
} from "../core/types";
import type { MeasureReportPopulation } from "../measurereportpopulation/types";
import type { MeasureReportStratifier } from "../measurereportstratifier/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportGroup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  subject?: Reference;

  population?: MeasureReportPopulation[];

  measureScoreQuantity?: Quantity;

  measureScoreDateTime?: string;

  _measureScoreDateTime?: Element;

  measureScoreCodeableConcept?: CodeableConcept;

  measureScorePeriod?: Period;

  measureScoreRange?: Range;

  measureScoreDuration?: Duration;

  stratifier?: MeasureReportStratifier[];
}
