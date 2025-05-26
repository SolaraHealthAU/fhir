import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractContext {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference?: Reference;

  code?: CodeableConcept[];

  text?: string;

  _text?: Element;
}
