import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionBinding {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
  strength: "required" | "extensible" | "preferred" | "example";

  _strength?: Element;
  /** Describes the intended use of this particular set of codes. */
  description?: string;

  _description?: Element;
  /** Refers to the value set that identifies the set of codes the binding refers to. */
  valueSet?: string;
}
