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
import type { RequestOrchestrationAction } from "../requestorchestrationaction/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestration {
  resourceType: `RequestOrchestration`;

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

  _instantiatesCanonical?: Element[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  basedOn?: Reference[];

  replaces?: Reference[];

  groupIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  code?: CodeableConcept;

  subject?: Reference;

  encounter?: Reference;

  authoredOn?: string;

  _authoredOn?: Element;

  author?: Reference;

  reason?: CodeableReference[];

  goal?: Reference[];

  note?: Annotation[];

  action?: RequestOrchestrationAction[];
}
