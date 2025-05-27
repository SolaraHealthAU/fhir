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

  url?: string;

  _url?: Element;

  version?: string;

  _version?: Element;

  status?: string;

  _status?: Element;

  legalState?: CodeableConcept;

  instantiatesCanonical?: Reference;

  instantiatesUri?: string;

  _instantiatesUri?: Element;

  contentDerivative?: CodeableConcept;

  issued?: string;

  _issued?: Element;

  applies?: Period;

  expirationType?: CodeableConcept;

  subject?: Reference[];

  authority?: Reference[];

  domain?: Reference[];

  site?: Reference[];

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  subtitle?: string;

  _subtitle?: Element;

  alias?: string[];

  _alias?: Element[];

  author?: Reference;

  scope?: CodeableConcept;

  topicCodeableConcept?: CodeableConcept;

  topicReference?: Reference;

  type?: CodeableConcept;

  subType?: CodeableConcept[];

  contentDefinition?: ContractContentDefinition;

  term?: ContractTerm[];

  supportingInfo?: Reference[];

  relevantHistory?: Reference[];

  signer?: ContractSigner[];

  friendly?: ContractFriendly[];

  legal?: ContractLegal[];

  rule?: ContractRule[];

  legallyBindingAttachment?: Attachment;

  legallyBindingReference?: Reference;
}
