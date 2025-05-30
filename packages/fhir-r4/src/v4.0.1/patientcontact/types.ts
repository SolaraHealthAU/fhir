import type {
  Extension,
  CodeableConcept,
  HumanName,
  ContactPoint,
  Address,
  Element,
  Reference,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface PatientContact {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The nature of the relationship between the patient and the contact person. */
  relationship?: CodeableConcept[];
  /** A name associated with the contact person. */
  name?: HumanName;
  /** A contact detail for the person, e.g. a telephone number or an email address. */
  telecom?: ContactPoint[];
  /** Address for the contact person. */
  address?: Address;
  /** Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes. */
  gender?: "male" | "female" | "other" | "unknown";

  _gender?: Element;
  /** Organization on behalf of which the contact is acting or for which the contact is working. */
  organization?: Reference;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient. */
  period?: Period;
}
