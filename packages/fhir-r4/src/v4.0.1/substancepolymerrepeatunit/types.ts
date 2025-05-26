import type { Extension, CodeableConcept, Element } from "../core/types";
import type { SubstanceAmount } from "../substanceamount/types";
import type { SubstancePolymerDegreeOfPolymerisation } from "../substancepolymerdegreeofpolymerisation/types";
import type { SubstancePolymerStructuralRepresentation } from "../substancepolymerstructuralrepresentation/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstancePolymerRepeatUnit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  orientationOfPolymerisation?: CodeableConcept;

  repeatUnit?: string;

  _repeatUnit?: Element;

  amount?: SubstanceAmount;

  degreeOfPolymerisation?: SubstancePolymerDegreeOfPolymerisation[];

  structuralRepresentation?: SubstancePolymerStructuralRepresentation[];
}
