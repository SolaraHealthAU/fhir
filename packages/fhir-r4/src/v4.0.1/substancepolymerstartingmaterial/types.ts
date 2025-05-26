import type { Extension, CodeableConcept, Element } from "../core/types";
import type { SubstanceAmount } from "../substanceamount/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstancePolymerStartingMaterial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  material?: CodeableConcept;

  type?: CodeableConcept;

  isDefining?: boolean;

  _isDefining?: Element;

  amount?: SubstanceAmount;
}
