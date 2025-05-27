import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { VisionPrescriptionLensSpecification } from "../visionprescriptionlensspecification/types";

/** Generated from FHIR JSON Schema */

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface VisionPrescription {
  resourceType: `VisionPrescription`;

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

  created?: string;

  _created?: Element;

  patient: Reference;

  encounter?: Reference;

  dateWritten?: string;

  _dateWritten?: Element;

  prescriber: Reference;

  lensSpecification: VisionPrescriptionLensSpecification[];
}
