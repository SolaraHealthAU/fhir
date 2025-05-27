import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionMaterial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  substance: CodeableConcept;

  alternate?: boolean;

  _alternate?: Element;

  allergenicIndicator?: boolean;

  _allergenicIndicator?: Element;
}
