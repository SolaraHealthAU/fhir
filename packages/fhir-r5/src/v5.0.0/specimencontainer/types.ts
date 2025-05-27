import type { Extension, Reference, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A sample to be used for analysis. */
export interface SpecimenContainer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  device: Reference;

  location?: Reference;

  specimenQuantity?: Quantity;
}
