import type { Extension, Element, CodeableConcept } from "../core/types";
import type { MeasureReportStratum } from "../measurereportstratum/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportStratifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  stratum?: MeasureReportStratum[];
}
