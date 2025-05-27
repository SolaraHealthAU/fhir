import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DocumentReferenceAttester } from "../documentreferenceattester/types";
import type { DocumentReferenceRelatesTo } from "../documentreferencerelatesto/types";
import type { DocumentReferenceContent } from "../documentreferencecontent/types";

/** Generated from FHIR JSON Schema */

/** A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference. */
export interface DocumentReference {
  resourceType: `DocumentReference`;

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

  version?: string;

  _version?: Element;

  basedOn?: Reference[];

  status?: string;

  _status?: Element;

  docStatus?: string;

  _docStatus?: Element;

  modality?: CodeableConcept[];

  type?: CodeableConcept;

  category?: CodeableConcept[];

  subject?: Reference;

  context?: Reference[];

  event?: CodeableReference[];

  bodySite?: CodeableReference[];

  facilityType?: CodeableConcept;

  practiceSetting?: CodeableConcept;

  period?: Period;

  date?: string;

  _date?: Element;

  author?: Reference[];

  attester?: DocumentReferenceAttester[];

  custodian?: Reference;

  relatesTo?: DocumentReferenceRelatesTo[];

  description?: string;

  _description?: Element;

  securityLabel?: CodeableConcept[];

  content: DocumentReferenceContent[];
}
