import type {
  Meta,
  Element,
  Extension,
  Identifier,
  HumanName,
  ContactPoint,
  Address,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { PractitionerQualification } from "../practitionerqualification/types";
import type { PractitionerCommunication } from "../practitionercommunication/types";

/** Generated from FHIR JSON Schema */

/** A person who is directly or indirectly involved in the provisioning of healthcare or related services. */
export interface Practitioner {
  resourceType: `Practitioner`;

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

  photo?: Attachment[];

  qualification?: PractitionerQualification[];

  communication?: PractitionerCommunication[];
}
