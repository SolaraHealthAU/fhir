import type {
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A person who is directly or indirectly involved in the provisioning of healthcare or related services. */
export interface PractitionerQualification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  code: CodeableConcept;

  period?: Period;

  issuer?: Reference;
}
