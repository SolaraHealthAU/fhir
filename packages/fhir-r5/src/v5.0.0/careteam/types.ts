import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  CodeableReference,
  ContactPoint,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { CareTeamParticipant } from "../careteamparticipant/types";

/** Generated from FHIR JSON Schema */

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care. */
export interface CareTeam {
  resourceType: `CareTeam`;

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

  category?: CodeableConcept[];

  name?: string;

  _name?: Element;

  subject?: Reference;

  period?: Period;

  participant?: CareTeamParticipant[];

  reason?: CodeableReference[];

  managingOrganization?: Reference[];

  telecom?: ContactPoint[];

  note?: Annotation[];
}
