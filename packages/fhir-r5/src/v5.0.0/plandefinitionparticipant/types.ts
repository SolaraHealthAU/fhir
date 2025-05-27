import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  actorId?: string;

  _actorId?: Element;

  type?: string;

  _type?: Element;

  typeCanonical?: string;

  typeReference?: Reference;

  role?: CodeableConcept;

  function?: CodeableConcept;
}
