import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of significant events/milestones key data throughout the history of an Encounter, often tracked for specific purposes such as billing. */
export interface EncounterHistoryLocation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  location: Reference;

  form?: CodeableConcept;
}
