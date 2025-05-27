import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A GenomicStudy is a set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudyDevice {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  device?: Reference;

  function?: CodeableConcept;
}
