import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
  Quantity,
  Ratio,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionRelationship {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  substanceDefinitionReference?: Reference;

  substanceDefinitionCodeableConcept?: CodeableConcept;

  type: CodeableConcept;

  isDefining?: boolean;

  _isDefining?: Element;

  amountQuantity?: Quantity;

  amountRatio?: Ratio;

  amountString?: string;

  _amountString?: Element;

  ratioHighLimitAmount?: Ratio;

  comparator?: CodeableConcept;

  source?: Reference[];
}
