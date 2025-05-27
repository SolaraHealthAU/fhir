import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource. */
export interface ImagingSelectionImageRegion2D {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  regionType?: string;

  _regionType?: Element;

  coordinate?: number[];

  _coordinate?: Element[];
}
