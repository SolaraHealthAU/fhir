import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Quantity,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { InventoryItemName } from "../inventoryitemname/types";
import type { InventoryItemResponsibleOrganization } from "../inventoryitemresponsibleorganization/types";
import type { InventoryItemDescription } from "../inventoryitemdescription/types";
import type { InventoryItemAssociation } from "../inventoryitemassociation/types";
import type { InventoryItemCharacteristic } from "../inventoryitemcharacteristic/types";
import type { InventoryItemInstance } from "../inventoryiteminstance/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItem {
  resourceType: `InventoryItem`;

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

  category?: CodeableConcept[];

  code?: CodeableConcept[];

  name?: InventoryItemName[];

  responsibleOrganization?: InventoryItemResponsibleOrganization[];

  description?: InventoryItemDescription;

  inventoryStatus?: CodeableConcept[];

  baseUnit?: CodeableConcept;

  netContent?: Quantity;

  association?: InventoryItemAssociation[];

  characteristic?: InventoryItemCharacteristic[];

  instance?: InventoryItemInstance;

  productReference?: Reference;
}
