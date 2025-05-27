import type { Extension, CodeableConcept, Element, Range } from "../core/types";
import type { MolecularSequenceStartingSequence } from "../molecularsequencestartingsequence/types";
import type { MolecularSequenceEdit } from "../molecularsequenceedit/types";

/** Generated from FHIR JSON Schema */

/** Representation of a molecular sequence. */
export interface MolecularSequenceRelative {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  coordinateSystem: CodeableConcept;

  ordinalPosition?: number;

  _ordinalPosition?: Element;

  sequenceRange?: Range;

  startingSequence?: MolecularSequenceStartingSequence;

  edit?: MolecularSequenceEdit[];
}
