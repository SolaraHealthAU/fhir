import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Annotation,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DiagnosticReportSupportingInfo } from "../diagnosticreportsupportinginfo/types";
import type { DiagnosticReportMedia } from "../diagnosticreportmedia/types";

/** Generated from FHIR JSON Schema */

/** The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances. */
export interface DiagnosticReport {
  resourceType: `DiagnosticReport`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  basedOn?: Reference[];

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  code: CodeableConcept;

  subject?: Reference;

  encounter?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;

  issued?: string;

  _issued?: Element;

  performer?: Reference[];

  resultsInterpreter?: Reference[];

  specimen?: Reference[];

  result?: Reference[];

  note?: Annotation[];

  study?: Reference[];

  supportingInfo?: DiagnosticReportSupportingInfo[];

  media?: DiagnosticReportMedia[];

  composition?: Reference;

  conclusion?: string;

  _conclusion?: Element;

  conclusionCode?: CodeableConcept[];

  presentedForm?: Attachment[];
}
