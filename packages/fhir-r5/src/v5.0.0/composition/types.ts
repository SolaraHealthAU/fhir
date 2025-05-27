import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  UsageContext,
  Annotation,
  RelatedArtifact,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CompositionAttester } from "../compositionattester/types";
import type { CompositionEvent } from "../compositionevent/types";
import type { CompositionSection } from "../compositionsection/types";

/** Generated from FHIR JSON Schema */

/** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). */
export interface Composition {
  resourceType: `Composition`;

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

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  status?: string;

  _status?: Element;

  type: CodeableConcept;

  category?: CodeableConcept[];

  subject?: Reference[];

  encounter?: Reference;

  date?: string;

  _date?: Element;

  useContext?: UsageContext[];

  author: Reference[];

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  note?: Annotation[];

  attester?: CompositionAttester[];

  custodian?: Reference;

  relatesTo?: RelatedArtifact[];

  event?: CompositionEvent[];

  section?: CompositionSection[];
}
