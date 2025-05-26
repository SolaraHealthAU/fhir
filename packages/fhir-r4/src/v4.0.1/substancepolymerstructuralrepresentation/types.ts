import type {
  Extension,
  CodeableConcept,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstancePolymerStructuralRepresentation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  representation?: string;

  _representation?: Element;

  attachment?: Attachment;
}
