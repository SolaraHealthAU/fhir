import type { Extension, CodeableReference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score. */
export interface ClinicalImpressionFinding {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item?: CodeableReference;

  basis?: string;

  _basis?: Element;
}
