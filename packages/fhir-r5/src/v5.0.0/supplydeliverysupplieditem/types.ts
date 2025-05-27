import type {
  Extension,
  Quantity,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Record of delivery of what is supplied. */
export interface SupplyDeliverySuppliedItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  quantity?: Quantity;

  itemCodeableConcept?: CodeableConcept;

  itemReference?: Reference;
}
