import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface ImmunizationEvaluation {
  resourceType: `ImmunizationEvaluation`;

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

  status?: string;

  _status?: Element;

  patient: Reference;

  date?: string;

  _date?: Element;

  authority?: Reference;

  targetDisease: CodeableConcept;

  immunizationEvent: Reference;

  doseStatus: CodeableConcept;

  doseStatusReason?: CodeableConcept[];

  description?: string;

  _description?: Element;

  series?: string;

  _series?: Element;

  doseNumber?: string;

  _doseNumber?: Element;

  seriesDoses?: string;

  _seriesDoses?: Element;
}
