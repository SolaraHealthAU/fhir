import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ConsentPolicy } from "../consentpolicy/types";
import type { ConsentVerification } from "../consentverification/types";
import type { ConsentProvision } from "../consentprovision/types";

/** Generated from FHIR JSON Schema */

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface Consent {
  resourceType: `Consent`;
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
  /** Unique identifier for this copy of the Consent Statement. */
  identifier?: Identifier[];
  /** Indicates the current state of this consent. */
  status:
    | "draft"
    | "proposed"
    | "active"
    | "rejected"
    | "inactive"
    | "entered-in-error";

  _status?: Element;
  /** A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible. */
  scope: CodeableConcept;
  /** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements. */
  category: CodeableConcept[];
  /** The patient/healthcare consumer to whom this consent applies. */
  patient?: Reference;
  /** When this  Consent was issued / created / indexed. */
  dateTime?: string;

  _dateTime?: Element;
  /** Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions. */
  performer?: Reference[];
  /** The organization that manages the consent, and the framework within which it is executed. */
  organization?: Reference[];

  sourceAttachment?: Attachment;

  sourceReference?: Reference;

  policy?: ConsentPolicy[];
  /** A reference to the specific base computable regulation or policy. */
  policyRule?: CodeableConcept;

  verification?: ConsentVerification[];

  provision?: ConsentProvision;
}
