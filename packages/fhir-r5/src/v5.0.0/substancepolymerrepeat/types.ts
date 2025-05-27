import type { Extension, Element, CodeableConcept } from "../core/types";
import type { SubstancePolymerRepeatUnit } from "../substancepolymerrepeatunit/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerRepeat {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  averageMolecularFormula?: string;

  _averageMolecularFormula?: Element;

  repeatUnitAmountType?: CodeableConcept;

  repeatUnit?: SubstancePolymerRepeatUnit[];
}
