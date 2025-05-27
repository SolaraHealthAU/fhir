import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Range,
  Reference,
  Period,
  Duration,
} from "../core/types";
import type { MeasureReportComponent } from "../measurereportcomponent/types";
import type { MeasureReportPopulation1 } from "../measurereportpopulation1/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportStratum {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  valueCodeableConcept?: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueReference?: Reference;

  component?: MeasureReportComponent[];

  population?: MeasureReportPopulation1[];

  measureScoreQuantity?: Quantity;

  measureScoreDateTime?: string;

  _measureScoreDateTime?: Element;

  measureScoreCodeableConcept?: CodeableConcept;

  measureScorePeriod?: Period;

  measureScoreRange?: Range;

  measureScoreDuration?: Duration;
}
