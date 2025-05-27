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
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  relationship?: CodeableConcept[];

  name?: HumanName;

  telecom?: ContactPoint[];

  address?: Address;

  gender?: string;

  _gender?: Element;

  organization?: Reference;

  period?: Period;
}
