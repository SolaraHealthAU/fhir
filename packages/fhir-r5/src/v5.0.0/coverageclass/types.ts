import type {
  Extension,
  CodeableConcept,
  Identifier,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface CoverageClass {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  value: Identifier;

  name?: string;

  _name?: Element;
}
