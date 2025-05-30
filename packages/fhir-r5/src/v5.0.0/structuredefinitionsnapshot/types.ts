import type { Extension } from "../core/types";
import type { ElementDefinition } from "../elementdefinition/types";

/** Generated from FHIR JSON Schema */

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinitionSnapshot {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  element: ElementDefinition[];
}
