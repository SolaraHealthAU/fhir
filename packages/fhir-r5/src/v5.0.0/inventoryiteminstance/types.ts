import type { Extension, Identifier, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemInstance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  lotNumber?: string;

  _lotNumber?: Element;

  expiry?: string;

  _expiry?: Element;

  subject?: Reference;

  location?: Reference;
}
