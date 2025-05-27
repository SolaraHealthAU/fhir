import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Annotation,
  CodeableReference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { GoalTarget } from "../goaltarget/types";

/** Generated from FHIR JSON Schema */

/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface Goal {
  resourceType: `Goal`;

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

  lifecycleStatus?: string;

  _lifecycleStatus?: Element;

  achievementStatus?: CodeableConcept;

  category?: CodeableConcept[];

  continuous?: boolean;

  _continuous?: Element;

  priority?: CodeableConcept;

  description: CodeableConcept;

  subject: Reference;

  startDate?: string;

  _startDate?: Element;

  startCodeableConcept?: CodeableConcept;

  target?: GoalTarget[];

  statusDate?: string;

  _statusDate?: Element;

  statusReason?: string;

  _statusReason?: Element;

  source?: Reference;

  addresses?: Reference[];

  note?: Annotation[];

  outcome?: CodeableReference[];
}
