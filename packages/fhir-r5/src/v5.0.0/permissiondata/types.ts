import type { Extension, Coding, Period, Expression } from "../core/types";
import type { PermissionResource } from "../permissionresource/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface PermissionData {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  resource?: PermissionResource[];

  security?: Coding[];

  period?: Period[];

  expression?: Expression;
}
