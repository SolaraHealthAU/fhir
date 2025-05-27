import type {
  Extension,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseBodySite {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  site: CodeableReference[];

  subSite?: CodeableConcept[];
}
