import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionHasPart {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference: Reference;

  count?: number;

  _count?: Element;
}
