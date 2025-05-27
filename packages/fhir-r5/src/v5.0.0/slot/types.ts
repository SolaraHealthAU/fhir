import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A slot of time on a schedule that may be available for booking appointments. */
export interface Slot {
  resourceType: `Slot`;

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

  serviceCategory?: CodeableConcept[];

  serviceType?: CodeableReference[];

  specialty?: CodeableConcept[];

  appointmentType?: CodeableConcept[];

  schedule: Reference;

  status?: string;

  _status?: Element;

  start?: string;

  _start?: Element;

  end?: string;

  _end?: Element;

  overbooked?: boolean;

  _overbooked?: Element;

  comment?: string;

  _comment?: Element;
}
