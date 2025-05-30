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
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Unique identifier for this particular Contract Provision. */
  identifier?: Identifier;
  /** When this Contract Provision was issued. */
  issued?: string;

  _issued?: Element;
  /** Relevant time or time-period when this Contract Provision is applicable. */
  applies?: Period;

  topicCodeableConcept?: CodeableConcept;

  topicReference?: Reference;
  /** A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time. */
  type?: CodeableConcept;
  /** A specialized legal clause or condition based on overarching contract type. */
  subType?: CodeableConcept;
  /** Statement of a provision in a policy or a contract. */
  text?: string;

  _text?: Element;

  securityLabel?: ContractSecurityLabel[];

  offer: ContractOffer;

  asset?: ContractAsset[];

  action?: ContractAction[];

  group?: ContractTerm[];
}
