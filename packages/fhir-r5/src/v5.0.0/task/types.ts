import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableReference,
  CodeableConcept,
  Period,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { TaskPerformer } from "../taskperformer/types";
import type { TaskRestriction } from "../taskrestriction/types";
import type { TaskInput } from "../taskinput/types";
import type { TaskOutput } from "../taskoutput/types";

/** Generated from FHIR JSON Schema */

/** A task to be performed. */
export interface Task {
  resourceType: `Task`;

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

  statusReason?: CodeableReference;

  businessStatus?: CodeableConcept;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  focus?: Reference;

  for?: Reference;

  encounter?: Reference;

  requestedPeriod?: Period;

  executionPeriod?: Period;

  authoredOn?: string;

  _authoredOn?: Element;

  lastModified?: string;

  _lastModified?: Element;

  requester?: Reference;

  requestedPerformer?: CodeableReference[];

  owner?: Reference;

  performer?: TaskPerformer[];

  location?: Reference;

  reason?: CodeableReference[];

  insurance?: Reference[];

  note?: Annotation[];

  relevantHistory?: Reference[];

  restriction?: TaskRestriction;

  input?: TaskInput[];

  output?: TaskOutput[];
}
