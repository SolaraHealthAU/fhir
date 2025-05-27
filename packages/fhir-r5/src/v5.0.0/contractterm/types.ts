import type {
  Extension,
  Identifier,
  Element,
  Period,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { ContractSecurityLabel } from "../contractsecuritylabel/types";
import type { ContractOffer } from "../contractoffer/types";
import type { ContractAsset } from "../contractasset/types";
import type { ContractAction } from "../contractaction/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractTerm {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  issued?: string;

  _issued?: Element;

  applies?: Period;

  topicCodeableConcept?: CodeableConcept;

  topicReference?: Reference;

  type?: CodeableConcept;

  subType?: CodeableConcept;

  text?: string;

  _text?: Element;

  securityLabel?: ContractSecurityLabel[];

  offer: ContractOffer;

  asset?: ContractAsset[];

  action?: ContractAction[];

  group?: ContractTerm[];
}
