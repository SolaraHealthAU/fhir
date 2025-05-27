import type {
  Extension,
  Element,
  Annotation,
  CodeableConcept,
  Reference,
  Quantity,
  Range,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes an element that knowledge (Evidence) is about. */
export interface EvidenceVariableTimeFromEvent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  note?: Annotation[];

  eventCodeableConcept?: CodeableConcept;

  eventReference?: Reference;

  eventDateTime?: string;

  _eventDateTime?: Element;

  eventId?: string;

  _eventId?: Element;

  quantity?: Quantity;

  range?: Range;
}
