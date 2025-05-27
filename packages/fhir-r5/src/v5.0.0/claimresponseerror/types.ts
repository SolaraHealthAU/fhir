import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseError {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemSequence?: number;

  _itemSequence?: Element;

  detailSequence?: number;

  _detailSequence?: Element;

  subDetailSequence?: number;

  _subDetailSequence?: Element;

  code: CodeableConcept;

  expression?: string[];

  _expression?: Element[];
}
