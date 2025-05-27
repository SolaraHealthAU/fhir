import type {
  Extension,
  Reference,
  CodeableConcept,
  Element,
} from "../core/types";
import type { AuditEventDetail } from "../auditeventdetail/types";
import type { AuditEventAgent } from "../auditeventagent/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEventEntity {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  what?: Reference;

  role?: CodeableConcept;

  securityLabel?: CodeableConcept[];

  query?: string;

  _query?: Element;

  detail?: AuditEventDetail[];

  agent?: AuditEventAgent[];
}
