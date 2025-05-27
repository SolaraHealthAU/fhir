import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionRepresentation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  representation?: string;

  _representation?: Element;

  format?: CodeableConcept;

  document?: Reference;
}
