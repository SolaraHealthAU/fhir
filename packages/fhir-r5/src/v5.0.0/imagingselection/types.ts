import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImagingSelectionPerformer } from "../imagingselectionperformer/types";
import type { ImagingSelectionInstance } from "../imagingselectioninstance/types";

/** Generated from FHIR JSON Schema */

/** A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource. */
export interface ImagingSelection {
  resourceType: `ImagingSelection`;

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

  subject?: Reference;

  issued?: string;

  _issued?: Element;

  performer?: ImagingSelectionPerformer[];

  basedOn?: Reference[];

  category?: CodeableConcept[];

  code: CodeableConcept;

  studyUid?: string;

  _studyUid?: Element;

  derivedFrom?: Reference[];

  endpoint?: Reference[];

  seriesUid?: string;

  _seriesUid?: Element;

  seriesNumber?: number;

  _seriesNumber?: Element;

  frameOfReferenceUid?: string;

  _frameOfReferenceUid?: Element;

  bodySite?: CodeableReference;

  focus?: Reference[];

  instance?: ImagingSelectionInstance[];
}
