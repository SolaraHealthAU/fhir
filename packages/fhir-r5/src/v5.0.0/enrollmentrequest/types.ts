import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
export interface EnrollmentRequest {
  resourceType: `EnrollmentRequest`;

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

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  created?: string;

  _created?: Element;

  insurer?: Reference;

  provider?: Reference;

  candidate?: Reference;

  coverage?: Reference;
}
