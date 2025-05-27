import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImmunizationRecommendationRecommendation } from "../immunizationrecommendationrecommendation/types";

/** Generated from FHIR JSON Schema */

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface ImmunizationRecommendation {
  resourceType: `ImmunizationRecommendation`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  patient: Reference;

  date?: string;

  _date?: Element;

  authority?: Reference;

  recommendation: ImmunizationRecommendationRecommendation[];
}
