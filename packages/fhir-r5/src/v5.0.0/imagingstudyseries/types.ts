import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  CodeableReference,
} from "../core/types";
import type { ImagingStudyPerformer } from "../imagingstudyperformer/types";
import type { ImagingStudyInstance } from "../imagingstudyinstance/types";

/** Generated from FHIR JSON Schema */

/** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. */
export interface ImagingStudySeries {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  uid?: string;

  _uid?: Element;

  number?: number;

  _number?: Element;

  modality: CodeableConcept;

  description?: string;

  _description?: Element;

  numberOfInstances?: number;

  _numberOfInstances?: Element;

  endpoint?: Reference[];

  bodySite?: CodeableReference;

  laterality?: CodeableConcept;

  specimen?: Reference[];

  started?: string;

  _started?: Element;

  performer?: ImagingStudyPerformer[];

  instance?: ImagingStudyInstance[];
}
