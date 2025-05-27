import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface PermissionResource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  meaning?: string;

  _meaning?: Element;

  reference: Reference;
}
