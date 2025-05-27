import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { EpisodeOfCareStatusHistory } from "../episodeofcarestatushistory/types";
import type { EpisodeOfCareReason } from "../episodeofcarereason/types";
import type { EpisodeOfCareDiagnosis } from "../episodeofcarediagnosis/types";

/** Generated from FHIR JSON Schema */

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface EpisodeOfCare {
  resourceType: `EpisodeOfCare`;

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

  status?: string;

  _status?: Element;

  statusHistory?: EpisodeOfCareStatusHistory[];

  type?: CodeableConcept[];

  reason?: EpisodeOfCareReason[];

  diagnosis?: EpisodeOfCareDiagnosis[];

  patient: Reference;

  managingOrganization?: Reference;

  period?: Period;

  referralRequest?: Reference[];

  careManager?: Reference;

  careTeam?: Reference[];

  account?: Reference[];
}
