import type { Extension, Coding, CodeableReference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionLink {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  relation: Coding;

  relatedDevice: CodeableReference;
}
