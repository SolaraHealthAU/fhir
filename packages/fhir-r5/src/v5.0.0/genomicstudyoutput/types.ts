import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A GenomicStudy is a set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudyOutput {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  file?: Reference;

  type?: CodeableConcept;
}
