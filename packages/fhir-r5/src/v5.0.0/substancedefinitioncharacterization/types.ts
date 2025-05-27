import type {
  Extension,
  CodeableConcept,
  Element,
  Attachment,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionCharacterization {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  technique?: CodeableConcept;

  form?: CodeableConcept;

  description?: string;

  _description?: Element;

  file?: Attachment[];
}
