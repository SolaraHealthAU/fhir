import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractSubject {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference: Reference[];

  role?: CodeableConcept;
}
