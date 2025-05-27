import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImagingStudySeries } from "../imagingstudyseries/types";

/** Generated from FHIR JSON Schema */

/** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. */
export interface ImagingStudy {
  resourceType: `ImagingStudy`;

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

  status?: string;

  _status?: Element;

  modality?: CodeableConcept[];

  subject: Reference;

  encounter?: Reference;

  started?: string;

  _started?: Element;

  basedOn?: Reference[];

  partOf?: Reference[];

  referrer?: Reference;

  endpoint?: Reference[];

  numberOfSeries?: number;

  _numberOfSeries?: Element;

  numberOfInstances?: number;

  _numberOfInstances?: Element;

  procedure?: CodeableReference[];

  location?: Reference;

  reason?: CodeableReference[];

  note?: Annotation[];

  description?: string;

  _description?: Element;

  series?: ImagingStudySeries[];
}
