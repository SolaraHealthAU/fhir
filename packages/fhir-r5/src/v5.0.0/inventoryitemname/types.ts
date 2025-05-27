import type { Extension, Coding, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemName {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  nameType: Coding;

  language?: string;

  _language?: Element;

  name?: string;

  _name?: Element;
}
