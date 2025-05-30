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
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The individual or organization attesting to information. */
  who?: Reference;
  /** When the who is asserting on behalf of another (organization or individual). */
  onBehalfOf?: Reference;
  /** The method by which attested information was submitted/retrieved (manual; API; Push). */
  communicationMethod?: CodeableConcept;
  /** The date the information was attested to. */
  date?: string;

  _date?: Element;
  /** A digital identity certificate associated with the attestation source. */
  sourceIdentityCertificate?: string;

  _sourceIdentityCertificate?: Element;
  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source. */
  proxyIdentityCertificate?: string;

  _proxyIdentityCertificate?: Element;
  /** Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source. */
  proxySignature?: Signature;
  /** Signed assertion by the attestation source that they have attested to the information. */
  sourceSignature?: Signature;
}
