import type {
  Extension,
  CodeableConcept,
  Identifier,
  Element,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionMoiety {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: CodeableConcept;

  identifier?: Identifier;

  name?: string;

  _name?: Element;

  stereochemistry?: CodeableConcept;

  opticalActivity?: CodeableConcept;

  molecularFormula?: string;

  _molecularFormula?: Element;

  amountQuantity?: Quantity;

  amountString?: string;

  _amountString?: Element;

  measurementType?: CodeableConcept;
}
