import type { Extension, Coding, Reference, Signature } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractSigner {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: Coding;

  party: Reference;

  signature: Signature[];
}
