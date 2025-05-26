import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Raw data describing a biological sequence. */
export interface MolecularSequenceRoc {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  score?: number[];

  _score?: Element[];

  numTP?: number[];

  _numTP?: Element[];

  numFP?: number[];

  _numFP?: Element[];

  numFN?: number[];

  _numFN?: Element[];

  precision?: number[];

  _precision?: Element[];

  sensitivity?: number[];

  _sensitivity?: Element[];

  fMeasure?: number[];

  _fMeasure?: Element[];
}
