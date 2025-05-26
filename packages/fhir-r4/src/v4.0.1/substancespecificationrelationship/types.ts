import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
  Quantity,
  Range,
  Ratio,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecificationRelationship {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];

  substanceReference?: Reference;

  substanceCodeableConcept?: CodeableConcept;
  /** For example "salt to parent", "active moiety", "starting material". */
  relationship?: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships. */
  isDefining?: boolean;

  _isDefining?: Element;

  amountQuantity?: Quantity;

  amountRange?: Range;

  amountRatio?: Ratio;

  amountString?: string;

  _amountString?: Element;
  /** For use when the numeric. */
  amountRatioLowLimit?: Ratio;
  /** An operator for the amount, for example "average", "approximately", "less than". */
  amountType?: CodeableConcept;
  /** Supporting literature. */
  source?: Reference[];
}
