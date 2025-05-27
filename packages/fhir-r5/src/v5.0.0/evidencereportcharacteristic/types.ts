import type {
  Extension,
  CodeableConcept,
  Reference,
  Element,
  Quantity,
  Range,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReportCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  valueReference?: Reference;

  valueCodeableConcept?: CodeableConcept;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueQuantity?: Quantity;

  valueRange?: Range;

  exclude?: boolean;

  _exclude?: Element;

  period?: Period;
}
