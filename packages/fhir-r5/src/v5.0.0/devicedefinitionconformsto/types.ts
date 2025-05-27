import type {
  Extension,
  CodeableConcept,
  Element,
  RelatedArtifact,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionConformsTo {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  specification: CodeableConcept;

  version?: string[];

  _version?: Element[];

  source?: RelatedArtifact[];
}
