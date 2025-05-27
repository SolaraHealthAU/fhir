import type {
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface OrganizationQualification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  code: CodeableConcept;

  period?: Period;

  issuer?: Reference;
}
