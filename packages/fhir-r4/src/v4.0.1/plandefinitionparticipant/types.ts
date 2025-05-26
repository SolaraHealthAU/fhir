import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface PlanDefinitionParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: "patient" | "practitioner" | "related-person" | "device";

  _type?: Element;

  role?: CodeableConcept;
}
