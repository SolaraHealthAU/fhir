import type {
  Extension,
  Reference,
  CodeableConcept,
  Identifier,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A GenomicStudy is a set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudyInput {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  file?: Reference;

  type?: CodeableConcept;

  generatedByIdentifier?: Identifier;

  generatedByReference?: Reference;
}
