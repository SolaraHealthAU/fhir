import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinitionContext {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  expression?: string;

  _expression?: Element;
}
