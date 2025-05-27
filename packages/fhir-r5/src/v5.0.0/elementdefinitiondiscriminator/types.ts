import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionDiscriminator {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: "value" | "exists" | "pattern" | "type" | "profile" | "position";

  _type?: Element;

  path?: string;

  _path?: Element;
}
