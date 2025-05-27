import type { Extension, Element, CodeableConcept } from "../core/types";
import type { PermissionData } from "../permissiondata/types";
import type { PermissionActivity } from "../permissionactivity/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface PermissionRule {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  data?: PermissionData[];

  activity?: PermissionActivity[];

  limit?: CodeableConcept[];
}
