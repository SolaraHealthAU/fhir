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
import type { PersonCommunication } from "../personcommunication/types";
import type { PersonLink } from "../personlink/types";

/** Generated from FHIR JSON Schema */

/** Demographics and administrative information about a person independent of a specific health-related context. */
export interface Person {
  resourceType: `Person`;

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

  photo?: Attachment[];

  communication?: PersonCommunication[];

  managingOrganization?: Reference;

  link?: PersonLink[];
}
