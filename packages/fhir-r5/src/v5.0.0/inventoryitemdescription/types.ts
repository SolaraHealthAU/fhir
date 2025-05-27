import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemDescription {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  language?: string;

  _language?: Element;

  description?: string;

  _description?: Element;
}
