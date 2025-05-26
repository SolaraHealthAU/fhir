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
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Identifies the type of vision correction product which is required for the patient. */
  product: CodeableConcept;
  /** The eye for which the lens specification applies. */
  eye: "right" | "left";

  _eye?: Element;
  /** Lens power measured in dioptres (0.25 units). */
  sphere?: number;

  _sphere?: Element;
  /** Power adjustment for astigmatism measured in dioptres (0.25 units). */
  cylinder?: number;

  _cylinder?: Element;
  /** Adjustment for astigmatism measured in integer degrees. */
  axis?: number;

  _axis?: Element;

  prism?: VisionPrescriptionPrism[];
  /** Power adjustment for multifocal lenses measured in dioptres (0.25 units). */
  add?: number;

  _add?: Element;
  /** Contact lens power measured in dioptres (0.25 units). */
  power?: number;

  _power?: Element;
  /** Back curvature measured in millimetres. */
  backCurve?: number;

  _backCurve?: Element;
  /** Contact lens diameter measured in millimetres. */
  diameter?: number;

  _diameter?: Element;
  /** The recommended maximum wear period for the lens. */
  duration?: Quantity;
  /** Special color or pattern. */
  color?: string;

  _color?: Element;
  /** Brand recommendations or restrictions. */
  brand?: string;

  _brand?: Element;
  /** Notes for special requirements such as coatings and lens materials. */
  note?: Annotation[];
}
