import type {
  Meta,
  Element,
  Extension,
  Reference,
  Period,
  CodeableReference,
  CodeableConcept,
  Signature,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ProvenanceAgent } from "../provenanceagent/types";
import type { ProvenanceEntity } from "../provenanceentity/types";

/** Generated from FHIR JSON Schema */

/** Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. */
export interface Provenance {
  resourceType: `Provenance`;

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

  target: Reference[];

  occurredPeriod?: Period;

  occurredDateTime?: string;

  _occurredDateTime?: Element;

  recorded?: string;

  _recorded?: Element;

  policy?: string[];

  _policy?: Element[];

  location?: Reference;

  authorization?: CodeableReference[];

  activity?: CodeableConcept;

  basedOn?: Reference[];

  patient?: Reference;

  encounter?: Reference;

  agent: ProvenanceAgent[];

  entity?: ProvenanceEntity[];

  signature?: Signature[];
}
