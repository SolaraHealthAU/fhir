import type {
  Extension,
  CodeableConcept,
  Reference,
  Ratio,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemAssociation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  associationType: CodeableConcept;

  relatedItem: Reference;

  quantity: Ratio;
}
