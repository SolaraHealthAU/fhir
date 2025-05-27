import type { Extension, Element, Expression } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface ActivityDefinitionDynamicValue {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  path?: string;

  _path?: Element;

  expression: Expression;
}
