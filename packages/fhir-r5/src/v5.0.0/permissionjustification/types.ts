import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface PermissionJustification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  basis?: CodeableConcept[];

  evidence?: Reference[];
}
