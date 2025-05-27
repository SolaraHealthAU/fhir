import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  Period,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MeasureReportGroup } from "../measurereportgroup/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReport {
  resourceType: `MeasureReport`;

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

  type?: string;

  _type?: Element;

  dataUpdateType?: string;

  _dataUpdateType?: Element;

  measure?: string;

  subject?: Reference;

  date?: string;

  _date?: Element;

  reporter?: Reference;

  reportingVendor?: Reference;

  location?: Reference;

  period: Period;

  inputParameters?: Reference;

  scoring?: CodeableConcept;

  improvementNotation?: CodeableConcept;

  group?: MeasureReportGroup[];

  supplementalData?: Reference[];

  evaluatedResource?: Reference[];
}
