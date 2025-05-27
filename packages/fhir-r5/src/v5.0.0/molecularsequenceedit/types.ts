import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Representation of a molecular sequence. */
export interface MolecularSequenceEdit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  start?: number;

  _start?: Element;

  end?: number;

  _end?: Element;

  replacementSequence?: string;

  _replacementSequence?: Element;

  replacedSequence?: string;

  _replacedSequence?: Element;
}
