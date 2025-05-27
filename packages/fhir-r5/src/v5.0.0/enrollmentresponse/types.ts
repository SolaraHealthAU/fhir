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

/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
export interface EnrollmentResponse {
  resourceType: `EnrollmentResponse`;

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

  request?: Reference;

  outcome?: string;

  _outcome?: Element;

  disposition?: string;

  _disposition?: Element;

  created?: string;

  _created?: Element;

  organization?: Reference;

  requestProvider?: Reference;
}
