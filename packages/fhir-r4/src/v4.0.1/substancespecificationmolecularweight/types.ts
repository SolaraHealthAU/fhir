import type { Extension, CodeableConcept, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecificationMolecularWeight {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  method?: CodeableConcept;

  type?: CodeableConcept;

  amount?: Quantity;
}
