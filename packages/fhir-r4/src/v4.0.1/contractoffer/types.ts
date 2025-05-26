import type {
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Element,
} from "../core/types";
import type { ContractParty } from "../contractparty/types";
import type { ContractAnswer } from "../contractanswer/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractOffer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  party?: ContractParty[];

  topic?: Reference;

  type?: CodeableConcept;

  decision?: CodeableConcept;

  decisionMode?: CodeableConcept[];

  answer?: ContractAnswer[];

  text?: string;

  _text?: Element;

  linkId?: string[];

  _linkId?: Element[];

  securityLabelNumber?: number[];

  _securityLabelNumber?: Element[];
}
