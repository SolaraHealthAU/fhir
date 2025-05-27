import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future. */
export interface ResearchStudyLabel {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  value?: string;

  _value?: Element;
}
