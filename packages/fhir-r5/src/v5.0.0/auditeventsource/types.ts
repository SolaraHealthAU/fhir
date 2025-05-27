import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEventSource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  site?: Reference;

  observer: Reference;

  type?: CodeableConcept[];
}
