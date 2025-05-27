import type {
  Extension,
  CodeableConcept,
  Reference,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractContentDefinition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  subType?: CodeableConcept;

  publisher?: Reference;

  publicationDate?: string;

  _publicationDate?: Element;

  publicationStatus?: string;

  _publicationStatus?: Element;

  copyright?: string;

  _copyright?: Element;
}
