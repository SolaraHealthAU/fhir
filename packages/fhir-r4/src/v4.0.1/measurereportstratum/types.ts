import type { Extension, CodeableConcept, Quantity } from "../core/types";
import type { MeasureReportComponent } from "../measurereportcomponent/types";
import type { MeasureReportPopulation1 } from "../measurereportpopulation1/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportStratum {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  value?: CodeableConcept;

  component?: MeasureReportComponent[];

  population?: MeasureReportPopulation1[];

  measureScore?: Quantity;
}
