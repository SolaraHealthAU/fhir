import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances. */
export interface DiagnosticReportMedia {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  comment?: string;

  _comment?: Element;

  link: Reference;
}
