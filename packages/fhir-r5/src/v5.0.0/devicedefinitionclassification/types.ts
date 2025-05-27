import type {
  Extension,
  CodeableConcept,
  RelatedArtifact,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionClassification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  justification?: RelatedArtifact[];
}
