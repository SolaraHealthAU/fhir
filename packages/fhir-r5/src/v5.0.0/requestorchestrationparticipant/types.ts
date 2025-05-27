import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestrationParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  typeCanonical?: string;

  typeReference?: Reference;

  role?: CodeableConcept;

  function?: CodeableConcept;

  actorCanonical?: string;

  _actorCanonical?: Element;

  actorReference?: Reference;
}
