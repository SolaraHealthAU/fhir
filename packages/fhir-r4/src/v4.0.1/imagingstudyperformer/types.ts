import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. */
export interface ImagingStudyPerformer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
