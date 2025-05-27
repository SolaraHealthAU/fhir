import type { Extension, CodeableConcept, Reference } from "../core/types";
import type { BodyStructureBodyLandmarkOrientation } from "../bodystructurebodylandmarkorientation/types";

/** Generated from FHIR JSON Schema */

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructureIncludedStructure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  structure: CodeableConcept;

  laterality?: CodeableConcept;

  bodyLandmarkOrientation?: BodyStructureBodyLandmarkOrientation[];

  spatialReference?: Reference[];

  qualifier?: CodeableConcept[];
}
