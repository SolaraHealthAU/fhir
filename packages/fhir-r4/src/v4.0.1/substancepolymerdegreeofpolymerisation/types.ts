import type { Extension, CodeableConcept } from "../core/types";
import type { SubstanceAmount } from "../substanceamount/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstancePolymerDegreeOfPolymerisation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  degree?: CodeableConcept;

  amount?: SubstanceAmount;
}
