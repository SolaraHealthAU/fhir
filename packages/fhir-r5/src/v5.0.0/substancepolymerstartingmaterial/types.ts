import type {
  Extension,
  CodeableConcept,
  Element,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymerStartingMaterial {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  category?: CodeableConcept;

  isDefining?: boolean;

  _isDefining?: Element;

  amount?: Quantity;
}
