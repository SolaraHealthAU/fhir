import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionSourceMaterial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  genus?: CodeableConcept;

  species?: CodeableConcept;

  part?: CodeableConcept;

  countryOfOrigin?: CodeableConcept[];
}
