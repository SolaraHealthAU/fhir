import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Raw data describing a biological sequence. */
export interface MolecularSequenceInner {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  start?: number;

  _start?: Element;

  end?: number;

  _end?: Element;
}
