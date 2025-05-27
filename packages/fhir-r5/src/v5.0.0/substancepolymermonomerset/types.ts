import type { Extension, CodeableConcept } from "../core/types";
import type { SubstancePolymerStartingMaterial } from "../substancepolymerstartingmaterial/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerMonomerSet {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  ratioType?: CodeableConcept;

  startingMaterial?: SubstancePolymerStartingMaterial[];
}
