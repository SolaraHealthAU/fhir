import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItemResponsibleOrganization {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role: CodeableConcept;

  organization: Reference;
}
