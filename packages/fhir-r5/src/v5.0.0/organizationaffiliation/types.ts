import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Period,
  Reference,
  CodeableConcept,
  ExtendedContactDetail,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** Defines an affiliation/association/relationship between 2 distinct organizations, that is not a part-of relationship/sub-division relationship. */
export interface OrganizationAffiliation {
  resourceType: `OrganizationAffiliation`;

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

  organization?: Reference;

  participatingOrganization?: Reference;

  network?: Reference[];

  code?: CodeableConcept[];

  specialty?: CodeableConcept[];

  location?: Reference[];

  healthcareService?: Reference[];

  contact?: ExtendedContactDetail[];

  endpoint?: Reference[];
}
