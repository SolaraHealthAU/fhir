import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Reference,
  RelatedArtifact,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content. */
export interface ArtifactAssessmentContent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  informationType?: string;

  _informationType?: Element;

  summary?: string;

  _summary?: Element;

  type?: CodeableConcept;

  classifier?: CodeableConcept[];

  quantity?: Quantity;

  author?: Reference;

  path?: string[];

  _path?: Element[];

  relatedArtifact?: RelatedArtifact[];

  freeToShare?: boolean;

  _freeToShare?: Element;

  component?: ArtifactAssessmentContent[];
}
