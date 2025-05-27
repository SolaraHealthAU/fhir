import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReportPopulation1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  code?: CodeableConcept;

  count?: number;

  _count?: Element;

  subjectResults?: Reference;

  subjectReport?: Reference[];

  subjects?: Reference;
}
