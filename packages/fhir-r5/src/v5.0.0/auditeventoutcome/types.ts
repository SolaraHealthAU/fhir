import type { Extension, Coding, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEventOutcome {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: Coding;

  detail?: CodeableConcept[];
}
