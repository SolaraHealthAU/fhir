import type {
  Extension,
  CodeableConcept,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerStructuralRepresentation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  representation?: string;

  _representation?: Element;

  format?: CodeableConcept;

  attachment?: Attachment;
}
