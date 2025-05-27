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
import type { CommunicationRequestPayload } from "../communicationrequestpayload/types";

/** Generated from FHIR JSON Schema */

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface CommunicationRequest {
  resourceType: `CommunicationRequest`;

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

  basedOn?: Reference[];

  replaces?: Reference[];

  groupIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  intent?: string;

  _intent?: Element;

  category?: CodeableConcept[];

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  medium?: CodeableConcept[];

  subject?: Reference;

  about?: Reference[];

  encounter?: Reference;

  payload?: CommunicationRequestPayload[];

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  authoredOn?: string;

  _authoredOn?: Element;

  requester?: Reference;

  recipient?: Reference[];

  informationProvider?: Reference[];

  reason?: CodeableReference[];

  note?: Annotation[];
}
