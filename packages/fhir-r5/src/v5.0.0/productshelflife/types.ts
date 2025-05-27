import type {
  Extension,
  CodeableConcept,
  Duration,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export interface ProductShelfLife {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
  type?: CodeableConcept;

  periodDuration?: Duration;

  periodString?: string;

  _periodString?: Element;
  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
  specialPrecautionsForStorage?: CodeableConcept[];
}
