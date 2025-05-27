import type {
  Extension,
  UsageContext,
  Element,
  RelatedArtifact,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionGuideline {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  useContext?: UsageContext[];

  usageInstruction?: string;

  _usageInstruction?: Element;

  relatedArtifact?: RelatedArtifact[];

  indication?: CodeableConcept[];

  contraindication?: CodeableConcept[];

  warning?: CodeableConcept[];

  intendedUse?: string;

  _intendedUse?: Element;
}
