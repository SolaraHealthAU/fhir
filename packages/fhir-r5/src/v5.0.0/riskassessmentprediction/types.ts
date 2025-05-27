import type {
  Extension,
  CodeableConcept,
  Element,
  Range,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface RiskAssessmentPrediction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  outcome?: CodeableConcept;

  probabilityDecimal?: number;

  _probabilityDecimal?: Element;

  probabilityRange?: Range;

  qualitativeRisk?: CodeableConcept;

  relativeRisk?: number;

  _relativeRisk?: Element;

  whenPeriod?: Period;

  whenRange?: Range;

  rationale?: string;

  _rationale?: Element;
}
