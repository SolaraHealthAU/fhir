import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Age,
  Range,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { FamilyMemberHistoryParticipant } from "../familymemberhistoryparticipant/types";
import type { FamilyMemberHistoryCondition } from "../familymemberhistorycondition/types";
import type { FamilyMemberHistoryProcedure } from "../familymemberhistoryprocedure/types";

/** Generated from FHIR JSON Schema */

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FamilyMemberHistory {
  resourceType: `FamilyMemberHistory`;

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

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  status?: string;

  _status?: Element;

  dataAbsentReason?: CodeableConcept;

  patient: Reference;

  date?: string;

  _date?: Element;

  participant?: FamilyMemberHistoryParticipant[];

  name?: string;

  _name?: Element;

  relationship: CodeableConcept;

  sex?: CodeableConcept;

  bornPeriod?: Period;

  bornDate?: string;

  _bornDate?: Element;

  bornString?: string;

  _bornString?: Element;

  ageAge?: Age;

  ageRange?: Range;

  ageString?: string;

  _ageString?: Element;

  estimatedAge?: boolean;

  _estimatedAge?: Element;

  deceasedBoolean?: boolean;

  _deceasedBoolean?: Element;

  deceasedAge?: Age;

  deceasedRange?: Range;

  deceasedDate?: string;

  _deceasedDate?: Element;

  deceasedString?: string;

  _deceasedString?: Element;

  reason?: CodeableReference[];

  note?: Annotation[];

  condition?: FamilyMemberHistoryCondition[];

  procedure?: FamilyMemberHistoryProcedure[];
}
