import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DocumentReferenceRelatesTo } from "../documentreferencerelatesto/types";
import type { DocumentReferenceContent } from "../documentreferencecontent/types";
import type { DocumentReferenceContext } from "../documentreferencecontext/types";

/** Generated from FHIR JSON Schema */

/** A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text. */
export interface DocumentReference {
  resourceType: `DocumentReference`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document. */
  masterIdentifier?: Identifier;
  /** Other identifiers associated with the document, including version independent identifiers. */
  identifier?: Identifier[];
  /** The status of this document reference. */
  status: "current" | "superseded" | "entered-in-error";

  _status?: Element;
  /** The status of the underlying document. */
  docStatus?: string;

  _docStatus?: Element;
  /** Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced. */
  type?: CodeableConcept;
  /** A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type. */
  category?: CodeableConcept[];
  /** Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). */
  subject?: Reference;
  /** When the document reference was created. */
  date?: string;

  _date?: Element;
  /** Identifies who is responsible for adding the information to the document. */
  author?: Reference[];
  /** Which person or organization authenticates that this document is valid. */
  authenticator?: Reference;
  /** Identifies the organization or group who is responsible for ongoing maintenance of and access to the document. */
  custodian?: Reference;

  relatesTo?: DocumentReferenceRelatesTo[];
  /** Human-readable description of the source document. */
  description?: string;

  _description?: Element;
  /** A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to. */
  securityLabel?: CodeableConcept[];

  content: DocumentReferenceContent[];

  context?: DocumentReferenceContext;
}
