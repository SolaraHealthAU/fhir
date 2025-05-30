import type { Extension, CodeableConcept, Quantity } from "../core/types";
import type { MeasureReportPopulation } from "../measurereportpopulation/types";
import type { MeasureReportStratifier } from "../measurereportstratifier/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportGroup {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The meaning of the population group as defined in the measure definition. */
  code?: CodeableConcept;

  population?: MeasureReportPopulation[];
  /** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
  measureScore?: Quantity;

  stratifier?: MeasureReportStratifier[];
}
