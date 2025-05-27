import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CarePlanActivity } from "../careplanactivity/types";

/** Generated from FHIR JSON Schema */

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface CarePlan {
  resourceType: `CarePlan`;

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

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  basedOn?: Reference[];

  replaces?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  intent?: string;

  _intent?: Element;

  category?: CodeableConcept[];

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  subject: Reference;

  encounter?: Reference;

  period?: Period;

  created?: string;

  _created?: Element;

  custodian?: Reference;

  contributor?: Reference[];

  careTeam?: Reference[];

  addresses?: CodeableReference[];

  supportingInfo?: Reference[];

  goal?: Reference[];

  activity?: CarePlanActivity[];

  note?: Annotation[];
}
