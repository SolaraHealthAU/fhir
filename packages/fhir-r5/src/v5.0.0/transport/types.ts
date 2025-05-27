import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Annotation,
  CodeableReference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { TransportRestriction } from "../transportrestriction/types";
import type { TransportInput } from "../transportinput/types";
import type { TransportOutput } from "../transportoutput/types";

/** Generated from FHIR JSON Schema */

/** Record of transport of item. */
export interface Transport {
  resourceType: `Transport`;

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

  instantiatesCanonical?: string;

  instantiatesUri?: string;

  _instantiatesUri?: Element;

  basedOn?: Reference[];

  groupIdentifier?: Identifier;

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  focus?: Reference;

  for?: Reference;

  encounter?: Reference;

  completionTime?: string;

  _completionTime?: Element;

  authoredOn?: string;

  _authoredOn?: Element;

  lastModified?: string;

  _lastModified?: Element;

  requester?: Reference;

  performerType?: CodeableConcept[];

  owner?: Reference;

  location?: Reference;

  insurance?: Reference[];

  note?: Annotation[];

  relevantHistory?: Reference[];

  restriction?: TransportRestriction;

  input?: TransportInput[];

  output?: TransportOutput[];

  requestedLocation: Reference;

  currentLocation: Reference;

  reason?: CodeableReference;

  history?: Reference;
}
