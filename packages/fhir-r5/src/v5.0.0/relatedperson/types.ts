import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  HumanName,
  ContactPoint,
  Address,
  Attachment,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { RelatedPersonCommunication } from "../relatedpersoncommunication/types";

/** Generated from FHIR JSON Schema */

/** Information about a person that is involved in a patient's health or the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface RelatedPerson {
  resourceType: `RelatedPerson`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  active?: boolean;

  _active?: Element;

  patient: Reference;

  relationship?: CodeableConcept[];

  name?: HumanName[];

  telecom?: ContactPoint[];

  gender?: string;

  _gender?: Element;

  birthDate?: string;

  _birthDate?: Element;

  address?: Address[];

  photo?: Attachment[];

  period?: Period;

  communication?: RelatedPersonCommunication[];
}
