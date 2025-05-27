import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
  Annotation,
} from "../core/types";
import type { VisionPrescriptionPrism } from "../visionprescriptionprism/types";

/** Generated from FHIR JSON Schema */

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface VisionPrescriptionLensSpecification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  product: CodeableConcept;

  eye?: string;

  _eye?: Element;

  sphere?: number;

  _sphere?: Element;

  cylinder?: number;

  _cylinder?: Element;

  axis?: number;

  _axis?: Element;

  prism?: VisionPrescriptionPrism[];

  add?: number;

  _add?: Element;

  power?: number;

  _power?: Element;

  backCurve?: number;

  _backCurve?: Element;

  diameter?: number;

  _diameter?: Element;

  duration?: Quantity;

  color?: string;

  _color?: Element;

  brand?: string;

  _brand?: Element;

  note?: Annotation[];
}
