import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  CodeableReference,
  Annotation,
  DataRequirement,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
export interface GuidanceResponse {
  resourceType: `GuidanceResponse`;

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

  requestIdentifier?: Identifier;

  identifier?: Identifier[];

  moduleUri?: string;

  _moduleUri?: Element;

  moduleCanonical?: string;

  _moduleCanonical?: Element;

  moduleCodeableConcept?: CodeableConcept;

  status?: string;

  _status?: Element;

  subject?: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  performer?: Reference;

  reason?: CodeableReference[];

  note?: Annotation[];

  evaluationMessage?: Reference;

  outputParameters?: Reference;

  result?: Reference[];

  dataRequirement?: DataRequirement[];
}
