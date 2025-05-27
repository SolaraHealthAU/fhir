import type {
  Meta,
  Element,
  Extension,
  Identifier,
  HumanName,
  ContactPoint,
  Address,
  CodeableConcept,
  Attachment,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { PatientContact } from "../patientcontact/types";
import type { PatientCommunication } from "../patientcommunication/types";
import type { PatientLink } from "../patientlink/types";

/** Generated from FHIR JSON Schema */

/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface Patient {
  resourceType: `Patient`;

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

  name?: HumanName[];

  telecom?: ContactPoint[];

  gender?: string;

  _gender?: Element;

  birthDate?: string;

  _birthDate?: Element;

  deceasedBoolean?: boolean;

  _deceasedBoolean?: Element;

  deceasedDateTime?: string;

  _deceasedDateTime?: Element;

  address?: Address[];

  maritalStatus?: CodeableConcept;

  multipleBirthBoolean?: boolean;

  _multipleBirthBoolean?: Element;

  multipleBirthInteger?: number;

  _multipleBirthInteger?: Element;

  photo?: Attachment[];

  contact?: PatientContact[];

  communication?: PatientCommunication[];

  generalPractitioner?: Reference[];

  managingOrganization?: Reference;

  link?: PatientLink[];
}
