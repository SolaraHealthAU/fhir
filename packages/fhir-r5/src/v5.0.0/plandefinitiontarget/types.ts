import type {
  Extension,
  CodeableConcept,
  Quantity,
  Range,
  Element,
  Ratio,
  Duration,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  measure?: CodeableConcept;

  detailQuantity?: Quantity;

  detailRange?: Range;

  detailCodeableConcept?: CodeableConcept;

  detailString?: string;

  _detailString?: Element;

  detailBoolean?: boolean;

  _detailBoolean?: Element;

  detailInteger?: number;

  _detailInteger?: Element;

  detailRatio?: Ratio;

  due?: Duration;
}
