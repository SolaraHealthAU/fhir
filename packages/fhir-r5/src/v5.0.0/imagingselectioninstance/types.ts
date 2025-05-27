import type { Extension, Element, Coding } from "../core/types";
import type { ImagingSelectionImageRegion2D } from "../imagingselectionimageregion2d/types";
import type { ImagingSelectionImageRegion3D } from "../imagingselectionimageregion3d/types";

/** Generated from FHIR JSON Schema */

/** A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource. */
export interface ImagingSelectionInstance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  uid?: string;

  _uid?: Element;

  number?: number;

  _number?: Element;

  sopClass?: Coding;

  subset?: string[];

  _subset?: Element[];

  imageRegion2D?: ImagingSelectionImageRegion2D[];

  imageRegion3D?: ImagingSelectionImageRegion3D[];
}
