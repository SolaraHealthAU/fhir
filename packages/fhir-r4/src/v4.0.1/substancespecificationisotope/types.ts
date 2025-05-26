import type {
  Extension,
  Identifier,
  CodeableConcept,
  Quantity,
} from "../core/types";
import type { SubstanceSpecificationMolecularWeight } from "../substancespecificationmolecularweight/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecificationIsotope {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  name?: CodeableConcept;

  substitution?: CodeableConcept;

  halfLife?: Quantity;

  molecularWeight?: SubstanceSpecificationMolecularWeight;
}
