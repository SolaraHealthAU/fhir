import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Representation of a molecular sequence. */
export interface MolecularSequenceStartingSequence {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  genomeAssembly?: CodeableConcept;

  chromosome?: CodeableConcept;

  sequenceCodeableConcept?: CodeableConcept;

  sequenceString?: string;

  _sequenceString?: Element;

  sequenceReference?: Reference;

  windowStart?: number;

  _windowStart?: Element;

  windowEnd?: number;

  _windowEnd?: Element;

  orientation?: string;

  _orientation?: Element;

  strand?: string;

  _strand?: Element;
}
