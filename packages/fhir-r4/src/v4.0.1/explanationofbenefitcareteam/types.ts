import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitCareTeam {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A number to uniquely identify care team entries. */
  sequence: number;

  _sequence?: Element;
  /** Member of the team who provided the product or service. */
  provider: Reference;
  /** The party who is billing and/or responsible for the claimed products or services. */
  responsible?: boolean;

  _responsible?: Element;
  /** The lead, assisting or supervising practitioner and their discipline if a multidisciplinary team. */
  role?: CodeableConcept;
  /** The qualification of the practitioner which is applicable for this service. */
  qualification?: CodeableConcept;
}
