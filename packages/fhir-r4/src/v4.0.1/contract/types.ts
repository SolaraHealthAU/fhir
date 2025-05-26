import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ContractContentDefinition } from "../contractcontentdefinition/types";
import type { ContractTerm } from "../contractterm/types";
import type { ContractSigner } from "../contractsigner/types";
import type { ContractFriendly } from "../contractfriendly/types";
import type { ContractLegal } from "../contractlegal/types";
import type { ContractRule } from "../contractrule/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface Contract {
  resourceType: `Contract`;
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
  /** Unique identifier for this Contract or a derivative that references a Source Contract. */
  identifier?: Identifier[];
  /** Canonical identifier for this contract, represented as a URI (globally unique). */
  url?: string;

  _url?: Element;
  /** An edition identifier used for business purposes to label business significant variants. */
  version?: string;

  _version?: Element;
  /** The status of the resource instance. */
  status?: string;

  _status?: Element;
  /** Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement. */
  legalState?: CodeableConcept;
  /** The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract. */
  instantiatesCanonical?: Reference;
  /** The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract. */
  instantiatesUri?: string;

  _instantiatesUri?: Element;
  /** The minimal content derived from the basal information source at a specific stage in its lifecycle. */
  contentDerivative?: CodeableConcept;
  /** When this  Contract was issued. */
  issued?: string;

  _issued?: Element;
  /** Relevant time or time-period when this Contract is applicable. */
  applies?: Period;
  /** Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract. */
  expirationType?: CodeableConcept;
  /** The target entity impacted by or of interest to parties to the agreement. */
  subject?: Reference[];
  /** A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies. */
  authority?: Reference[];
  /** Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources. */
  domain?: Reference[];
  /** Sites in which the contract is complied with,  exercised, or in force. */
  site?: Reference[];
  /** A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;

  _name?: Element;
  /** A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content. */
  title?: string;

  _title?: Element;
  /** An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content. */
  subtitle?: string;

  _subtitle?: Element;
  /** Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation. */
  alias?: string[];

  _alias?: Element[];
  /** The individual or organization that authored the Contract definition, derivative, or instance in any legal state. */
  author?: Reference;
  /** A selector of legal concerns for this Contract definition, derivative, or instance in any legal state. */
  scope?: CodeableConcept;

  topicCodeableConcept?: CodeableConcept;

  topicReference?: Reference;
  /** A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract. */
  type?: CodeableConcept;
  /** Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope. */
  subType?: CodeableConcept[];

  contentDefinition?: ContractContentDefinition;

  term?: ContractTerm[];
  /** Information that may be needed by/relevant to the performer in their execution of this term action. */
  supportingInfo?: Reference[];
  /** Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity. */
  relevantHistory?: Reference[];

  signer?: ContractSigner[];

  friendly?: ContractFriendly[];

  legal?: ContractLegal[];

  rule?: ContractRule[];

  legallyBindingAttachment?: Attachment;

  legallyBindingReference?: Reference;
}
