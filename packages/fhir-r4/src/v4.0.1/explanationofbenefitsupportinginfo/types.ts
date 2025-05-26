import type {
  Extension,
  Element,
  CodeableConcept,
  Period,
  Quantity,
  Attachment,
  Reference,
  Coding,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitSupportingInfo {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A number to uniquely identify supporting information entries. */
  sequence: number;

  _sequence?: Element;
  /** The general class of the information supplied: information; exception; accident, employment; onset, etc. */
  category: CodeableConcept;
  /** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought. */
  code?: CodeableConcept;

  timingDate?: string;

  _timingDate?: Element;

  timingPeriod?: Period;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueString?: string;

  _valueString?: Element;

  valueQuantity?: Quantity;

  valueAttachment?: Attachment;

  valueReference?: Reference;
  /** Provides the reason in the situation where a reason code is required in addition to the content. */
  reason?: Coding;
}
