import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinitionMapping {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identity?: string;

  _identity?: Element;

  uri?: string;

  _uri?: Element;

  name?: string;

  _name?: Element;

  comment?: string;

  _comment?: Element;
}
