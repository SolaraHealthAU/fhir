import type { Extension, Element, Annotation, Duration } from "../core/types";
import type { MedicationKnowledgeEnvironmentalSetting } from "../medicationknowledgeenvironmentalsetting/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeStorageGuideline {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference?: string;

  _reference?: Element;

  note?: Annotation[];

  stabilityDuration?: Duration;

  environmentalSetting?: MedicationKnowledgeEnvironmentalSetting[];
}
