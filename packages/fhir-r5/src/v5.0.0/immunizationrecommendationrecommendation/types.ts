import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";
import type { ImmunizationRecommendationDateCriterion } from "../immunizationrecommendationdatecriterion/types";

/** Generated from FHIR JSON Schema */

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface ImmunizationRecommendationRecommendation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  vaccineCode?: CodeableConcept[];

  targetDisease?: CodeableConcept[];

  contraindicatedVaccineCode?: CodeableConcept[];

  forecastStatus: CodeableConcept;

  forecastReason?: CodeableConcept[];

  dateCriterion?: ImmunizationRecommendationDateCriterion[];

  description?: string;

  _description?: Element;

  series?: string;

  _series?: Element;

  doseNumber?: string;

  _doseNumber?: Element;

  seriesDoses?: string;

  _seriesDoses?: Element;

  supportingImmunization?: Reference[];

  supportingPatientInformation?: Reference[];
}
