import type {
  Extension,
  Period,
  CodeableConcept,
  Element,
  Money,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeCost {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  effectiveDate?: Period[];

  type: CodeableConcept;

  source?: string;

  _source?: Element;

  costMoney?: Money;

  costCodeableConcept?: CodeableConcept;
}
