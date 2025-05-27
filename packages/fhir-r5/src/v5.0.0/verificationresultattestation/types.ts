import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
  Signature,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResultAttestation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  who?: Reference;

  onBehalfOf?: Reference;

  communicationMethod?: CodeableConcept;

  date?: string;

  _date?: Element;

  sourceIdentityCertificate?: string;

  _sourceIdentityCertificate?: Element;

  proxyIdentityCertificate?: string;

  _proxyIdentityCertificate?: Element;

  proxySignature?: Signature;

  sourceSignature?: Signature;
}
