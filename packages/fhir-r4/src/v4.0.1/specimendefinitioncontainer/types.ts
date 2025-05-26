import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
} from "../core/types";
import type { SpecimenDefinitionAdditive } from "../specimendefinitionadditive/types";

/** Generated from FHIR JSON Schema */

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinitionContainer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  material?: CodeableConcept;

  type?: CodeableConcept;

  cap?: CodeableConcept;

  description?: string;

  _description?: Element;

  capacity?: Quantity;

  minimumVolumeQuantity?: Quantity;

  minimumVolumeString?: string;

  _minimumVolumeString?: Element;

  additive?: SpecimenDefinitionAdditive[];

  preparation?: string;

  _preparation?: Element;
}
