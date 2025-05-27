import type { Extension, Element, Expression } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionDynamicValue {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  path?: string;

  _path?: Element;

  expression?: Expression;
}
