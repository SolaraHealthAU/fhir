import type { Extension, Reference, Element, Signature } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResultValidator {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  organization: Reference;

  identityCertificate?: string;

  _identityCertificate?: Element;

  attestationSignature?: Signature;
}
