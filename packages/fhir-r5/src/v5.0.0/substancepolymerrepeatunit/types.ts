import type { Extension, Element, CodeableConcept } from "../core/types";
import type { SubstancePolymerDegreeOfPolymerisation } from "../substancepolymerdegreeofpolymerisation/types";
import type { SubstancePolymerStructuralRepresentation } from "../substancepolymerstructuralrepresentation/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerRepeatUnit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  unit?: string;

  _unit?: Element;

  orientation?: CodeableConcept;

  amount?: number;

  _amount?: Element;

  degreeOfPolymerisation?: SubstancePolymerDegreeOfPolymerisation[];

  structuralRepresentation?: SubstancePolymerStructuralRepresentation[];
}
