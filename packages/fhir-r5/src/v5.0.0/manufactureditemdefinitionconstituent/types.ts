import type {
  Extension,
  Quantity,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinitionConstituent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  amount?: Quantity[];

  location?: CodeableConcept[];

  function?: CodeableConcept[];

  hasIngredient?: CodeableReference[];
}
