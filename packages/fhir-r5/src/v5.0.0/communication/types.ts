import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CommunicationPayload } from "../communicationpayload/types";

/** Generated from FHIR JSON Schema */

/** A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency communication to a provider/reporter in response to a case report for a reportable condition. */
export interface Communication {
  resourceType: `Communication`;

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

  partOf?: Reference[];

  inResponseTo?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  category?: CodeableConcept[];

  priority?: string;

  _priority?: Element;

  medium?: CodeableConcept[];

  subject?: Reference;

  topic?: CodeableConcept;

  about?: Reference[];

  encounter?: Reference;

  sent?: string;

  _sent?: Element;

  received?: string;

  _received?: Element;

  recipient?: Reference[];

  sender?: Reference;

  reason?: CodeableReference[];

  payload?: CommunicationPayload[];

  note?: Annotation[];
}
