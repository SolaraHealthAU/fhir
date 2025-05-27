import type {
  Meta,
  Element,
  Extension,
  CodeableConcept,
  Period,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { AuditEventOutcome } from "../auditeventoutcome/types";
import type { AuditEventAgent } from "../auditeventagent/types";
import type { AuditEventSource } from "../auditeventsource/types";
import type { AuditEventEntity } from "../auditevententity/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEvent {
  resourceType: `AuditEvent`;

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

  category?: CodeableConcept[];

  code: CodeableConcept;

  action?: string;

  _action?: Element;

  severity?: string;

  _severity?: Element;

  occurredPeriod?: Period;

  occurredDateTime?: string;

  _occurredDateTime?: Element;

  recorded?: string;

  _recorded?: Element;

  outcome?: AuditEventOutcome;

  authorization?: CodeableConcept[];

  basedOn?: Reference[];

  patient?: Reference;

  encounter?: Reference;

  agent: AuditEventAgent[];

  source: AuditEventSource;

  entity?: AuditEventEntity[];
}
