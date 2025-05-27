import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Attachment,
  ExtendedContactDetail,
  Availability,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { HealthcareServiceEligibility } from "../healthcareserviceeligibility/types";

/** Generated from FHIR JSON Schema */

/** The details of a healthcare service available at a location. */
export interface HealthcareService {
  resourceType: `HealthcareService`;

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

  providedBy?: Reference;

  offeredIn?: Reference[];

  category?: CodeableConcept[];

  type?: CodeableConcept[];

  specialty?: CodeableConcept[];

  location?: Reference[];

  name?: string;

  _name?: Element;

  comment?: string;

  _comment?: Element;

  extraDetails?: string;

  _extraDetails?: Element;

  photo?: Attachment;

  contact?: ExtendedContactDetail[];

  coverageArea?: Reference[];

  serviceProvisionCode?: CodeableConcept[];

  eligibility?: HealthcareServiceEligibility[];

  program?: CodeableConcept[];

  characteristic?: CodeableConcept[];

  communication?: CodeableConcept[];

  referralMethod?: CodeableConcept[];

  appointmentRequired?: boolean;

  _appointmentRequired?: Element;

  availability?: Availability[];

  endpoint?: Reference[];
}
