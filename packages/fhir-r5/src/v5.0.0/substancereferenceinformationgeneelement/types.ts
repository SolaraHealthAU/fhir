import type {
  Extension,
  CodeableConcept,
  Identifier,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstanceReferenceInformationGeneElement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  element?: Identifier;

  source?: Reference[];
}
