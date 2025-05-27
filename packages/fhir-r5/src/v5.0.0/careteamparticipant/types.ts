import type {
  Extension,
  CodeableConcept,
  Reference,
  Period,
  Timing,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care. */
export interface CareTeamParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: CodeableConcept;

  member?: Reference;

  onBehalfOf?: Reference;

  coveragePeriod?: Period;

  coverageTiming?: Timing;
}
