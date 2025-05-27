import type {
  Extension,
  CodeableConcept,
  Quantity,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A report of inventory or stock items. */
export interface InventoryReportItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  quantity: Quantity;

  item: CodeableReference;
}
