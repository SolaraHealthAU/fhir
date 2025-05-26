import type { Extension, Element, Coding } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractSecurityLabel {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  number?: number[];

  _number?: Element[];

  classification: Coding;

  category?: Coding[];

  control?: Coding[];
}
