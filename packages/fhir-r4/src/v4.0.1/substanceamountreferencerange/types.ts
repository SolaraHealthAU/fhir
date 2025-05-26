import type { Extension, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID. */
export interface SubstanceAmountReferenceRange {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** Lower limit possible or expected. */
  lowLimit?: Quantity;
  /** Upper limit possible or expected. */
  highLimit?: Quantity;
}
