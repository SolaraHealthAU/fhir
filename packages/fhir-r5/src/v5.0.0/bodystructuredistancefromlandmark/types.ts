import type { Extension, CodeableReference, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructureDistanceFromLandmark {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  device?: CodeableReference[];

  value?: Quantity[];
}
