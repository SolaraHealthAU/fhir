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
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** An identifier for this patient. */
  identifier?: Identifier[];
  /** Whether this patient record is in active use. 
Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.

It is often used to filter patient lists to exclude inactive patients

Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death. */
  active?: boolean;

  _active?: Element;
  /** A name associated with the individual. */
  name?: HumanName[];
  /** A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted. */
  telecom?: ContactPoint[];
  /** Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes. */
  gender?: "male" | "female" | "other" | "unknown";

  _gender?: Element;
  /** The date of birth for the individual. */
  birthDate?: string;

  _birthDate?: Element;

  deceasedBoolean?: boolean;

  _deceasedBoolean?: Element;

  deceasedDateTime?: string;

  _deceasedDateTime?: Element;
  /** An address for the individual. */
  address?: Address[];
  /** This field contains a patient's most recent marital (civil) status. */
  maritalStatus?: CodeableConcept;

  multipleBirthBoolean?: boolean;

  _multipleBirthBoolean?: Element;

  multipleBirthInteger?: number;

  _multipleBirthInteger?: Element;
  /** Image of the patient. */
  photo?: Attachment[];

  contact?: PatientContact[];

  communication?: PatientCommunication[];
  /** Patient's nominated care provider. */
  generalPractitioner?: Reference[];
  /** Organization that is the custodian of the patient record. */
  managingOrganization?: Reference;

  link?: PatientLink[];
}
