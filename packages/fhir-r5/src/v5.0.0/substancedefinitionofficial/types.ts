import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionOfficial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  authority?: CodeableConcept;

  status?: CodeableConcept;

  date?: string;

  _date?: Element;
}
