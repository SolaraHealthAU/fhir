import type {
  Meta,
  Element,
  Extension,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { PermissionJustification } from "../permissionjustification/types";
import type { PermissionRule } from "../permissionrule/types";

/** Generated from FHIR JSON Schema */

/** Permission resource holds access rules for a given data and context. */
export interface Permission {
  resourceType: `Permission`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  status?: string;

  _status?: Element;

  asserter?: Reference;

  date?: string[];

  _date?: Element[];

  validity?: Period;

  justification?: PermissionJustification;

  combining?: string;

  _combining?: Element;

  rule?: PermissionRule[];
}
