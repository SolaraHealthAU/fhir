import type { Extension, Element, Coding, Reference } from "../core/types";
import type { ImagingStudyPerformer } from "../imagingstudyperformer/types";
import type { ImagingStudyInstance } from "../imagingstudyinstance/types";

/** Generated from FHIR JSON Schema */

/** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. */
export interface ImagingStudySeries {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The DICOM Series Instance UID for the series. */
  uid: string;

  _uid?: Element;
  /** The numeric identifier of this series in the study. */
  number?: number;

  _number?: Element;
  /** The modality of this series sequence. */
  modality: Coding;
  /** A description of the series. */
  description?: string;

  _description?: Element;
  /** Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present. */
  numberOfInstances?: number;

  _numberOfInstances?: Element;
  /** The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType. */
  endpoint?: Reference[];
  /** The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality. */
  bodySite?: Coding;
  /** The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite. */
  laterality?: Coding;
  /** The specimen imaged, e.g., for whole slide imaging of a biopsy. */
  specimen?: Reference[];
  /** The date and time the series was started. */
  started?: string;

  _started?: Element;

  performer?: ImagingStudyPerformer[];

  instance?: ImagingStudyInstance[];
}
