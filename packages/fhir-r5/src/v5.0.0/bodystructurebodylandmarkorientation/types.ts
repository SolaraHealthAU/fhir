import type { Extension, CodeableConcept } from "../core/types";
import type { BodyStructureDistanceFromLandmark } from "../bodystructuredistancefromlandmark/types";

/** Generated from FHIR JSON Schema */

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructureBodyLandmarkOrientation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  landmarkDescription?: CodeableConcept[];

  clockFacePosition?: CodeableConcept[];

  distanceFromLandmark?: BodyStructureDistanceFromLandmark[];

  surfaceOrientation?: CodeableConcept[];
}
