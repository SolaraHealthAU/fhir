import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerDegreeOfPolymerisation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  average?: number;

  _average?: Element;

  low?: number;

  _low?: Element;

  high?: number;

  _high?: Element;
}
