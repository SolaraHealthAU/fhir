import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
} from "../core/types";
import type { InventoryReportItem } from "../inventoryreportitem/types";

/** Generated from FHIR JSON Schema */

/** A report of inventory or stock items. */
export interface InventoryReportInventoryListing {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  location?: Reference;

  itemStatus?: CodeableConcept;

  countingDateTime?: string;

  _countingDateTime?: Element;

  item?: InventoryReportItem[];
}
