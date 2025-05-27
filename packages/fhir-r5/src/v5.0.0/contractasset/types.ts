import type {
  Extension,
  CodeableConcept,
  Reference,
  Coding,
  Element,
  Period,
} from "../core/types";
import type { ContractContext } from "../contractcontext/types";
import type { ContractAnswer } from "../contractanswer/types";
import type { ContractValuedItem } from "../contractvalueditem/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractAsset {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  scope?: CodeableConcept;

  type?: CodeableConcept[];

  typeReference?: Reference[];

  subtype?: CodeableConcept[];

  relationship?: Coding;

  context?: ContractContext[];

  condition?: string;

  _condition?: Element;

  periodType?: CodeableConcept[];

  period?: Period[];

  usePeriod?: Period[];

  text?: string;

  _text?: Element;

  linkId?: string[];

  _linkId?: Element[];

  answer?: ContractAnswer[];

  securityLabelNumber?: number[];

  _securityLabelNumber?: Element[];

  valuedItem?: ContractValuedItem[];
}
