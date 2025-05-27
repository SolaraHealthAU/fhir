import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { InventoryReportInventoryListing } from "../inventoryreportinventorylisting/types";

/** Generated from FHIR JSON Schema */

/** A report of inventory or stock items. */
export interface InventoryReport {
  resourceType: `InventoryReport`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  countType?: string;

  _countType?: Element;

  operationType?: CodeableConcept;

  operationTypeReason?: CodeableConcept;

  reportedDateTime?: string;

  _reportedDateTime?: Element;

  reporter?: Reference;

  reportingPeriod?: Period;

  inventoryListing?: InventoryReportInventoryListing[];

  note?: Annotation[];
}
