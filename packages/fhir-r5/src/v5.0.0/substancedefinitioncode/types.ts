import type {
  Extension,
  CodeableConcept,
  Element,
  Annotation,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionCode {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  status?: CodeableConcept;

  statusDate?: string;

  _statusDate?: Element;

  note?: Annotation[];

  source?: Reference[];
}
