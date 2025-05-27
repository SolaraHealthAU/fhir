import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A container for slots of time that may be available for booking appointments. */
export interface Schedule {
  resourceType: `Schedule`;

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

  serviceCategory?: CodeableConcept[];

  serviceType?: CodeableReference[];

  specialty?: CodeableConcept[];

  name?: string;

  _name?: Element;

  actor: Reference[];

  planningHorizon?: Period;

  comment?: string;

  _comment?: Element;
}
