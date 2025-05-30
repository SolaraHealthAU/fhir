import type { Extension, Element, Reference } from "../core/types";
import type { ProvenanceAgent } from "../provenanceagent/types";

/** Generated from FHIR JSON Schema */

/** Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. */
export interface ProvenanceEntity {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: string;

  _role?: Element;

  what: Reference;

  agent?: ProvenanceAgent[];
}
