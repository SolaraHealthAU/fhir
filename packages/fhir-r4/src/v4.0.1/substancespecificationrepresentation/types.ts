import type {
  Extension,
  CodeableConcept,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecificationRepresentation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  representation?: string;

  _representation?: Element;

  attachment?: Attachment;
}
