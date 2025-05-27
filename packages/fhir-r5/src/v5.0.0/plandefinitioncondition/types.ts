import type { Extension, Element, Expression } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionCondition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  kind?: string;

  _kind?: Element;

  expression?: Expression;
}
