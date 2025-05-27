import type {
  Extension,
  Identifier,
  CodeableConcept,
  Quantity,
  Range,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstanceReferenceInformationTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  target?: Identifier;

  type?: CodeableConcept;

  interaction?: CodeableConcept;

  organism?: CodeableConcept;

  organismType?: CodeableConcept;

  amountQuantity?: Quantity;

  amountRange?: Range;

  amountString?: string;

  _amountString?: Element;

  amountType?: CodeableConcept;

  source?: Reference[];
}
