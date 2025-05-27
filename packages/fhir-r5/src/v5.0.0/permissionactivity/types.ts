import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface PermissionActivity {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  actor?: Reference[];

  action?: CodeableConcept[];

  purpose?: CodeableConcept[];
}
