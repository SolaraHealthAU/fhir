import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Period,
  Reference,
  CodeableConcept,
  ExtendedContactDetail,
  Availability,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface PractitionerRole {
  resourceType: `PractitionerRole`;

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

  period?: Period;

  practitioner?: Reference;

  organization?: Reference;

  code?: CodeableConcept[];

  specialty?: CodeableConcept[];

  location?: Reference[];

  healthcareService?: Reference[];

  contact?: ExtendedContactDetail[];

  characteristic?: CodeableConcept[];

  communication?: CodeableConcept[];

  availability?: Availability[];

  endpoint?: Reference[];
}
